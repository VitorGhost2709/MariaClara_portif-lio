import { motion, useReducedMotion } from 'framer-motion'
import { Container } from '../components/Container'
import { StaggerItem, StaggerReveal } from '../components/motion/Reveal'

export function Servicos() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      id="planos"
      className="relative scroll-mt-28 overflow-hidden border-b border-white/10 bg-navy-mid/70 py-20 md:scroll-mt-32 md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_0%_30%,rgba(150,9,43,0.1),transparent)]"
        aria-hidden
      />
      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
            Planos Oferecidos
          </p>
          <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Planos Oferecidos:
          </h2>
        </div>

        <StaggerReveal className="mt-12 grid gap-6 md:grid-cols-2" staggerChildren={0.09}>
          <StaggerItem>
            <motion.article
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-navy-card p-8 shadow-[0_20px_50px_-16px_rgba(0,0,0,0.5)] ring-1 ring-white/[0.04] backdrop-blur-sm transition-premium hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_28px_56px_-14px_rgba(150,9,43,0.25)] md:p-9"
              whileHover={
                prefersReducedMotion ? undefined : { y: -6 }
              }
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-brand/20 blur-3xl"
                aria-hidden
              />
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                Plano 01
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-white">
                Fluxo Contínuo (Delegado)
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Ideal para quem já fatura bem e precisa de liberdade.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                {[
                  'Gestão Completa de Tráfego Pago',
                  'Planejamento Estratégico Mensal',
                  'Setup e Configuração de Campanhas',
                  'Otimizações de Performance Diárias',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-bright" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          </StaggerItem>

          <StaggerItem>
            <motion.article
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-brand/35 bg-navy-card p-8 shadow-[0_28px_64px_-20px_rgba(0,0,0,0.55)] ring-1 ring-brand/15 backdrop-blur-sm transition-premium hover:-translate-y-1 hover:border-brand/55 hover:shadow-[0_34px_72px_-18px_rgba(150,9,43,0.28)] md:p-9"
              whileHover={
                prefersReducedMotion ? undefined : { y: -6 }
              }
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className="pointer-events-none absolute -left-20 -top-20 h-52 w-52 rounded-full bg-brand/25 blur-3xl"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -bottom-24 right-0 h-60 w-60 rounded-full bg-gold/10 blur-3xl"
                aria-hidden
              />
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-soft">
                Plano 02
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-white">
                Acelerador de Consultório Particular
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Ideal para quem busca um novo nível de autoridade e faturamento.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-200">
                {[
                  'Tudo do Plano 01 +',
                  'Análise Estratégica de Perfil (Instagram)',
                  'Consultoria de Posicionamento Digital',
                  'Criação de Criativos de Alta Conversão',
                  'Análise de Dados e Relatórios de Escala',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-bright" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          </StaggerItem>
        </StaggerReveal>
      </Container>
    </section>
  )
}
