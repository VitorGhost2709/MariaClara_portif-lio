import { motion, useReducedMotion } from 'framer-motion'
import { Container } from '../components/Container'
import { PhotoPlaceholder } from '../components/PhotoPlaceholder'
import { Reveal, StaggerItem, StaggerReveal } from '../components/motion/Reveal'
import { whatsappUrl } from '../data/contact'

export function Hero() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      id="inicio"
      className="hero-section relative scroll-mt-28 overflow-hidden border-b border-white/[0.08] pb-[5.25rem] pt-[6.50rem] md:scroll-mt-32 md:pb-32 md:pt-[8.00rem]"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_-10%,rgba(150,9,43,0.28),transparent),radial-gradient(ellipse_50%_40%_at_10%_80%,rgba(150,9,43,0.12),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy via-navy to-navy-mid"
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

      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-[4.5rem]">
          <StaggerReveal className="space-y-0" delayChildren={0.05} staggerChildren={0.09}>
            <StaggerItem>
              <h1 className="mt-7 max-w-xl font-display text-[2rem] font-semibold leading-[1.14] tracking-tight text-white md:text-[2.35rem] lg:text-[2.55rem] lg:leading-[1.1]">
                Tráfego Pago Estratégico para Dentistas com Consultório Particular
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg md:leading-relaxed">
                Descubra como a união de Estratégia, Posicionamento e Tráfego Pago
                pode transformar o faturamento do seu consultório.
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg md:leading-relaxed">
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

          <Reveal className="relative" delay={0.14} duration={0.9} y={28}>
            <div
              className="absolute -inset-0.5 rounded-[1.35rem] bg-gradient-to-br from-brand/35 via-transparent to-gold/15 opacity-80 blur-md"
              aria-hidden
            />
            <motion.div
              className="relative flex flex-col gap-5 overflow-hidden rounded-[1.35rem] border border-white/[0.1] bg-navy-card/95 p-6 shadow-premium backdrop-blur-sm transition-premium hover:border-brand/30 hover:shadow-[0_0_60px_-12px_rgba(150,9,43,0.22)] md:p-8"
              initial={prefersReducedMotion ? false : { scale: 0.985 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false, amount: 0.24 }}
              transition={{ duration: prefersReducedMotion ? 0.01 : 0.85, ease: [0.16, 1, 0.3, 1] }}
            >
              <PhotoPlaceholder
                variant="sobre"
                className="mx-auto max-w-md sm:max-w-lg lg:max-w-xl"
              />
            </motion.div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
