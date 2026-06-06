interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  /** Para blocos sobre fundo escuro */
  variant?: 'light' | 'dark'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  variant = 'light',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : ''
  const isDark = variant === 'dark'

  return (
    <div className={`mb-12 max-w-2xl md:mb-16 ${alignClass}`}>
      {eyebrow ? (
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.22em] ${isDark ? 'text-gold' : 'text-brand'}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-display text-3xl font-semibold tracking-tight md:text-4xl ${isDark ? 'text-white' : 'text-ink'}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-relaxed md:text-lg ${isDark ? 'text-slate-300' : 'text-muted'}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
