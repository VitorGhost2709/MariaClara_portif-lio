import { motion, useReducedMotion } from 'framer-motion'
import { Container } from '../components/Container'
import { Reveal, StaggerItem, StaggerReveal } from '../components/motion/Reveal'
import { whatsappUrl } from '../data/contact'
import mariaClaraHero from '../pictures/Maria Clarasemfundomesmo.png'

function MariaPortrait({
  className,
  prefersReducedMotion,
}: {
  className?: string
  prefersReducedMotion: boolean | null
}) {
  return (
    <div className={className}>
      <div
        className="pointer-events-none absolute left-1/2 top-[12%] h-[70%] w-[75%] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.16)_0%,rgba(150,9,43,0.08)_42%,transparent_72%)] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-[10%] bottom-0 h-[40%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(6,6,16,0.55)_0%,transparent_70%)] blur-2xl"
        aria-hidden
      />

      <div className="relative z-10 flex h-full w-full items-end justify-center [mask-image:linear-gradient(to_bottom,black_0%,black_82%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_82%,transparent_100%)]">
        <motion.img
          src={mariaClaraHero}
          alt="Maria Clara"
          width={1080}
          height={1350}
          decoding="async"
          className="pointer-events-none relative h-full w-auto max-w-none object-contain object-bottom select-none drop-shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{
            duration: prefersReducedMotion ? 0.01 : 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[22%] bg-gradient-to-t from-navy-mid/90 via-navy/40 to-transparent"
        aria-hidden
      />
    </div>
  )
}

export function Hero() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      id="inicio"
      className="hero-section relative scroll-mt-28 overflow-x-hidden border-b border-white/[0.08] pb-10 pt-[6.50rem] md:scroll-mt-32 md:pb-16 md:pt-[8.00rem] lg:min-h-svh lg:pb-0"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_-10%,rgba(150,9,43,0.28),transparent),radial-gradient(ellipse_50%_40%_at_10%_80%,rgba(150,9,43,0.12),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/55 to-navy-mid/70"
        aria-hidden
      />
      <div
        className="pointer-events-none ambient-float absolute -right-24 top-24 h-96 w-96 rounded-full bg-brand/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none ambient-drift absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-gold/10 blur-3xl"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden>
        <span className="ambient-float absolute left-[8%] top-[18%] h-2.5 w-2.5 rounded-full bg-brand/45 blur-[1px]" />
        <span className="ambient-drift absolute right-[18%] top-[35%] h-3 w-3 rounded-full bg-gold/35 blur-[2px]" />
        <span className="ambient-float absolute left-[30%] bottom-[22%] h-2 w-2 rounded-full bg-white/30 blur-[1.5px]" />
      </div>

      {/* Desktop: foto absoluta no Hero — fora do Container/grid */}
      <div className="pointer-events-none absolute bottom-0 right-0 z-[5] hidden h-[calc(100svh-4rem)] w-[min(62vw,1080px)] items-end justify-end lg:-right-14 lg:flex xl:-right-20 xl:h-[calc(100svh-3.5rem)] xl:w-[min(60vw,1160px)] 2xl:-right-16">
        <MariaPortrait
          prefersReducedMotion={prefersReducedMotion}
          className="relative flex h-full w-full items-end justify-end"
        />
      </div>

      <Container className="relative z-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,32rem)_minmax(0,1fr)] lg:items-start lg:gap-6 xl:gap-8">
          <StaggerReveal className="max-w-lg space-y-0 lg:pt-10" delayChildren={0.05} staggerChildren={0.09}>
            <StaggerItem>
              <h1 className="mt-2 max-w-lg font-display text-[1.9rem] font-semibold leading-[1.14] tracking-tight text-white md:mt-3 md:text-[2.2rem] lg:text-[2.35rem] lg:leading-[1.12]">
                Tráfego Pago Estratégico para Dentistas com Consultório Particular
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-300 md:text-[1.05rem] md:leading-relaxed">
                Descubra como a união de Estratégia, Posicionamento e Tráfego Pago
                pode transformar o faturamento do seu consultório.
              </p>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-300 md:text-[1.05rem] md:leading-relaxed">
                Atraia os pacientes certos, valorize seu ticket médio e recupere seu tempo livre.
              </p>
            </StaggerItem>

            <StaggerItem className="mt-11 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#diagnostico"
                className="inline-flex items-center justify-center rounded-full bg-brand px-8 py-3.5 text-sm font-semibold text-white shadow-[0_0_40px_-8px_rgba(150,9,43,0.55)] transition-premium hover:-translate-y-0.5 hover:bg-brand-hover hover:shadow-[0_0_48px_-6px_rgba(150,9,43,0.65)]"
              >
                Quero uma Análise do meu Consultório
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/18 bg-transparent px-6 py-3.5 text-sm font-semibold text-slate-200 transition-premium hover:border-gold/40 hover:bg-white/[0.04] hover:text-white"
              >
                Falar com Maria Clara no WhatsApp
              </a>
            </StaggerItem>
          </StaggerReveal>

          {/* Coluna fantasma no desktop: reserva espaço visual sem limitar a foto */}
          <div className="hidden lg:block" aria-hidden />

          {/* Mobile / tablet: foto no fluxo normal */}
          <Reveal className="relative flex justify-center lg:hidden" delay={0.14} duration={0.9} y={28}>
            <MariaPortrait
              prefersReducedMotion={prefersReducedMotion}
              className="relative flex h-[420px] w-full max-w-[380px] items-end justify-center sm:h-[500px] sm:max-w-[420px]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
