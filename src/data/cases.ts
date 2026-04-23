export interface CaseStudy {
  title: string
  seals: string[]
  /** Objetivo de negócio do projeto */
  objective: string
  /** Linha estratégica adotada */
  strategy: string
  /** Como foi executado na prática */
  execution: string
  /** Ganho ou percepção de resultado (sem números exagerados) */
  outcome: string
}

export const cases: CaseStudy[] = [
  {
    title: 'Aquisição de leads B2B',
    seals: ['Meta Ads', 'Leads', 'Funil'],
    objective:
      'Gerar conversas com decisores, não só cliques — preencher o funil com oportunidades alinhadas à oferta.',
    strategy:
      'Mapeamento de mensagens por estágio de consciência, segmentação por interesse e criativos que educam antes de pedir o contato.',
    execution:
      'Estrutura de campanhas em camadas, testes de headline e criativo, landing alinhada à promessa do anúncio e acompanhamento semanal de custo por lead.',
    outcome:
      'Mais previsibilidade no volume de leads e melhor qualidade percebida nas conversas — com base para escalar o investimento com segurança.',
  },
  {
    title: 'Demanda local e busca ativa',
    seals: ['Google Ads', 'Performance', 'Local'],
    objective:
      'Captar intenção de compra próxima: quem já busca a solução, no momento certo.',
    strategy:
      'Palavras-chave com intenção clara, anúncios espelhando a dor do usuário e extensões que reforçam confiança (local, serviço, diferenciais).',
    execution:
      'Grupos de anúncios por tema, ajuste de lances por região e dispositivo, e rotina de exclusões e melhorias no texto dos anúncios.',
    outcome:
      'Tráfego mais qualificado da busca e sensação de “custo sob controle” — menos desperdício em cliques que não viram oportunidade.',
  },
  {
    title: 'Performance e escala com método',
    seals: ['Meta Ads', 'Testes', 'Otimização'],
    objective:
      'Sair do “teste solto” para um ciclo contínuo: aprender rápido o que converte e dobrar o que funciona.',
    strategy:
      'Hipóteses explícitas (criativo, público, oferta), priorização do que impacta CPA e ritmo de iteração definido.',
    execution:
      'Calendário de testes, análise por conjunto e anúncio, pausa do que não performa e realocação de verba para os vencedores.',
    outcome:
      'Decisões menos baseadas em achismo e mais em padrão — equipe enxerga o que mudou, por quê, e o que vem na próxima rodada.',
  },
]
