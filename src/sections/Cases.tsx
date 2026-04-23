import { Container } from '../components/Container'
import { StaggerItem, StaggerReveal } from '../components/motion/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { cases } from '../data/cases'

const blocks = [
  { key: 'objective' as const, label: 'Objetivo' },
  { key: 'strategy' as const, label: 'Estratégia' },
  { key: 'execution' as const, label: 'Execução' },
  { key: 'outcome' as const, label: 'Resultado' },
] as const

export function Cases() {
  return (
    <section
      id="cases"
      className="relative scroll-mt-28 overflow-hidden border-b border-white/10 bg-gradient-to-b from-navy via-navy to-navy-mid py-20 md:scroll-mt-32 md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_0%,rgba(150,9,43,0.12),transparent)]"
        aria-hidden
      />
      <Container className="relative">
        <SectionHeading
          variant="dark"
          eyebrow="Cases"
          title="Como penso cada projeto — do objetivo ao aprendizado"
          description="Exemplos de raciocínio estratégico (não são promessas numéricas). Use como referência do tipo de entrega e conversa que você pode esperar."
        />
        <StaggerReveal className="grid gap-8 lg:gap-10" staggerChildren={0.1}>
          {cases.map((c) => (
            <StaggerItem key={c.title}>
              <article className="overflow-hidden rounded-2xl border border-white/10 bg-navy-card/90 shadow-[0_20px_50px_-16px_rgba(0,0,0,0.5)] ring-1 ring-gold/15 transition-premium hover:-translate-y-0.5 hover:border-brand/35 hover:shadow-[0_28px_56px_-14px_rgba(150,9,43,0.25)]">
                <div className="border-b border-white/10 bg-gradient-to-r from-brand/20 via-navy-card to-navy-mid px-7 py-6 md:px-8 md:py-7">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {c.seals.map((seal, j) => (
                      <span
                        key={seal}
                        className={`relative overflow-hidden rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                          j % 2 === 0
                            ? 'border border-brand/45 bg-brand/20 text-brand-soft'
                            : 'border border-gold/40 bg-gold/12 text-gold-bright'
                        }`}
                      >
                        <span className="subtle-shine absolute inset-y-[-30%] w-10 bg-gradient-to-r from-transparent via-white/35 to-transparent" />
                        {seal}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-white md:text-2xl">
                    {c.title}
                  </h3>
                </div>
                <div className="grid gap-px bg-white/10 md:grid-cols-2">
                  {blocks.map((b) => (
                    <div
                      key={b.key}
                      className="bg-navy-mid/80 px-7 py-6 backdrop-blur-[2px] md:px-8 md:py-7"
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold/90">
                        {b.label}
                      </p>
                      <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                        {c[b.key]}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </Container>
    </section>
  )
}
