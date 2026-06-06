import { useEffect } from 'react'
import { AuroraMouseEffect } from '../components/AuroraMouseEffect'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { FloatingWhatsApp } from '../components/FloatingWhatsApp'
import { Hero } from '../sections/Hero'
import { Sobre } from '../sections/Sobre'
import { Servicos } from '../sections/Servicos'
import { Fechamento } from '../sections/Fechamento'
import { Faq } from '../sections/Faq'
import { Contato } from '../sections/Contato'

export function Home() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })

    const { pathname, search, hash } = window.location
    if (hash) {
      window.history.replaceState(null, '', `${pathname}${search}`)
    }
  }, [])

  return (
    <div className="relative min-h-svh overflow-x-hidden bg-navy">
      <AuroraMouseEffect
        variant="fixed"
        className="pointer-events-none fixed inset-0 z-[1] mix-blend-screen opacity-[0.91]"
      />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Sobre />
          <Servicos />
          <Faq />
          <Fechamento />
          <Contato />
        </main>
        <Footer />
      </div>
      <FloatingWhatsApp />
    </div>
  )
}
