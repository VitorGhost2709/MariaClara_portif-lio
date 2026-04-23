import { motion, useReducedMotion } from 'framer-motion'
import { Container } from '../components/Container'
import { StaggerItem, StaggerReveal } from '../components/motion/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { metodo } from '../data/metodo'

export function Metodo() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      id="metodo"
      className="relative scroll-mt-28 overflow-hidden border-b border-white/10 bg-navy py-20 md:scroll-mt-32 md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(150,9,43,0.06)_45%,transparent_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(22,22,34,0.9),transparent)]"
        aria-hidden
      />
      <Container className="relative">
        <SectionHeading
          variant="dark"
          eyebrow="Método"
          title="Um fluxo claro, do primeiro diagnóstico à otimização contínua"
        />
        <StaggerReveal className="grid gap-5 md:grid-cols-2" staggerChildren={0.1}>
          {metodo.map((label, index) => {
            const step = String(index + 1).padStart(2, '0')
            return (
              <StaggerItem key={label}>
                <article className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-navy-card via-navy-mid to-navy-elevated p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_20px_48px_-20px_rgba(0,0,0,0.5)] ring-1 ring-white/[0.04] transition-premium hover:border-brand/35 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_56px_-14px_rgba(150,9,43,0.22)] md:p-9">
                  <motion.div
                    className="font-display text-5xl font-bold tabular-nums leading-none tracking-tight text-transparent md:text-6xl"
                    style={{
                      backgroundImage:
                        'linear-gradient(135deg, var(--color-brand) 0%, rgba(255,255,255,0.85) 100%)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                    }}
                    initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.88 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.35 }}
                    transition={{ duration: prefersReducedMotion ? 0.01 : 0.62, delay: prefersReducedMotion ? 0 : 0.12 }}
                    aria-hidden
                  >
                    {step}
                  </motion.div>
                  <h3 className="mt-5 font-display text-xl font-semibold leading-snug text-white">
                    {label}
                  </h3>
                  <div
                    className="pointer-events-none absolute -right-8 -top-8 h-36 w-36 rounded-full bg-brand/20 blur-3xl"
                    aria-hidden
                  />
                </article>
              </StaggerItem>
            )
          })}
        </StaggerReveal>
      </Container>
    </section>
  )
}
