import mariaChique from '../pictures/mariachique.jpeg'

type PhotoPlaceholderProps = {
  /** 'hero' = compacto; 'sobre' = retrato maior */
  variant?: 'hero' | 'sobre'
  className?: string
  /** Sobrescreve a imagem padrão (ex.: seção Quem sou) */
  imageSrc?: string
}

/**
 * Espaço reservado para foto profissional — substitua o conteúdo por <img> quando tiver a imagem.
 */
export function PhotoPlaceholder({
  variant = 'sobre',
  className = '',
  imageSrc,
}: PhotoPlaceholderProps) {
  const isHero = variant === 'hero'
  const src = imageSrc ?? mariaChique

  return (
    <div
      className={`relative flex flex-col overflow-hidden border-2 bg-navy-card bg-gradient-to-br from-white/[0.06] to-transparent text-center ${
        isHero
          ? 'h-[5.25rem] w-[5.25rem] shrink-0 rounded-2xl border-white/15 md:h-[6rem] md:w-[6rem]'
          : 'aspect-[3/4] w-full max-w-sm rounded-2xl border-white/12 shadow-[0_24px_56px_-20px_rgba(0,0,0,0.55)] ring-1 ring-white/[0.05]'
      } ${className}`}
      aria-label="Espaço para foto profissional"
    >
      <img
        src={src}
        alt="Foto da Maria Clara"
        className={`h-full w-full object-cover ${isHero ? 'object-center' : 'object-[50%_15%]'}`}
        decoding="async"
        loading={isHero ? 'eager' : 'lazy'}
        fetchPriority={isHero ? 'high' : 'auto'}
      />

      {/* Mantém o “glow”/acabamento da estética atual */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_65%_at_50%_20%,rgba(255,255,255,0.08),transparent_55%)]"
        aria-hidden
      />
    </div>
  )
}
