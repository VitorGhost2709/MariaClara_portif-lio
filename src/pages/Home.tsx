import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { FloatingWhatsApp } from '../components/FloatingWhatsApp'
import { Hero } from '../sections/Hero'
import { Sobre } from '../sections/Sobre'
import { Servicos } from '../sections/Servicos'
import { Fechamento } from '../sections/Fechamento'
import { Contato } from '../sections/Contato'

export function Home() {
  return (
    <div className="min-h-svh bg-navy">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Fechamento />
        <Contato />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
