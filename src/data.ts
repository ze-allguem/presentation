export type ConceptNode = {
  title: string;
  subtitle?: string;
  text: string;
  position: 'top' | 'bottom';
};

export type SlideData = {
  id: string;
  title: string;
  subtitle?: string;
  content: string[];
  quote?: string;
  layout: 'cover' | 'content' | 'split-image' | 'analysis' | 'split-block' | 'impact-quote' | 'concept-map' | 'roadmap';
  imagePlaceholder?: string;
  chapter?: string;
  section?: string;
  presenter?: string;
  nodes?: ConceptNode[];
};

export const slides: SlideData[] = [
  // ==========================================
  // APRESENTADOR 1: INTRODUÇÃO & O MÉTODO
  // ==========================================
  {
    id: 'cover',
    title: 'argonautas',
    subtitle: 'do pacífico ocidental\nCapítulos II e III\nBronislaw Malinowski',
    content: [
      'Uma análise profunda da vida sociológica nas Ilhas Trobriand e o imenso espetáculo intertribal do Kula.',
    ],
    layout: 'cover',
    presenter: 'Apresentador 1: [Nome]',
  },
  {
    id: 'o-metodo',
    title: 'o método',
    quote: 'o etnógrafo fica à espreita de fatos sociológicos ocultos sob o aspecto trivial do que vê.',
    subtitle: 'a observação direta',
    content: [],
    layout: 'impact-quote',
    presenter: 'Apresentador 1: [Nome]',
  },
  {
    id: 'roteiro-apresentacao',
    title: 'roteiro',
    chapter: 'INTRODUÇÃO',
    section: 'A Jornada',
    presenter: 'Apresentador 1: [Nome]',
    content: [],
    layout: 'roadmap',
    nodes: [
      {
        title: 'Parte 1',
        subtitle: 'a chegada',
        text: 'Primeiras impressões e a base social.',
        position: 'top'
      },
      {
        title: 'Parte 2',
        subtitle: 'mulheres',
        text: 'Autonomia, casamento e matrilinearidade.',
        position: 'bottom'
      },
      {
        title: 'Parte 3',
        subtitle: 'aldeia e roça',
        text: 'O poder da magia, do chefe e o prestígio.',
        position: 'top'
      },
      {
        title: 'Parte 4',
        subtitle: 'o kula',
        text: 'A imensa rede intertribal do Kula.',
        position: 'bottom'
      }
    ]
  },
  {
    id: 'cap2-intro',
    title: 'a chegada',
    chapter: 'CAPÍTULO II',
    section: '1. Os Nativos das Trobriand',
    presenter: 'Apresentador 1: [Nome]',
    content: [
      'Entramos num mar de águas opacas e esverdeadas, cuja monotonia é quebrada por bancos de areia e ilhas planas de coral. A selva baixa e espessa abre-se para praias e aldeias.',
      'A primeira visita à aldeia revela de imediato aspectos cruciais da sociologia nativa. O observador não deve se prender apenas ao visual pitoresco, mas à forma como os grupos se reúnem e conversam.',
      'A existência de classes salta aos olhos: os chefes são tratados com o máximo respeito, e ninguém ousa permanecer em posição física mais alta que a deles.'
    ],
    layout: 'split-block',
    imagePlaceholder: 'Cenário da chegada em Boyowa',
  },
  {
    id: 'diversidade-fisica',
    title: 'diversidade',
    chapter: 'CAPÍTULO II',
    section: '1. Os Nativos das Trobriand',
    presenter: 'Apresentador 1: [Nome]',
    content: [
      'Um dos primeiros fatos que chamam a atenção em Boyowa é a grande variedade de tipos físicos. Há homens e mulheres de grande estatura, perfil aquilino e traços delicados.',
      'A par desses, há também rostos de feições negroides, com lábios grossos e expressão mais dura. As atitudes são livres, espontâneas e confiantes.',
      'Quando um visitante desconhecido chega, metade da aldeia se reúne, assumindo um tom de jocosa intimidade. Isso demonstra uma comunidade vibrante e complexa desde o primeiro contato.'
    ],
    layout: 'split-image',
    imagePlaceholder: 'Diferentes perfis físicos dos trobriandeses',
  },

  // ==========================================
  // APRESENTADOR 2: MULHERES E MATRILINEARIDADE
  // ==========================================
  {
    id: 'mapa-mulher',
    title: 'mulher',
    chapter: 'CAPÍTULO II',
    section: '2. A Posição Social',
    presenter: 'Apresentador 2: [Nome]',
    content: [],
    layout: 'concept-map',
    nodes: [
      {
        title: 'SEXUALIDADE',
        subtitle: 'precoce',
        text: 'A castidade é desconhecida. Rituais como o katuyausi atestam a liberdade antes do casamento.',
        position: 'top'
      },
      {
        title: 'PRIVILÉGIO',
        subtitle: 'horticultura',
        text: 'O trabalho agrícola não é fardo, mas privilégio que confere poder comunitário à mulher.',
        position: 'top'
      },
      {
        title: 'AUTONOMIA',
        subtitle: 'matrimonial',
        text: 'O casamento não é compra. Se insatisfeita, a mulher abandona o marido sem hesitar.',
        position: 'bottom'
      },
      {
        title: 'MAGIA',
        subtitle: 'exclusiva',
        text: 'Monopolizam magias vitais: do nascimento, da beleza e dos importantes rituais funerários.',
        position: 'bottom'
      }
    ]
  },
  {
    id: 'katuyausi',
    title: 'katuyausi',
    chapter: 'CAPÍTULO II',
    section: '2. A Posição Social',
    presenter: 'Apresentador 2: [Nome]',
    content: [
      'As mulheres de Boyowa exibem uma atitude amigável que contrasta fortemente com o retraimento de tribos vizinhas. Jovens solteiras têm imensa liberdade.',
      'Existem arranjos cerimoniais, chamados "katuyausi", onde grupos de jovens visitam outras aldeias para se apresentar aos rapazes, passando por inspeções informais.',
      'Até as viúvas e mulheres mais velhas possuem rituais peculiares, chegando a atacar e constranger viajantes desavisados durante o trabalho coletivo de arrancar ervas.'
    ],
    layout: 'analysis',
  },
  {
    id: 'matrilinearidade',
    title: 'a mãe',
    chapter: 'CAPÍTULO II',
    section: '2. Matrilinearidade',
    presenter: 'Apresentador 2: [Nome]',
    quote: 'a criança pertence automaticamente ao clã e à comunidade da mãe.',
    subtitle: 'a base de toda herança',
    content: [],
    layout: 'impact-quote',
  },
  {
    id: 'pai-tio',
    title: 'pai x tio',
    chapter: 'CAPÍTULO II',
    section: '2. Herança e Afeto',
    presenter: 'Apresentador 2: [Nome]',
    content: [
      'A paternidade fisiológica é ignorada. O pai é visto apenas como o "marido da mãe", mas ironicamente, atua como o amigo mais próximo, afetuoso e brincalhão de seus filhos.',
      'O tio materno (irmão da mãe), por outro lado, é o verdadeiro guardião por lei. É ele quem possui o dever tradicional de cuidar da disciplina, cobrar obrigações e deixar herança material para o sobrinho.',
      'Essa cisão fascinante separa o afeto espontâneo (pai) do dever jurídico-social (tio), moldando a base emocional e econômica do jovem nativo.'
    ],
    layout: 'split-image',
    imagePlaceholder: 'Pai trobriandês brincando com o filho',
  },
  {
    id: 'mapa-aldeia',
    title: 'aldeia',
    chapter: 'CAPÍTULO II',
    section: '3. A Organização da Aldeia',
    presenter: 'Apresentador 2: [Nome]',
    content: [],
    layout: 'concept-map',
    nodes: [
      {
        title: 'BAKU',
        subtitle: 'o centro',
        text: 'Praça circular central onde ocorrem as danças, cerimônias (milamala) e velórios públicos.',
        position: 'top'
      },
      {
        title: 'CELEIROS',
        subtitle: 'ostentação',
        text: 'Círculo interno de armazéns decorados. Exibir inhame é exibir força política.',
        position: 'top'
      },
      {
        title: 'CABANAS',
        subtitle: 'dormitórios',
        text: 'Círculo externo e abafado. Apenas para dormir. A verdadeira vida tribal é externa.',
        position: 'bottom'
      },
      {
        title: 'COLETIVIDADE',
        subtitle: 'unida',
        text: 'Mais que moradia, a aldeia explora terras, festeja e até navega unida politicamente.',
        position: 'bottom'
      }
    ]
  },

  // ==========================================
  // APRESENTADOR 3: TRABALHO, CHEFE E MAGIA
  // ==========================================
  {
    id: 'trabalho-agricola',
    title: 'o trabalho',
    chapter: 'CAPÍTULO II',
    section: '4. Atitude Frente à Roça',
    presenter: 'Apresentador 3: [Nome]',
    content: [
      'O nativo não trabalha apenas para encher o estômago. Na roça, eles produzem quase o dobro do que necessitam, o excedente frequentemente apodrecia antes da exportação.',
      'Eles despendem energia gigantesca em tarefas puramente estéticas e ornamentais: limpam detritos meticulosamente e erguem "kamkokolas", prismas de madeira sem utilidade prática.',
      'Tudo isso ocorre porque a roça é um palco. O prestígio é proporcional à beleza do cultivo. O cobiçado título de "tokwaybagula" (bom lavrador) é disputado ferozmente.'
    ],
    layout: 'split-block',
    imagePlaceholder: 'Estruturas kamkokola e as roças impecáveis',
  },
  {
    id: 'mito-economico',
    title: 'o mito',
    chapter: 'CAPÍTULO II',
    section: '4. O Falso "Homem Primitivo"',
    presenter: 'Apresentador 3: [Nome]',
    quote: 'a ideia do homem primitivo movido apenas pelo mínimo esforço para fins utilitários é absurda.',
    subtitle: 'o trabalho como fim em si mesmo',
    content: [],
    layout: 'impact-quote',
  },
  {
    id: 'mapa-chefe',
    title: 'chefe',
    chapter: 'CAPÍTULO II',
    section: '5. Autoridade e Prestígio',
    presenter: 'Apresentador 3: [Nome]',
    content: [],
    layout: 'concept-map',
    nodes: [
      {
        title: 'TABALU',
        subtitle: 'linhagem',
        text: 'Pertencem à categoria social suprema. Desfrutam de temor reverente e poderes extremos.',
        position: 'top'
      },
      {
        title: 'POLIGAMIA',
        subtitle: 'tributos',
        text: 'Cada aldeia entrega colheitas ao chefe através das esposas, abarrotando seus imensos celeiros.',
        position: 'bottom'
      },
      {
        title: 'FINANCIADOR',
        subtitle: 'o kula',
        text: 'Comanda a máquina pública: paga serviços, alimenta a tribo e organiza grandes expedições do Kula.',
        position: 'top'
      }
    ]
  },
  {
    id: 'mapa-feitico',
    title: 'bwaga\'u',
    chapter: 'CAPÍTULO II',
    section: '7. Magia e Crenças',
    presenter: 'Apresentador 3: [Nome]',
    content: [],
    layout: 'concept-map',
    nodes: [
      {
        title: 'DOENÇA',
        subtitle: 'é feitiço',
        text: 'A morte nunca é natural. Deriva do bwaga\'u, que age à noite com ervas, invocações e fogo mágico.',
        position: 'top'
      },
      {
        title: 'MATRICÍDIO',
        subtitle: 'a iniciação',
        text: 'Para validar seu poder extremo, o feiticeiro comete sua primeira magia mortal contra um parente materno.',
        position: 'bottom'
      },
      {
        title: 'PUNIÇÃO',
        subtitle: 'do chefe',
        text: 'Chefes utilizam abertamente o terror do bwaga\'u para punir inimigos e manter a ordem social sem violência física.',
        position: 'top'
      }
    ]
  },
  {
    id: 'mulukwausi',
    title: 'bruxas',
    chapter: 'CAPÍTULO II',
    section: '7. Bruxas Voadoras',
    presenter: 'Apresentador 3: [Nome]',
    content: [
      'Se o bwaga\'u é temido, as "mulukwausi" (bruxas voadoras) são o pavor absoluto. Vindas das ilhas do leste, são culpadas por epidemias e mortes repentinas.',
      'Acreditam que elas voam invisíveis pelos ares, pousam nos tetos das choupanas e arrancam os corações, pulmões e línguas de suas vítimas.',
      'Elas são o grande terror das expedições marítimas do Kula. Há rituais mágicos exaustivos apenas para escondê-los dessas bruxas no oceano aberto.'
    ],
    layout: 'split-image',
    imagePlaceholder: 'Canoa noturna enfrentando o imaginário',
  },

  // ==========================================
  // APRESENTADOR 4: O KULA - FUNDAMENTOS
  // ==========================================
  {
    id: 'kula-espetaculo',
    title: 'o espetáculo',
    chapter: 'CAPÍTULO III',
    section: '1. As Características do Kula',
    presenter: 'Apresentador 4: [Nome]',
    quote: 'feita a descrição do cenário e dos atores, passemos ao espetáculo em si.',
    subtitle: 'a magnitude intertribal',
    content: [],
    layout: 'impact-quote',
  },
  {
    id: 'mapa-kula',
    title: 'o kula',
    chapter: 'CAPÍTULO III',
    section: '1. O Circuito Fechado',
    presenter: 'Apresentador 4: [Nome]',
    content: [],
    layout: 'concept-map',
    nodes: [
      {
        title: 'O CIRCUITO',
        subtitle: 'intertribal',
        text: 'Um sistema fechado que une ilhas distantes através de uma troca constante e regulamentada.',
        position: 'top'
      },
      {
        title: 'DIREÇÃO',
        subtitle: 'oposta',
        text: 'Colares vermelhos giram para a direita (horário). Braceletes brancos para a esquerda (anti-horário).',
        position: 'bottom'
      },
      {
        title: 'RITUAL',
        subtitle: 'mágico',
        text: 'Não há trocas simples. Tudo é público, precedido de ritos laboriosos e leis consagradas por mitos antigos.',
        position: 'top'
      }
    ]
  },
  {
    id: 'mapa-vaygua',
    title: 'vaygu\'a',
    chapter: 'CAPÍTULO III',
    section: '3. Os Artigos de Valor',
    presenter: 'Apresentador 4: [Nome]',
    content: [],
    layout: 'concept-map',
    nodes: [
      {
        title: 'SOULAVA',
        subtitle: 'colares',
        text: 'Feitos com pequenos discos de Spondylus vermelho. Viajam ininterruptamente pelo norte e leste.',
        position: 'top'
      },
      {
        title: 'MWALI',
        subtitle: 'braceletes',
        text: 'Cortados do cone de grandes conchas marinhas, giram pelo sul em direção oposta.',
        position: 'bottom'
      },
      {
        title: 'INÚTEIS',
        subtitle: 'mas valiosos',
        text: 'Alguns são tão pesados e grandes que mal podem ser usados, guardando seu valor no puro simbolismo.',
        position: 'top'
      }
    ]
  },
  {
    id: 'roadmap-kula',
    title: 'a rota',
    chapter: 'CAPÍTULO III',
    section: '1. O Movimento',
    presenter: 'Apresentador 4: [Nome]',
    content: [],
    layout: 'roadmap',
    nodes: [
      {
        title: 'Passo 1',
        subtitle: 'receber',
        text: 'O nativo recebe o mwali com pompa. Ele temporariamente possui a glória do artigo.',
        position: 'top'
      },
      {
        title: 'Passo 2',
        subtitle: 'exibir',
        text: 'A peça permanece em sua aldeia. É tema de fofoca, orgulho e ambição.',
        position: 'bottom'
      },
      {
        title: 'Passo 3',
        subtitle: 'passar adiante',
        text: 'Em meses ou até anos, a posse exige devolução. O artigo segue para o próximo parceiro.',
        position: 'top'
      },
      {
        title: 'Passo 4',
        subtitle: 'perpetuar',
        text: 'O ciclo reinicia. A peça continua sua viagem infinita por gerações.',
        position: 'bottom'
      }
    ]
  },
  {
    id: 'joias-coroa',
    title: 'joias',
    chapter: 'CAPÍTULO III',
    section: '3. Valor Histórico',
    presenter: 'Apresentador 4: [Nome]',
    content: [
      'Se os colares e braceletes não têm uso prático, por que tanta paixão? Malinowski compara isso perfeitamente com as Joias da Coroa Britânica ou troféus esportivos europeus.',
      'Sua preciosidade vem da história, dos donos ilustres do passado e dos romances heroicos de quem os transportou sobre águas mortais.',
      'Diferente da Europa, onde a glória é manter a joia para sempre num cofre, no Pacífico Sul a maior glória é possuir temporariamente e, em seguida, ter a nobreza de entregá-la ao parceiro.'
    ],
    layout: 'analysis',
  },

  // ==========================================
  // APRESENTADOR 5: A SOCIOLOGIA DO KULA
  // ==========================================
  {
    id: 'regra-eterna',
    title: 'o lema',
    chapter: 'CAPÍTULO III',
    section: '1. A Regra Eterna',
    presenter: 'Apresentador 5: [Nome]',
    quote: 'uma vez no kula, sempre no kula.',
    subtitle: 'a parceria permanente',
    content: [],
    layout: 'impact-quote',
  },
  {
    id: 'parcerias',
    title: 'parcerias',
    chapter: 'CAPÍTULO III',
    section: '4. O Limite das Relações',
    presenter: 'Apresentador 5: [Nome]',
    content: [
      'A permuta dos vaygu\'a não ocorre a torto e a direito. Ela é restrita a parcerias sociológicas profundas.',
      'Um indivíduo comum em Sinaketa pode ter meia dúzia de parceiros. Um chefe poderoso, no entanto, pode ter centenas, recebendo e despachando verdadeiras fortunas em conchas.',
      'Você jamais dá braceletes para a mesma pessoa que lhe deu braceletes. A geografia define o dever: de parceiros do norte vêm mwali, e para parceiros do sul eles são enviados, contra a maré de colares.'
    ],
    layout: 'split-block',
    imagePlaceholder: 'Rede de relacionamentos no Kula',
  },
  {
    id: 'hospitalidade',
    title: 'proteção',
    chapter: 'CAPÍTULO III',
    section: '4. O Parceiro de Além-Mar',
    presenter: 'Apresentador 5: [Nome]',
    content: [
      'Na selva ultramarina e ilhas vulcânicas desconhecidas, as tribos são vistas como perigosas e repletas de feitiçaria mortal.',
      'Nesse ambiente hostil, o "parceiro de Kula" atua como a única garantia de segurança. Ele é o patrono: oferece proteção mágica, comida e abrigo enquanto a expedição visita a aldeia.',
      'Através do Kula, nativos tecem enormes encadeamentos de paz e diplomacia. Até mesmo canções e costumes se espalham silenciosamente junto com os colares através de distritos que outrora seriam mortais.'
    ],
    layout: 'split-image',
    imagePlaceholder: 'Viagem de além-mar em canoas gigantes',
  },
  {
    id: 'sem-coercao',
    title: 'honra',
    chapter: 'CAPÍTULO III',
    section: '5. Equivalência e Retorno',
    presenter: 'Apresentador 5: [Nome]',
    content: [
      'O princípio vital da transação é que um presente (vaga) exige um contrapresente equivalente (yotile) futuramente.',
      'Essa equivalência é decidida de forma absoluta pelo doador e JAMAIS pode ser imposta por coerção. Se a retribuição for fraca, não há briga física, não há tribunais para processar o parceiro.',
      'O único tribunal existente é o da opinião pública: a mesquinharia atrai censura feroz, minando o respeito e eliminando futuras trocas com aquele nativo na rede intertribal.'
    ],
    layout: 'analysis',
  },
  {
    id: 'presentes-solicitacao',
    title: 'solicitação',
    chapter: 'CAPÍTULO III',
    section: '5. Seduzindo o Kula',
    presenter: 'Apresentador 5: [Nome]',
    content: [
      'Quando uma joia espetacular chega em uma aldeia, todos sabem de sua fama. Vários parceiros começam a competir pelo direito de recebê-la na próxima transação.',
      'Para "seduzir" o detentor, eles enviam "pokala" (oferendas preliminares de porcos, bananas luxuosas) ou "kaributu" (presentes pesados, como enormes lâminas de machado em pedra).',
      'Isso demonstra como o sistema não usa preços, mas um balé sutil de presentes diplomáticos que aguçam a mente e honram quem guarda o colar famoso.'
    ],
    layout: 'split-block',
    imagePlaceholder: 'Presentes preliminares acumulados',
  },

  // ==========================================
  // APRESENTADOR 6: ECONOMIA E HONRA
  // ==========================================
  {
    id: 'noblesse-oblige',
    title: 'riqueza',
    chapter: 'CAPÍTULO III',
    section: '5. O Código Moral',
    presenter: 'Apresentador 6: [Nome]',
    quote: 'noblesse oblige. possuir é ser poderoso; e a glória de possuir está fundamentalmente em dar.',
    subtitle: 'a essência da bondade',
    content: [],
    layout: 'impact-quote',
  },
  {
    id: 'possuir-e-dar',
    title: 'o código',
    chapter: 'CAPÍTULO III',
    section: '5. Generosidade como Virtude',
    presenter: 'Apresentador 6: [Nome]',
    content: [
      'O europeu guarda sua riqueza sob sete chaves. Para o trobriandês, a riqueza só ganha valor moral quando é distribuída.',
      'O chefe tem o dever inescapável de prover comida e tabaco a estranhos e aliados. Se ele esconde seus tesouros, comete o vício mais desprezado por eles: a avareza.',
      'Não se trata de um "comunismo primitivo", como muitos julgam às pressas. Eles são obcecados pela glória individual e competem agressivamente para serem vistos como os mais generosos de todos.'
    ],
    layout: 'analysis',
  },
  {
    id: 'gimwali',
    title: 'gimwali',
    chapter: 'CAPÍTULO III',
    section: '5. A Humilhação da Pechincha',
    presenter: 'Apresentador 6: [Nome]',
    content: [
      'A linha divisória na cultura Trobriand: de um lado o Kula, sagrado e impositivo. Do outro, o "gimwali", o escambo profano.',
      'No gimwali, os nativos trocam peixes por inhames, discutindo, gritando e barganhando cada milímetro de valor, do modo mais pragmático possível.',
      'Tentar aplicar o comportamento do gimwali (pechincha) em uma joia do Kula é uma gafe abominável. Dizer que "ele age como se o Kula fosse o gimwali" é o pior xingamento diplomático que um nativo pode receber.'
    ],
    layout: 'split-image',
    imagePlaceholder: 'Mercado de escambo vulgar vs Cerimônia Kula',
  },
  {
    id: 'magia-mwasila',
    title: 'mwasila',
    chapter: 'CAPÍTULO III',
    section: '6. A Magia do Kula',
    presenter: 'Apresentador 6: [Nome]',
    content: [
      'A engrenagem do Kula é invisível e profundamente dependente do sistema mágico mwasila.',
      'Sem papel para contratos, os feitiços recitados antes da partida supostamente amolecem a "nanola" (mente) dos parceiros estrangeiros, forçando-os a serem hospitaleiros e a entregarem colares fenomenais.',
      'Há magias específicas aplicadas ao mar, ao vento e à canoa (para não rachar nem se perder), criando um manto de confiança psicológica fundamental para navegarem em águas aterrorizantes.'
    ],
    layout: 'split-block',
    imagePlaceholder: 'Feitiços sendo lançados sobre as proas das canoas',
  },
  {
    id: 'construcao-canoas',
    title: 'as frotas',
    chapter: 'CAPÍTULO III',
    section: '6. Preparativos Primordiais',
    presenter: 'Apresentador 6: [Nome]',
    content: [
      'A grandiosidade do Kula impulsiona indústrias colossais nas ilhas de coral. A construção de uma nova frota de wagas (grandes canoas de alto mar) exige coordenação massiva.',
      'Lenhadores precisam abater árvores enormes no interior, e carpinteiros habilidosos talham entalhes maravilhosos. O Kula é, literalmente, o combustível que põe aldeias inteiras para trabalhar em sintonia durante meses antes da viagem real.'
    ],
    layout: 'analysis',
  },

  // ==========================================
  // APRESENTADOR 7: COMÉRCIO SECUNDÁRIO E CONCLUSÃO
  // ==========================================
  {
    id: 'a-sombra',
    title: 'a sombra',
    chapter: 'CAPÍTULO III',
    section: '6. Comércio Secundário',
    presenter: 'Apresentador 7: [Nome]',
    quote: 'ao lado do kula existe o comércio secundário de bens úteis. mas ele navega às margens da magia e do romance cerimonial.',
    subtitle: 'economia sob o disfarce heroico',
    content: [],
    layout: 'impact-quote',
  },
  {
    id: 'comercio-utilitario',
    title: 'comércio',
    chapter: 'CAPÍTULO III',
    section: '6. A Carga Utilitária',
    presenter: 'Apresentador 7: [Nome]',
    content: [
      'Apesar das joias do Kula monopolizarem a glória, as frotas não viajam centenas de quilômetros de mãos vazias. As canoas vão entupidas de mercadorias vitais que não existem em Trobriand.',
      'Nativos levam pedras vulcânicas, bétel, cerâmica de Amphlett e sagu, criando uma veia logística massiva.',
      'A questão fascinante para Malinowski é que os nativos não construiriam canoas imensas, nem desafiariam as "mulukwausi", apenas para buscar pedras úteis. A teleologia social os move pelo mito e pela honra.'
    ],
    layout: 'split-image',
    imagePlaceholder: 'Canoa abarrotada de panelas e cerâmicas na parte inferior',
  },
  {
    id: 'distritos-marginais',
    title: 'outras ilhas',
    chapter: 'CAPÍTULO II',
    section: '8. O Alcance do Circuito',
    presenter: 'Apresentador 7: [Nome]',
    content: [
      'A teia do Kula atinge desde a polida costa ocidental até terras exóticas como Kitava, Woodlark (Murua) e as Ilhas Amphlett.',
      'Essas diferentes culturas têm idiomas distintos e práticas tribais separadas — em algumas áreas, inclusive o canibalismo do passado contrastava violentamente com os pacíficos Trobriandeses.',
      'Mas através da instituição do Kula, todas essas ilhas fragmentadas são organizadas num único fórum pacífico internacional.'
    ],
    layout: 'split-block',
    imagePlaceholder: 'Distritos marginais e rotas entre as ilhas vulcânicas',
  },
  {
    id: 'falsas-ideias',
    title: 'falsas ideias',
    chapter: 'CAPÍTULO III',
    section: '2. Economia Primitiva Revisitada',
    presenter: 'Apresentador 7: [Nome]',
    content: [
      'Ao desmontar falsas ideias de economia primitiva, Malinowski revela que o chamado "selvagem" nunca foi livre de restrições ou regido pelo acaso.',
      'O comércio primitivo do Kula não é feito no desespero da necessidade biológica, em intervalos aleatórios, ou de forma precária.',
      'O Kula é ordenado por cronogramas fixos anuais, regulado rigorosamente, público e ancorado na reputação de crédito de cada tribo, desafiando a arrogância das teorias ocidentais primitivas de mercado.'
    ],
    layout: 'analysis',
  },
  {
    id: 'conclusao-final',
    title: 'a teia',
    chapter: 'SÍNTESE',
    section: 'A Obra-Prima Sociológica',
    presenter: 'Apresentador 7: [Nome]',
    content: [
      'Como vimos nesta jornada, os Capítulos II e III dos Argonautas funcionam como as lentes de um caleidoscópio tribal.',
      'Onde um observador apressado veria apenas nativos preguiçosos ou braceletes inúteis, as lentes metodológicas da etnografia profunda revelam um império complexo e brilhante.',
      'O orgulho da roça, a crença na feitiçaria, o respeito matrilinear e a paixão fervorosa pelas joias ultramarinas não são partes isoladas, mas sim uma engrenagem única, vital e coesa: O Grande Kula.'
    ],
    layout: 'split-block',
    imagePlaceholder: 'O imenso mar das ilhas da Oceania',
  }
];
