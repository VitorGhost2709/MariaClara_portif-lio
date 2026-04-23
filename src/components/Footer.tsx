import { Container } from './Container'
import { instagramUrl, whatsappDisplay, whatsappUrl } from '../data/contact'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-mid py-14 text-slate-300">
      <Container>
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-xl font-semibold text-white">
              Maria Clara
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Gestão de tráfego pago com foco em performance, clareza de dados e
              parceria de longo prazo com marcas ambiciosas.
            </p>
          </div>
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                Contato
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-slate-200 transition-colors duration-200 hover:text-gold-bright"
                  >
                    WhatsApp {whatsappDisplay}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                Redes
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 transition-colors duration-200 hover:text-gold-bright"
                  >
                    Instagram — @eu_mariaclarass
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Maria Clara. Todos os direitos reservados.
        </p>
      </Container>
    </footer>
  )
}
