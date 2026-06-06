import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { StaggerItem, StaggerReveal } from '../components/motion/Reveal'
import { faqItems } from '../data/faq'

function FaqAnswer({ blocks }: { blocks: (typeof faqItems)[number]['blocks'] }) {
  return (
    <div className="space-y-3 text-sm leading-relaxed text-slate-300 md:text-[0.95rem]">
      {blocks.map((block, index) => {
        if (block.type === 'paragraph') {
          return <p key={`${block.text}-${index}`}>{block.text}</p>
        }

        return (
          <ul key={`list-${index}`} className="space-y-2 pl-1">
            {block.items.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-bright" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )
      })}
    </div>
  )
}

const faqColumns = [
  faqItems
    .map((item, index) => ({ item, index }))
    .filter(({ index }) => index % 2 === 0),
  faqItems
    .map((item, index) => ({ item, index }))
    .filter(({ index }) => index % 2 === 1),
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const prefersReducedMotion = useReducedMotion()

  const panelTransition = prefersReducedMotion
    ? { duration: 0 }
    : {
        height: { duration: 0.28, ease: [0.22, 1, 0.36, 1] as const },
        opacity: { duration: 0.18 },
      }

  const renderFaqItem = ({ item, index }: (typeof faqColumns)[number][number]) => {
    const isOpen = openIndex === index
    const panelId = `faq-panel-${index}`

    return (
      <StaggerItem key={item.question} className="min-w-0">
        <article className="overflow-hidden rounded-2xl border border-white/10 bg-navy-card shadow-[0_16px_40px_-18px_rgba(0,0,0,0.45)] ring-1 ring-white/[0.04] backdrop-blur-sm transition-premium hover:border-brand/25">
          <button
            type="button"
            className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left md:px-6 md:py-6"
            aria-expanded={isOpen}
            aria-controls={panelId}
            onClick={() => setOpenIndex(isOpen ? null : index)}
          >
            <span className="pr-1 font-display text-[0.95rem] font-semibold leading-snug text-white sm:text-base md:text-lg">
              {item.question}
            </span>
            <motion.span
              className="mt-0.5 shrink-0"
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : { duration: 0.28, ease: [0.22, 1, 0.36, 1] }
              }
              aria-hidden
            >
              <ChevronDown className="h-5 w-5 text-brand-soft" />
            </motion.span>
          </button>
          <AnimatePresence initial={false}>
            {isOpen ? (
              <motion.div
                id={panelId}
                initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
                animate={prefersReducedMotion ? undefined : { height: 'auto', opacity: 1 }}
                exit={prefersReducedMotion ? undefined : { height: 0, opacity: 0 }}
                transition={panelTransition}
                className="overflow-hidden"
              >
                <div className="border-t border-white/10 px-5 pb-6 pt-4 md:px-6 md:pb-7">
                  <FaqAnswer blocks={item.blocks} />
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </article>
      </StaggerItem>
    )
  }

  return (
    <section
      id="faq"
      className="relative scroll-mt-28 overflow-hidden border-b border-white/10 bg-navy/65 py-20 md:scroll-mt-32 md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(150,9,43,0.14),transparent)]"
        aria-hidden
      />
      <Container className="relative z-10">
        <SectionHeading
          variant="dark"
          title="Perguntas Frequentes"
          align="center"
        />
        <StaggerReveal className="mx-auto max-w-6xl" staggerChildren={0.06}>
          <div className="flex flex-col gap-4 md:hidden">
            {faqItems.map((item, index) => renderFaqItem({ item, index }))}
          </div>

          <div className="hidden gap-5 md:grid md:grid-cols-2">
            {faqColumns.map((column, columnIndex) => (
              <div key={columnIndex} className="flex flex-col gap-4 md:gap-5">
                {column.map(renderFaqItem)}
              </div>
            ))}
          </div>
        </StaggerReveal>
      </Container>
    </section>
  )
}
