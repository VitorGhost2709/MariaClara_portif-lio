export type FaqAnswerBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }

export type FaqItem = {
  question: string
  blocks: FaqAnswerBlock[]
}

export const faqItems: FaqItem[] = [
  {
    question: 'Tráfego pago funciona mesmo para consultório particular?',
    blocks: [
      { type: 'paragraph', text: 'Sim — mas não do jeito que a maioria faz.' },
      { type: 'paragraph', text: 'O erro é anunciar "limpeza" ou "clareamento barato".' },
      { type: 'paragraph', text: 'Isso atrai paciente de preço, não de valor.' },
      { type: 'paragraph', text: 'A estratégia certa usa:' },
      {
        type: 'list',
        items: [
          'Posicionamento premium',
          'Segmentação geográfica inteligente',
          'Oferta com percepção de valor (não preço)',
        ],
      },
      {
        type: 'paragraph',
        text: 'Resultado: menos pacientes, ticket mais alto e agenda qualificada.',
      },
    ],
  },
  {
    question: 'Em quanto tempo começam a aparecer pacientes?',
    blocks: [
      { type: 'paragraph', text: 'Tráfego pago não é branding — é demanda ativa.' },
      { type: 'paragraph', text: 'Os primeiros leads podem aparecer nos primeiros dias.' },
      { type: 'paragraph', text: 'Mas o ajuste fino acontece nas primeiras semanas.' },
      { type: 'paragraph', text: 'Em média:' },
      { type: 'list', items: ['7 a 15 dias → primeiros contatos', '30 dias → campanhas otimizadas e previsíveis'] },
    ],
  },
  {
    question: 'E se eu investir e não tiver retorno?',
    blocks: [
      { type: 'paragraph', text: 'Essa é a pergunta certa.' },
      { type: 'paragraph', text: 'Por isso, nosso trabalho não é "rodar anúncio".' },
      { type: 'paragraph', text: 'É estruturar um sistema previsível de captação.' },
      { type: 'paragraph', text: 'Antes de qualquer campanha, analisamos:' },
      { type: 'list', items: ['Região', 'Concorrência', 'Procedimentos mais lucrativos'] },
      { type: 'paragraph', text: 'Assim, você não entra no escuro — entra com direção.' },
    ],
  },
  {
    question: 'Preciso investir muito em anúncios?',
    blocks: [
      { type: 'paragraph', text: 'Não.' },
      { type: 'paragraph', text: 'Você não precisa começar grande — precisa começar certo.' },
      {
        type: 'paragraph',
        text: 'Com investimentos a partir de R$20 a R$50/dia já é possível validar campanhas e gerar pacientes.',
      },
      { type: 'paragraph', text: 'O que define o resultado não é o valor…' },
      { type: 'paragraph', text: 'é a estratégia por trás.' },
    ],
  },
  {
    question: 'Preciso entender de marketing para isso funcionar?',
    blocks: [
      { type: 'paragraph', text: 'Não.' },
      { type: 'paragraph', text: 'Você precisa ser dentista — não gestor de tráfego.' },
      { type: 'paragraph', text: 'Nosso papel é cuidar de:' },
      { type: 'list', items: ['Estratégia', 'Campanhas', 'Otimizações'] },
      { type: 'paragraph', text: 'Seu papel é simples:' },
      { type: 'paragraph', text: 'atender bem e fechar pacientes.' },
    ],
  },
  {
    question: 'Isso funciona em cidade pequena ou só em capital?',
    blocks: [
      { type: 'paragraph', text: 'Funciona ainda melhor em cidades menores.' },
      { type: 'paragraph', text: 'Por quê?' },
      { type: 'list', items: ['Menos concorrência qualificada', 'Mais facilidade de posicionamento', 'Custo de anúncio mais baixo'] },
      { type: 'paragraph', text: 'Em muitas regiões, quem chega primeiro domina.' },
    ],
  },
  {
    question: 'Vou atrair só pacientes que pedem desconto?',
    blocks: [
      { type: 'paragraph', text: 'Se a estratégia for errada, sim.' },
      { type: 'paragraph', text: 'Se for bem feita, não.' },
      { type: 'paragraph', text: 'Nós estruturamos campanhas para:' },
      {
        type: 'list',
        items: [
          'Filtrar curiosos',
          'Atrair quem já valoriza o procedimento',
          'Posicionar você como referência',
        ],
      },
      { type: 'paragraph', text: 'Resultado: menos negociação, mais fechamento.' },
    ],
  },
  {
    question: 'Preciso ter clínica própria ou estrutura grande?',
    blocks: [
      { type: 'paragraph', text: 'Não.' },
      { type: 'paragraph', text: 'Você pode:' },
      { type: 'list', items: ['Atender em consultório compartilhado', 'Alugar diária', 'Ter espaço pequeno'] },
      { type: 'paragraph', text: 'O paciente não compra estrutura —' },
      { type: 'paragraph', text: 'compra confiança e percepção de valor.' },
    ],
  },
  {
    question: 'Vou precisar ficar respondendo muita gente?',
    blocks: [
      { type: 'paragraph', text: 'Você terá demanda — mas com controle.' },
      { type: 'paragraph', text: 'E o mais importante:' },
      { type: 'paragraph', text: 'não é volume… é qualidade.' },
      { type: 'paragraph', text: 'Além disso, estruturamos:' },
      { type: 'list', items: ['Scripts de atendimento', 'Organização de leads', 'Direcionamento para WhatsApp estratégico'] },
    ],
  },
  {
    question: 'Como vou saber se está dando resultado?',
    blocks: [
      { type: 'paragraph', text: 'Tudo é mensurado.' },
      { type: 'paragraph', text: 'Você acompanha:' },
      { type: 'list', items: ['Quantidade de leads', 'Custo por paciente', 'Retorno sobre investimento'] },
      { type: 'paragraph', text: 'Sem achismo. Só números.' },
    ],
  },
  {
    question: 'Já tentei antes e não funcionou…',
    blocks: [
      { type: 'paragraph', text: 'Provavelmente você fez o que 90% faz:' },
      { type: 'list', items: ['Anúncio genérico', 'Sem estratégia', 'Sem posicionamento'] },
      { type: 'paragraph', text: 'Tráfego pago sem estratégia vira custo.' },
      { type: 'paragraph', text: 'Com estratégia, vira previsibilidade.' },
    ],
  },
  {
    question: 'Qual o diferencial do seu trabalho?',
    blocks: [
      { type: 'paragraph', text: 'Nós não vendemos anúncios.' },
      { type: 'paragraph', text: 'Criamos um sistema completo de aquisição de pacientes que envolve:' },
      {
        type: 'list',
        items: ['Posicionamento', 'Oferta', 'Estratégia de captação', 'Otimização contínua'],
      },
      { type: 'paragraph', text: 'O objetivo não é "mais pacientes".' },
      { type: 'paragraph', text: 'É mais faturamento com menos atendimentos.' },
    ],
  },
]
