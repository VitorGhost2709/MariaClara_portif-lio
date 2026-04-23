import { BarChart3, FlaskConical, Target, Sparkles } from 'lucide-react'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { diferenciais } from '../data/diferenciais'

const icons = [Target, BarChart3, FlaskConical, Sparkles] as const

export function Diferenciais() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-navy py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(150,9,43,0.14),transparent)]"
        aria-hidden
      />
      <Container className="relative">
        <SectionHeading
          variant="dark"
          eyebrow="Diferenciais"
          title="Por que trabalhar comigo"
          align="center"
        />
        <ul className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {diferenciais.map((texto, i) => {
            const Icon = icons[i] ?? Target
            return (
              <li key={texto} className="animate-fade-up" style={{ animationDelay: `${i * 70}ms` }}>
                <article className="group flex h-full flex-col items-center rounded-2xl border border-white/10 bg-navy-card/85 px-5 py-8 text-center shadow-[0_16px_40px_-18px_rgba(0,0,0,0.45)] ring-1 ring-white/[0.04] backdrop-blur-sm transition-premium hover:-translate-y-1 hover:border-brand/35 hover:shadow-[0_24px_48px_-14px_rgba(150,9,43,0.22)]">
                  <span className="mb-5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/35 bg-gold/10 text-gold-bright transition-premium group-hover:border-brand/40 group-hover:bg-brand/15">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </span>
                  <h3 className="font-display text-base font-semibold leading-snug text-white md:text-[1.05rem]">
                    {texto}
                  </h3>
                </article>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
