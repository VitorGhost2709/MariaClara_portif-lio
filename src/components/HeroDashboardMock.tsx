/**
 * Mock visual de painel de performance — ilustrativo.
 * Métricas com valores moderados; substitua por print real do Ads Manager se desejar.
 */
const kpis = [
  {
    label: 'Leads',
    value: '94',
    hint: '30 dias',
    accent: 'brand' as const,
  },
  {
    label: 'CTR',
    value: '1,9%',
    hint: 'média',
    accent: 'gold' as const,
  },
  {
    label: 'CPC',
    value: 'R$ 2,28',
    hint: 'média',
    accent: 'brand' as const,
  },
  {
    label: 'Otimização',
    value: 'Ativa',
    hint: 'rotina semanal',
    accent: 'gold' as const,
  },
]

export function HeroDashboardMock() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[linear-gradient(165deg,rgba(20,32,90,0.98)_0%,rgba(13,22,63,0.92)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
      <div className="flex items-center gap-2 border-b border-white/[0.08] px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/75" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/75" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/65" />
        </span>
        <span className="ml-2 truncate font-mono text-[10px] font-medium tracking-wide text-slate-500">
          performance · leads · ilustração
        </span>
        <span className="ml-auto rounded border border-white/[0.06] bg-white/[0.03] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-slate-500">
          Meta Ads
        </span>
      </div>

      <div className="p-4 md:p-5">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold/90">
              Visão geral
            </p>
            <p className="mt-1 font-display text-sm font-semibold text-white md:text-[0.95rem]">
              Indicadores de campanha
            </p>
            <p className="mt-0.5 text-[11px] text-slate-500">
              Valores de exemplo — não são métricas reais do seu negócio.
            </p>
          </div>
        </div>

        {/* KPIs — Leads, CTR, CPC, Otimização */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {kpis.map((m) => (
            <div
              key={m.label}
              className={`rounded-xl border px-2.5 py-2.5 ${
                m.accent === 'brand'
                  ? 'border-brand/25 bg-brand/[0.08]'
                  : 'border-gold/20 bg-gold/[0.06]'
              }`}
            >
              <p className="text-[9px] font-semibold uppercase tracking-wider text-slate-500">
                {m.label}
              </p>
              <p className="mt-1 font-display text-lg font-semibold tabular-nums text-white md:text-xl">
                {m.value}
              </p>
              <p className="mt-0.5 text-[10px] text-slate-500">{m.hint}</p>
            </div>
          ))}
        </div>

        {/* Gráfico de tendência */}
        <div className="relative mt-4 aspect-[16/9] max-h-[180px] w-full md:max-h-[200px]">
          <div className="absolute left-0 top-0 flex h-full w-7 flex-col justify-between py-1 text-[9px] tabular-nums text-slate-600">
            <span>100</span>
            <span>75</span>
            <span>50</span>
            <span>25</span>
          </div>
          <svg
            className="ml-7 h-full w-[calc(100%-1.75rem)]"
            viewBox="0 0 400 180"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden
          >
            <defs>
              <linearGradient id="heroChartFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgb(150, 9, 43)" stopOpacity="0.28" />
                <stop offset="100%" stopColor="rgb(150, 9, 43)" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="heroChartLine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgb(150, 9, 43)" />
                <stop offset="100%" stopColor="rgb(240, 176, 192)" />
              </linearGradient>
            </defs>
            {[36, 72, 108, 144].map((y) => (
              <line
                key={y}
                x1="0"
                y1={y}
                x2="400"
                y2={y}
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="1"
              />
            ))}
            <path
              d="M 0 118 L 48 108 L 96 112 L 144 92 L 192 78 L 240 82 L 288 58 L 336 48 L 400 52 L 400 160 L 0 160 Z"
              fill="url(#heroChartFill)"
            />
            <path
              d="M 0 118 L 48 108 L 96 112 L 144 92 L 192 78 L 240 82 L 288 58 L 336 48 L 400 52"
              fill="none"
              stroke="url(#heroChartLine)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {[
              [48, 108],
              [144, 92],
              [240, 82],
              [336, 48],
            ].map(([x, y], i) => (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="3.5"
                fill="#0d163f"
                stroke="rgb(240, 176, 192)"
                strokeWidth="1.25"
              />
            ))}
            <text x="0" y="176" fill="rgba(148,163,184,0.55)" fontSize="9">
              Sem 1
            </text>
            <text x="100" y="176" fill="rgba(148,163,184,0.55)" fontSize="9">
              Sem 2
            </text>
            <text x="200" y="176" fill="rgba(148,163,184,0.55)" fontSize="9">
              Sem 3
            </text>
            <text x="300" y="176" fill="rgba(148,163,184,0.55)" fontSize="9">
              Sem 4
            </text>
          </svg>
        </div>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-white/[0.06] pt-3 text-[10px] text-slate-500">
          <span className="rounded-md bg-white/[0.03] px-2 py-1 font-medium text-slate-400">
            Leads · tendência semanal
          </span>
          <span className="text-slate-600">Ilustração visual</span>
        </div>
      </div>
    </div>
  )
}
