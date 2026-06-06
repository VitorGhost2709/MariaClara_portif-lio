import { Container } from '../components/Container'
import { Reveal } from '../components/motion/Reveal'
import { PhotoPlaceholder } from '../components/PhotoPlaceholder'
import { whatsappUrl } from '../data/contact'
import mariaComNatureza from '../pictures/Mariacomnatureza.webp'

export function Sobre() {
  return (
    <section
      id="quem-sou"
      className="relative scroll-mt-28 overflow-hidden border-b border-white/10 bg-navy/65 py-20 md:scroll-mt-32 md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_85%_15%,rgba(150,9,43,0.14),transparent),radial-gradient(ellipse_50%_45%_at_10%_90%,rgba(150,9,43,0.06),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none ambient-float absolute -right-20 top-20 h-72 w-72 rounded-full bg-brand/20 blur-3xl"
        aria-hidden
      />
      <Container className="relative z-10">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-start lg:gap-16">
          <Reveal
            className="order-2 -mt-10 flex justify-center md:-mt-12 lg:order-1 lg:sticky lg:top-15 lg:-mt-8"
            x={-30}
            y={0}
          >
            <PhotoPlaceholder
              variant="sobre"
              className="mx-auto max-w-md sm:max-w-lg lg:max-w-xl"
              imageSrc={mariaComNatureza}
            />
          </Reveal>
          <Reveal className="order-1 space-y-6 lg:order-2" x={32} y={0} delay={0.05}>
            <div className="rounded-2xl border border-white/10 bg-navy-card p-6 shadow-[0_20px_48px_-18px_rgba(0,0,0,0.55)] ring-1 ring-white/[0.04] backdrop-blur-sm md:p-7">
              <p className="text-sm font-semibold text-white md:text-base">
                Dentista, você se identifica com algum desses cenários?
              </p>
              <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-slate-300">
                {[
                  'Tem anos de formação e busca ser valorizado pelo seu consultório particular, não por uma clínica de massa.',
                  'Sua agenda pode até estar cheia, mas o faturamento no final do mês não reflete seu esforço.',
                  'Já tentou rodar anúncios sem estratégia e sentiu que "tráfego pago não funciona".',
                  'Sabe que precisa estar no digital, mas se sente inseguro sobre qual caminho seguir.',
                  'Precisa delegar a gestão de anúncios para focar no que você faz de melhor: atender seus pacientes.',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-bright" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 font-semibold text-white">Se esse é o seu caso, você está no lugar certo.</p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-white/18 bg-transparent px-6 py-3.5 text-sm font-semibold text-slate-200 transition-premium hover:border-gold/40 hover:bg-white/[0.04] hover:text-white sm:w-auto"
              >
                Falar com Maria Clara no WhatsApp
              </a>
            </div>

            <div className="space-y-4 rounded-2xl border border-white/10 bg-navy-card p-6 shadow-[0_20px_48px_-18px_rgba(0,0,0,0.55)] ring-1 ring-white/[0.04] backdrop-blur-sm transition-premium hover:border-brand/30 hover:shadow-[0_24px_56px_-16px_rgba(150,9,43,0.18)] md:p-7">
              <h2 className="font-display text-xl font-semibold tracking-tight text-white md:text-2xl">
                Quem sou?
              </h2>
              <p className="text-sm leading-relaxed text-slate-300 md:text-base">
                Prazer, sou Maria Clara Soares.
              </p>
              <p className="text-sm font-semibold leading-relaxed text-white md:text-base">
                Estrategista de Tráfego Pago para Dentistas.
              </p>
              <p className="text-sm leading-relaxed text-slate-300 md:text-base">
                Acredito que anúncios sem estratégia são apenas desperdício de dinheiro. Meu trabalho vai além de "apertar botões": eu analiso seu perfil, ajusto seu posicionamento e traço o caminho exato para que o tráfego pago traga resultados reais para o seu consultório particular.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
