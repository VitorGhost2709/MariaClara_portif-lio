import { useEffect, useRef, type ReactNode } from 'react'
import {
  motion,
  useAnimation,
  useInView,
  useReducedMotion,
  type Transition,
  type Variants,
} from 'framer-motion'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  y?: number
  x?: number
  once?: boolean
  amount?: number
}

type StaggerRevealProps = {
  children: ReactNode
  className?: string
  delayChildren?: number
  staggerChildren?: number
  once?: boolean
  amount?: number
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
}

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.75,
  y = 22,
  x = 0,
  once = false,
  amount = 0.24,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion()
  const ref = useRef<HTMLDivElement | null>(null)
  const controls = useAnimation()
  const inView = useInView(ref, { amount, once })

  const transition: Transition = {
    delay: prefersReducedMotion ? 0 : delay,
    duration: prefersReducedMotion ? 0.01 : duration,
    ease: [0.16, 1, 0.3, 1],
  }

  useEffect(() => {
    if (prefersReducedMotion) return

    if (inView) {
      controls.start('visible')
      return
    }

    // Reset imediato ao sair da viewport para permitir replay.
    controls.set('hidden')
  }, [controls, inView, prefersReducedMotion])

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={{
        hidden: { opacity: 0, y, x },
        visible: { opacity: 1, y: 0, x: 0 },
      }}
      initial={prefersReducedMotion ? false : 'hidden'}
      animate={prefersReducedMotion ? { opacity: 1, y: 0, x: 0 } : controls}
      transition={transition}
    >
      {children}
    </motion.div>
  )
}

export function StaggerReveal({
  children,
  className,
  delayChildren = 0.06,
  staggerChildren = 0.08,
  once = false,
  amount = 0.2,
}: StaggerRevealProps) {
  const prefersReducedMotion = useReducedMotion()
  const ref = useRef<HTMLDivElement | null>(null)
  const controls = useAnimation()
  const inView = useInView(ref, { amount, once })

  useEffect(() => {
    if (prefersReducedMotion) return

    if (inView) {
      controls.start('visible')
      return
    }

    // Reset do container para re-disparar o stagger ao reentrar.
    controls.set('hidden')
  }, [controls, inView, prefersReducedMotion])

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={{
        hidden: {},
        visible: {
          transition: prefersReducedMotion
            ? { duration: 0.01 }
            : {
                delayChildren,
                staggerChildren,
              },
        },
      }}
      initial={prefersReducedMotion ? false : 'hidden'}
      animate={prefersReducedMotion ? 'visible' : controls}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      variants={itemVariants}
      transition={{
        duration: prefersReducedMotion ? 0.01 : 0.68,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
