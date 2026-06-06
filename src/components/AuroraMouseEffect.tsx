import { useEffect, useRef } from 'react'

type AuroraMode = 'interactive' | 'ambient' | 'off'
type AuroraVariant = 'fixed' | 'contained'

const IS_DEV = import.meta.env.DEV

const VERTEX_SHADER = `attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}`

const FRAGMENT_SHADER = `
precision highp float;
uniform float u_t;
uniform vec2 u_r;
uniform vec2 u_m;
uniform float u_intensity;

vec3 mod289(vec3 x){return x-floor(x*(1./289.))*289.;}
vec4 mod289(vec4 x){return x-floor(x*(1./289.))*289.;}
vec4 perm(vec4 x){return mod289(((x*34.)+1.)*x);}
float snoise(vec3 v){
  const vec2 C=vec2(1./6.,1./3.);
  const vec4 D=vec4(0.,.5,1.,2.);
  vec3 i=floor(v+dot(v,C.yyy));
  vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz);
  vec3 l=1.-g;
  vec3 i1=min(g,l.zxy);
  vec3 i2=max(g,l.zxy);
  vec3 x1=x0-i1+C.xxx;
  vec3 x2=x0-i2+C.yyy;
  vec3 x3=x0-D.yyy;
  i=mod289(i);
  vec4 p=perm(perm(perm(i.z+vec4(0.,i1.z,i2.z,1.))+i.y+vec4(0.,i1.y,i2.y,1.))+i.x+vec4(0.,i1.x,i2.x,1.));
  float n_=1./7.;
  vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.*floor(p*ns.z*ns.z);
  vec4 x_=floor(j*ns.z);
  vec4 y_=floor(j-7.*x_);
  vec4 x=x_*ns.x+ns.yyyy;
  vec4 y=y_*ns.x+ns.yyyy;
  vec4 h=1.-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy);
  vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.+1.;
  vec4 s1=floor(b1)*2.+1.;
  vec4 sh=-step(h,vec4(0.));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;
  vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x);
  vec3 p1=vec3(a0.zw,h.y);
  vec3 p2=vec3(a1.xy,h.z);
  vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=1.79284291400159-.85373472095314*vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3));
  p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
  vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);
  m=m*m;
  return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}

float fbm(vec3 p){
  float v=0.,a=.5;
  for(int i=0;i<5;i++){
    v+=a*snoise(p);
    p*=2.1;
    a*=.48;
  }
  return v;
}

void main(){
  vec2 uv=gl_FragCoord.xy/u_r;
  vec2 p=uv*2.-1.;
  p.x*=u_r.x/u_r.y;

  vec2 mp=u_m*2.-1.;
  mp.x*=u_r.x/u_r.y;
  float md=length(p-mp);
  float mInfluence=smoothstep(1.58,0.,md)*0.75;
  p+=normalize(p-mp+.001)*mInfluence*0.45;

  float t=u_t*0.25;

  float n1=fbm(vec3(p*1.2+vec2(t*0.4,t*0.3),t*0.2));
  float n2=fbm(vec3(p*2.5+vec2(-t*0.6,t*0.5),t*0.35+5.));
  float n3=fbm(vec3(p*1.8+mp*0.5,t*0.5+10.));
  float wave=sin(length(p)*4.0-t*2.0)*0.5+0.5;
  float n4=fbm(vec3(p*0.8+vec2(t*0.2,-t*0.15),t*0.1+20.))*wave;

  float n=n1*0.55+n2*0.28+n3*mInfluence*1.65+n4*0.32;

  vec3 c1=vec3(0.071,0.118,0.322);
  vec3 c2=vec3(0.588,0.035,0.169);
  vec3 c3=vec3(0.941,0.690,0.753);

  float intensity=smoothstep(-0.15,0.75,n);
  vec3 col=mix(c1,c2,intensity);
  col=mix(col,c3,smoothstep(0.4,1.0,intensity)*0.5);

  float glow=exp(-md*md*1.6)*0.70;
  float glowSoft=exp(-md*md*0.55)*0.11;
  col+=mix(c2,c3,glow)*glow*0.88;
  col+=c1*glowSoft*0.18;

  float vig=1.-smoothstep(0.35,1.45,length(uv*2.-1.));
  float alpha=(intensity*0.36+glow*0.92+glowSoft*0.21)*vig*u_intensity;
  float centerGlow=exp(-dot(p,p)*0.5)*0.11*u_intensity;
  alpha+=centerGlow;

  gl_FragColor=vec4(col,alpha);
}
`

function devWarn(message: string, detail?: unknown) {
  if (IS_DEV) {
    console.warn(`[AuroraMouseEffect] ${message}`, detail ?? '')
  }
}

function devInfo(message: string, detail?: unknown) {
  if (IS_DEV) {
    console.info(`[AuroraMouseEffect] ${message}`, detail ?? '')
  }
}

function compileShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type)
  if (!shader) {
    devWarn('Falha ao criar shader.')
    return null
  }

  gl.shaderSource(shader, source)
  gl.compileShader(shader)

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const log = gl.getShaderInfoLog(shader)
    devWarn('Erro de compilação do shader.', log)
    gl.deleteShader(shader)
    return null
  }

  return shader
}

function getAuroraMode(): AuroraMode {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return 'off'

  const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
  return hasFinePointer ? 'interactive' : 'ambient'
}

interface AuroraMouseEffectProps {
  className?: string
  /** fixed = viewport inteiro; contained = preenche o pai position:absolute/fixed */
  variant?: AuroraVariant
}

export function AuroraMouseEffect({
  className = '',
  variant = 'contained',
}: AuroraMouseEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const mode = getAuroraMode()

    if (mode === 'off') {
      devWarn('Efeito desativado: prefers-reduced-motion está ativo.')
      return
    }

    const gl = canvas.getContext('webgl', {
      alpha: true,
      antialias: false,
      premultipliedAlpha: false,
    })

    if (!gl) {
      devWarn('WebGL não disponível neste navegador.')
      return
    }

    const vertexShader = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER)
    const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER)
    if (!vertexShader || !fragmentShader) return

    const program = gl.createProgram()
    if (!program) {
      devWarn('Falha ao criar programa WebGL.')
      return
    }

    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fragmentShader)
    gl.linkProgram(program)

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      devWarn('Erro ao linkar programa WebGL.', gl.getProgramInfoLog(program))
      gl.deleteProgram(program)
      gl.deleteShader(vertexShader)
      gl.deleteShader(fragmentShader)
      return
    }

    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW,
    )

    const positionLocation = gl.getAttribLocation(program, 'p')
    gl.enableVertexAttribArray(positionLocation)
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)

    const timeLocation = gl.getUniformLocation(program, 'u_t')
    const resolutionLocation = gl.getUniformLocation(program, 'u_r')
    const mouseLocation = gl.getUniformLocation(program, 'u_m')
    const intensityLocation = gl.getUniformLocation(program, 'u_intensity')

    let mx = 0.5
    let my = 0.42
    let tmx = mode === 'ambient' ? 0.62 : 0.5
    let tmy = mode === 'ambient' ? 0.38 : 0.42
    let animationFrame = 0
    let isVisible = !document.hidden

    const maxDpr = mode === 'interactive' ? 1.5 : 1
    const intensityMultiplier =
      variant === 'fixed'
        ? mode === 'interactive'
          ? 1.12
          : 0.62
        : mode === 'interactive'
          ? 1.15
          : 0.7

    const getCanvasSize = () => {
      if (variant === 'contained') {
        const parent = canvas.parentElement
        if (parent) {
          return {
            width: Math.max(parent.clientWidth, 1),
            height: Math.max(parent.clientHeight, 1),
          }
        }
      }

      return {
        width: Math.max(window.innerWidth, 1),
        height: Math.max(window.innerHeight, 1),
      }
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, maxDpr)
      const { width, height } = getCanvasSize()

      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      gl.viewport(0, 0, canvas.width, canvas.height)
    }

    const handleMouseMove = (event: MouseEvent) => {
      if (mode !== 'interactive') return

      const rect = canvas.getBoundingClientRect()
      if (rect.width === 0 || rect.height === 0) return

      tmx = (event.clientX - rect.left) / rect.width
      tmy = 1 - (event.clientY - rect.top) / rect.height
    }

    const handleVisibility = () => {
      isVisible = !document.hidden
    }

    const render = (time: number) => {
      animationFrame = requestAnimationFrame(render)
      if (!isVisible) return

      const lerp = mode === 'interactive' ? 0.12 : 0.04
      mx += (tmx - mx) * lerp
      my += (tmy - my) * lerp

      gl.clearColor(0, 0, 0, 0)
      gl.clear(gl.COLOR_BUFFER_BIT)
      gl.enable(gl.BLEND)
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE)
      gl.useProgram(program)
      gl.uniform1f(timeLocation, time * 0.001)
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height)
      gl.uniform2f(mouseLocation, mx, my)
      gl.uniform1f(intensityLocation, intensityMultiplier)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
    }

    resize()
    devInfo('Inicializado.', { mode, variant, intensity: intensityMultiplier })

    let resizeObserver: ResizeObserver | null = null

    window.addEventListener('resize', resize)
    document.addEventListener('visibilitychange', handleVisibility)

    if (variant === 'contained' && canvas.parentElement) {
      resizeObserver = new ResizeObserver(resize)
      resizeObserver.observe(canvas.parentElement)
    }

    if (mode === 'interactive') {
      window.addEventListener('mousemove', handleMouseMove, { passive: true })
    }

    animationFrame = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animationFrame)
      resizeObserver?.disconnect()
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', handleVisibility)
      window.removeEventListener('mousemove', handleMouseMove)

      gl.deleteProgram(program)
      gl.deleteShader(vertexShader)
      gl.deleteShader(fragmentShader)
      gl.deleteBuffer(buffer)
    }
  }, [variant])

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none block h-full w-full ${className}`.trim()}
      aria-hidden
    />
  )
}
