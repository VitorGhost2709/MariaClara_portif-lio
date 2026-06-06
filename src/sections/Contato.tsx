import { useState, type ChangeEvent, type FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { motion, useReducedMotion } from 'framer-motion'
import { Container } from '../components/Container'
import { Reveal } from '../components/motion/Reveal'
import instagramLogo from '../pictures/instagramlogo-80.png'
import whatsappIcon from '../pictures/whatsapp.png'
import { instagramUrl, whatsappDisplay, whatsappUrl } from '../data/contact'

type FormData = {
  nome: string
  email: string
  objetivo: 'Delegar a gestão para ter mais tempo' | 'Escalar o faturamento e atrair novos pacientes' | ''
  tempoFormado: string
  investeTrafego: 'Sim' | 'Não' | ''
  faturamentoMensal: string
  procedimento: string
  instagram: string
}

type FormErrors = Partial<Record<keyof FormData, string>>

const initialFormData: FormData = {
  nome: '',
  email: '',
  objetivo: '',
  tempoFormado: '',
  investeTrafego: '',
  faturamentoMensal: '',
  procedimento: '',
  instagram: '',
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validateContatoForm(data: FormData): FormErrors {
  const errors: FormErrors = {}

  if (!data.nome.trim()) {
    errors.nome = 'Nome é obrigatório.'
  }

  if (!data.email.trim()) {
    errors.email = 'E-mail é obrigatório.'
  } else if (!emailRegex.test(data.email.trim())) {
    errors.email = 'Digite um e-mail válido.'
  }

  if (!data.objetivo) errors.objetivo = 'Selecione uma opção.'
  if (!data.tempoFormado.trim()) errors.tempoFormado = 'Campo obrigatório.'
  if (!data.investeTrafego) errors.investeTrafego = 'Selecione uma opção.'
  if (!data.faturamentoMensal.trim()) errors.faturamentoMensal = 'Campo obrigatório.'
  if (!data.procedimento.trim()) errors.procedimento = 'Campo obrigatório.'
  if (!data.instagram.trim()) errors.instagram = 'Campo obrigatório.'

  return errors
}

export function Contato() {
  const prefersReducedMotion = useReducedMotion()
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [feedback, setFeedback] = useState<{
    type: 'success' | 'error'
    message: string
  } | null>(null)

  const handleChange =
    (field: keyof FormData) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = event.target.value

      setFormData((prev) => ({ ...prev, [field]: value }))

      setErrors((prev) => {
        if (!prev[field]) return prev
        return { ...prev, [field]: undefined }
      })
    }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFeedback(null)

    const validationErrors = validateContatoForm(formData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setIsSubmitting(true)

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.nome.trim(),
          reply_to: formData.email.trim(),
          objetivo: formData.objetivo,
          tempo_formado: formData.tempoFormado.trim(),
          investe_trafego: formData.investeTrafego,
          faturamento_mensal: formData.faturamentoMensal.trim(),
          procedimento: formData.procedimento.trim(),
          instagram: formData.instagram.trim(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      setFeedback({
        type: 'success',
        message: 'Mensagem enviada com sucesso.',
      })
      setFormData(initialFormData)
    } catch {
      setFeedback({
        type: 'error',
        message: 'Não foi possível enviar sua mensagem agora. Tente novamente em instantes.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="diagnostico"
      className="relative scroll-mt-28 overflow-hidden border-t border-white/10 bg-gradient-to-b from-navy-mid/75 via-navy/65 to-navy-mid/75 py-20 md:scroll-mt-32 md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_50%_at_20%_20%,rgba(150,9,43,0.12),transparent),radial-gradient(ellipse_55%_45%_at_100%_80%,rgba(150,9,43,0.05),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none ambient-float absolute left-1/2 top-14 h-80 w-80 -translate-x-1/2 rounded-full bg-brand/15 blur-3xl"
        aria-hidden
      />
      <Container className="relative z-10">
        <form
          className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-navy-card p-8 shadow-[0_28px_64px_-20px_rgba(0,0,0,0.55)] ring-1 ring-white/[0.05] backdrop-blur-sm md:gap-5 md:p-12 lg:p-14"
          onSubmit={handleSubmit}
          aria-label="Formulário de diagnóstico"
          noValidate
        >
          <h2 className="font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Formulário de Diagnóstico
          </h2>

          <div className="grid items-start gap-8 md:grid-cols-2 md:gap-12 lg:gap-14">
            <Reveal className="flex w-full flex-col" duration={0.9} y={16}>
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="nome"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400"
                  >
                    Nome
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    placeholder="Seu nome"
                    value={formData.nome}
                    onChange={handleChange('nome')}
                    aria-invalid={errors.nome ? 'true' : 'false'}
                    aria-describedby={errors.nome ? 'nome-erro' : undefined}
                    className="w-full rounded-xl border border-white/12 bg-navy-mid px-4 py-3 text-sm text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-premium placeholder:text-slate-500 focus:border-brand/50 focus:outline-none focus:ring-2 focus:ring-brand/25"
                  />
                  {errors.nome ? (
                    <p id="nome-erro" className="mt-1.5 text-xs text-rose-300">
                      {errors.nome}
                    </p>
                  ) : null}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400"
                  >
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="voce@empresa.com"
                    value={formData.email}
                    onChange={handleChange('email')}
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-erro' : undefined}
                    className="w-full rounded-xl border border-white/12 bg-navy-mid px-4 py-3 text-sm text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-premium placeholder:text-slate-500 focus:border-brand/50 focus:outline-none focus:ring-2 focus:ring-brand/25"
                  />
                  {errors.email ? (
                    <p id="email-erro" className="mt-1.5 text-xs text-rose-300">
                      {errors.email}
                    </p>
                  ) : null}
                </div>

                <fieldset className="space-y-3 rounded-xl border border-white/12 bg-navy-mid/80 p-4">
                  <legend className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Qual o seu principal objetivo hoje?
                  </legend>
                  <label className="flex cursor-pointer items-center gap-3 text-sm text-slate-200">
                    <input
                      type="radio"
                      name="objetivo"
                      value="Delegar a gestão para ter mais tempo"
                      checked={formData.objetivo === 'Delegar a gestão para ter mais tempo'}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, objetivo: e.target.value as FormData['objetivo'] }))
                      }
                      className="h-4 w-4 accent-[var(--color-brand)]"
                    />
                    Delegar a gestão para ter mais tempo
                  </label>
                  <label className="flex cursor-pointer items-center gap-3 text-sm text-slate-200">
                    <input
                      type="radio"
                      name="objetivo"
                      value="Escalar o faturamento e atrair novos pacientes"
                      checked={formData.objetivo === 'Escalar o faturamento e atrair novos pacientes'}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, objetivo: e.target.value as FormData['objetivo'] }))
                      }
                      className="h-4 w-4 accent-[var(--color-brand)]"
                    />
                    Escalar o faturamento e atrair novos pacientes
                  </label>
                  {errors.objetivo ? <p className="text-xs text-rose-300">{errors.objetivo}</p> : null}
                </fieldset>

                <div>
                  <label
                    htmlFor="tempoFormado"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400"
                  >
                    Quanto tempo tem de formado?
                  </label>
                  <input
                    id="tempoFormado"
                    name="tempoFormado"
                    type="text"
                    value={formData.tempoFormado}
                    onChange={handleChange('tempoFormado')}
                    aria-invalid={errors.tempoFormado ? 'true' : 'false'}
                    className="w-full rounded-xl border border-white/12 bg-navy-mid px-4 py-3 text-sm text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-premium placeholder:text-slate-500 focus:border-brand/50 focus:outline-none focus:ring-2 focus:ring-brand/25"
                  />
                  {errors.tempoFormado ? (
                    <p className="mt-1.5 text-xs text-rose-300">{errors.tempoFormado}</p>
                  ) : null}
                </div>
              </div>
            </Reveal>

            <Reveal className="flex w-full flex-col" delay={0.14} duration={0.95} y={16}>
              <div className="space-y-5">
                <fieldset className="space-y-3 rounded-xl border border-white/12 bg-navy-mid/80 p-4">
                  <legend className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Você já investe em tráfego pago atualmente?
                  </legend>
                  <label className="flex cursor-pointer items-center gap-3 text-sm text-slate-200">
                    <input
                      type="radio"
                      name="investeTrafego"
                      value="Sim"
                      checked={formData.investeTrafego === 'Sim'}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          investeTrafego: e.target.value as FormData['investeTrafego'],
                        }))
                      }
                      className="h-4 w-4 accent-[var(--color-brand)]"
                    />
                    Sim
                  </label>
                  <label className="flex cursor-pointer items-center gap-3 text-sm text-slate-200">
                    <input
                      type="radio"
                      name="investeTrafego"
                      value="Não"
                      checked={formData.investeTrafego === 'Não'}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          investeTrafego: e.target.value as FormData['investeTrafego'],
                        }))
                      }
                      className="h-4 w-4 accent-[var(--color-brand)]"
                    />
                    Não
                  </label>
                  {errors.investeTrafego ? <p className="text-xs text-rose-300">{errors.investeTrafego}</p> : null}
                </fieldset>

                <div>
                  <label
                    htmlFor="faturamentoMensal"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400"
                  >
                    Qual a sua média de faturamento mensal atual?
                  </label>
                  <input
                    id="faturamentoMensal"
                    name="faturamentoMensal"
                    type="text"
                    value={formData.faturamentoMensal}
                    onChange={handleChange('faturamentoMensal')}
                    aria-invalid={errors.faturamentoMensal ? 'true' : 'false'}
                    className="w-full rounded-xl border border-white/12 bg-navy-mid px-4 py-3 text-sm text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-premium placeholder:text-slate-500 focus:border-brand/50 focus:outline-none focus:ring-2 focus:ring-brand/25"
                  />
                  {errors.faturamentoMensal ? (
                    <p className="mt-1.5 text-xs text-rose-300">{errors.faturamentoMensal}</p>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor="procedimento"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400"
                  >
                    Qual o procedimento que você mais deseja vender hoje?
                  </label>
                  <input
                    id="procedimento"
                    name="procedimento"
                    type="text"
                    placeholder="Implantes, Invisalign, Limpezas"
                    value={formData.procedimento}
                    onChange={handleChange('procedimento')}
                    aria-invalid={errors.procedimento ? 'true' : 'false'}
                    className="w-full rounded-xl border border-white/12 bg-navy-mid px-4 py-3 text-sm text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-premium placeholder:text-slate-500 focus:border-brand/50 focus:outline-none focus:ring-2 focus:ring-brand/25"
                  />
                  {errors.procedimento ? (
                    <p className="mt-1.5 text-xs text-rose-300">{errors.procedimento}</p>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor="instagram"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400"
                  >
                    Qual o seu @ do Instagram?
                  </label>
                  <input
                    id="instagram"
                    name="instagram"
                    type="text"
                    value={formData.instagram}
                    onChange={handleChange('instagram')}
                    aria-invalid={errors.instagram ? 'true' : 'false'}
                    className="w-full rounded-xl border border-white/12 bg-navy-mid px-4 py-3 text-sm text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-premium placeholder:text-slate-500 focus:border-brand/50 focus:outline-none focus:ring-2 focus:ring-brand/25"
                  />
                  {errors.instagram ? <p className="mt-1.5 text-xs text-rose-300">{errors.instagram}</p> : null}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="flex w-full flex-col items-center gap-3 pt-2">
            {feedback ? (
              <p
                role="status"
                aria-live="polite"
                className={`max-w-lg text-center text-sm ${
                  feedback.type === 'success' ? 'text-emerald-300' : 'text-rose-300'
                }`}
              >
                {feedback.message}
              </p>
            ) : null}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-auto shrink-0 items-center justify-center rounded-full border border-brand/40 bg-brand px-7 py-3 text-sm font-semibold text-white shadow-[0_12px_32px_-10px_rgba(150,9,43,0.45)] transition-premium hover:bg-brand-hover hover:shadow-[0_16px_40px_-10px_rgba(150,9,43,0.5)] disabled:cursor-not-allowed disabled:opacity-70"
              whileHover={prefersReducedMotion ? undefined : { y: -3, scale: 1.01 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.985 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
            </motion.button>
          </div>

          <div className="flex flex-col items-stretch gap-3 border-t border-white/10 pt-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-brand py-3.5 text-sm font-semibold text-white shadow-[0_0_40px_-8px_rgba(150,9,43,0.5)] transition-premium hover:-translate-y-0.5 hover:bg-brand-hover sm:w-auto sm:min-w-[12rem] sm:px-8"
            >
              <img
                src={whatsappIcon}
                alt=""
                width={22}
                height={22}
                decoding="async"
                className="h-[1.375rem] w-[1.375rem] shrink-0 rounded-full object-cover ring-2 ring-white/25 transition-transform duration-300 group-hover:scale-105"
                aria-hidden
              />
              Chamar no WhatsApp — {whatsappDisplay}
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] py-3 text-sm font-semibold text-slate-200 transition-premium hover:border-brand/40 hover:bg-brand/15 sm:w-auto sm:min-w-[12rem] sm:px-8"
            >
              <img
                src={instagramLogo}
                alt=""
                width={20}
                height={20}
                decoding="async"
                className="h-5 w-5 shrink-0 object-contain"
                aria-hidden
              />
              Instagram
            </a>
          </div>
        </form>
      </Container>
    </section>
  )
}
