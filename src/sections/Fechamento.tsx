import { Container } from '../components/Container'

export function Fechamento() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-navy py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(150,9,43,0.22),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-px w-3/4 max-w-2xl -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/40 to-transparent"
        aria-hidden
      />
      <Container className="relative">
        <div className="mx-auto max-w-3xl animate-fade-up text-center">
          <h2 className="font-display text-2xl font-semibold leading-snug text-white md:text-3xl lg:text-[2rem]">
            Pronto para transformar seu consultório em uma referência digital?
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-300 md:text-lg">
            Responda brevemente às perguntas abaixo para que nossa primeira conversa seja 100% focada em soluções práticas para o seu caso. O preenchimento é rápido e seguro.
          </p>
          <a
            href="#diagnostico"
        className="mt-10 inline-flex items-center justify-center rounded-full bg-brand px-8 py-3.5 text-sm font-semibold text-white shadow-[0_0_40px_-8px_rgba(150,9,43,0.55)] transition-premium hover:-translate-y-0.5 hover:bg-brand-hover hover:shadow-[0_0_48px_-6px_rgba(150,9,43,0.65)]"
          >
            PREENCHER FORMULÁRIO DE DIAGNÓSTICO
          </a>
        </div>
      </Container>
    </section>
  )
}
