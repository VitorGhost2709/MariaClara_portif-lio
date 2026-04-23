import whatsappIcon from '../pictures/whatsapp.png'
import { whatsappUrl } from '../data/contact'

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-5 z-40 flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-navy-mid shadow-lg shadow-black/50 ring-2 ring-white/15 transition-premium hover:-translate-y-1 hover:ring-gold/45 md:bottom-8 md:right-8 md:h-[3.75rem] md:w-[3.75rem]"
      aria-label="Falar no WhatsApp"
    >
      <img
        src={whatsappIcon}
        alt=""
        width={60}
        height={60}
        decoding="async"  
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        aria-hidden
      />
    </a>
  )
}
