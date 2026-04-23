import { useState } from 'react'
import { navItems } from '../data/navigation'

export function Header() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  const handleNavClick =
    (href: string, behavior: ScrollBehavior = 'smooth') =>
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      if (!href.startsWith('#')) return

      event.preventDefault()
      closeMenu()

      const id = href.slice(1)
      const el = document.getElementById(id)
      if (!el) return

      const shouldCenter = href === '#quem-sou' || href === '#diagnostico'

      // Aguarda o DOM “assentar” (mobile menu fechando) antes de centralizar.
      requestAnimationFrame(() => {
        if (shouldCenter) {
          const rect = el.getBoundingClientRect()
          const currentY = window.scrollY
          const centerOffsetPx = href === '#quem-sou' ? 48 : 32
          const targetY =
            currentY + rect.top - (window.innerHeight - rect.height) / 2 - centerOffsetPx
          window.scrollTo({ top: Math.max(0, targetY), behavior })
        } else {
          el.scrollIntoView({ behavior, block: 'start' })
        }
        history.pushState(null, '', href)
      })
    }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line-dark bg-navy/92 text-white backdrop-blur-md transition-[box-shadow,background-color] duration-300 supports-[backdrop-filter]:bg-navy/88">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:h-[4.25rem] md:px-8 lg:px-10">
        <a
          href="#inicio"
          onClick={handleNavClick('#inicio')}
          className="group flex flex-col leading-tight sm:flex-row sm:items-baseline sm:gap-1.5"
        >
          <span className="font-display text-lg font-semibold tracking-tight text-white transition-colors duration-200 group-hover:text-gold">
            Maria Clara
          </span>
          <span className="text-xs font-medium text-slate-400 transition-colors duration-200 group-hover:text-slate-200 sm:text-sm">
            Gestora de Tráfego Pago
          </span>
        </a>

        <nav
          className="hidden items-center gap-0.5 lg:flex"
          aria-label="Principal"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleNavClick(item.href)}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-slate-300 transition-premium hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 p-2.5 text-white transition-premium hover:border-gold/40 hover:bg-white/10 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden
          >
            {open ? (
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-white/10 bg-navy-mid lg:hidden ${open ? 'block' : 'hidden'}`}
      >
        <nav
          className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4 md:px-8"
          aria-label="Mobile"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleNavClick(item.href)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-slate-200 transition-colors duration-200 hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
