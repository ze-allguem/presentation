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
  {
    id: 'cover',
    title: 'argonautas',
    subtitle: 'do pacífico ocidental\nCapítulos II e III\nBronislaw Malinowski',
    content: [
      'Trabalho de Antropologia baseado no texto original do PDF.',
    ],
    layout: 'cover',
    presenter: 'Equipe',
  },
  
  // ==========================================
  // APRESENTADOR 1: Airton (5 slides)
  // ==========================================
  {
    id: 'chegada-airton',
    title: 'a chegada',
    chapter: 'CAPÍTULO II',
    presenter: 'Apresentador 1: Airton',
    content: [
      'Malinowski sai de regiões escuras e de pedras para chegar às ilhas planas de coral de Trobriand. A paisagem muda de águas azuis para um verde opaco.',
      'A primeira visão da aldeia mistura as cores cinza e bronze dos nativos com os celeiros de inhame.',
      'Para ele, cada pessoa ali podia esconder um segredo sobre feitiçaria ou costumes.',
    ],
    quote: 'É difícil descrever o suspense e o interesse de um etnógrafo ao pisar pela primeira vez no campo de sua pesquisa.',
    layout: 'split-block',
  },
  {
    id: 'classes-airton',
    title: 'diversidade',
    chapter: 'CAPÍTULO II',
    presenter: 'Apresentador 1: Airton',
    content: [
      'A aldeia tem pessoas de tipos físicos bem diferentes. Os mais altos e de traços finos geralmente têm posição social maior e usam muitos enfeites de concha.',
      'A divisão de classes é muito forte. Por exemplo: se o chefe estiver sentado, nenhum homem comum pode ficar de pé, todos precisam se sentar ou se abaixar em respeito.',
    ],
    imagePlaceholder: 'Três homens nativos de classes altas ("aristocratas" de Kiriwina), vestindo seus enfeites tradicionais',
    layout: 'split-image',
  },
  {
    id: 'mulheres-airton',
    title: 'as mulheres',
    chapter: 'CAPÍTULO II',
    presenter: 'Apresentador 1: Airton',
    content: [
      'As mulheres são muito amigáveis e vestem saias curtas e coloridas feitas de fibra, diferentes das outras ilhas.',
      'Os jovens têm total liberdade amorosa. No casamento, a família da noiva ajuda a sustentar o casal, ou seja, eles não "compram" a esposa.',
      'Eles seguem a linha materna: o poder e a herança da criança vêm da família da mãe, passados do tio materno para o sobrinho.',
    ],
    layout: 'analysis',
  },
  {
    id: 'aldeia-airton',
    title: 'a praça central',
    chapter: 'CAPÍTULO II',
    presenter: 'Apresentador 1: Airton',
    content: [
      'As aldeias têm formato de círculo. Bem no meio, existe uma praça de terra batida chamada baku.',
      'Ao redor do baku ficam os celeiros de comida dos chefes, que são muito bem enfeitados. As casas comuns ficam mais atrás.',
      'É nessa praça que acontecem as festas, as danças e os funerais da aldeia.',
    ],
    layout: 'split-block',
  },
  {
    id: 'mito-airton',
    title: 'o mito refutado',
    chapter: 'CAPÍTULO II',
    presenter: 'Apresentador 1: Airton',
    content: [
      'Malinowski destrói a ideia ocidental de que o nativo era preguiçoso e trabalhava apenas para não morrer de fome.',
      'Em Trobriand, eles produzem o dobro de comida que precisam só por vaidade e para deixar a roça mais bonita.',
      'Tudo isso é guiado por rituais de magia, comandados pelo mago agrícola da aldeia.',
    ],
    quote: 'O bom lavrador trabalha por prestígio e competição social, não apenas por necessidade de sobrevivência.',
    layout: 'split-block',
  },

  // ==========================================
  // APRESENTADOR 2: José (5 slides)
  // ==========================================
  {
    id: 'chefe-jose',
    title: 'o poder',
    chapter: 'CAPÍTULO II',
    presenter: 'Apresentador 2: José',
    content: [
      'O grande chefe de Omarakana, chamado To\'uluwa, tem muito poder e riqueza. Ele pertence ao clã mais alto da região.',
      'A riqueza dele vem de suas várias esposas. As famílias dessas mulheres são obrigadas a dar comida para ele, enchendo seus celeiros.',
      'Com essa comida, ele paga pessoas, financia grandes festas e organiza viagens.',
    ],
    quote: 'A riqueza constitui o sinal visível e a substância do poder nas ilhas Trobriand.',
    layout: 'split-block',
  },
  {
    id: 'medo-jose',
    title: 'o medo',
    chapter: 'CAPÍTULO II',
    presenter: 'Apresentador 2: José',
    content: [
      'O chefe não usa armas para punir quem o ofende, ele usa a feitiçaria.',
      'Ele dá a ordem publicamente aos feiticeiros locais. O simples fato de saber que foi amaldiçoado faz a pessoa adoecer de puro terror psicológico e medo.',
    ],
    layout: 'analysis',
  },
  {
    id: 'distritos-jose',
    title: 'os distritos',
    chapter: 'CAPÍTULO II',
    presenter: 'Apresentador 2: José',
    content: [
      'A região é dividida em áreas com funções bem diferentes. Kiriwina é o centro da agricultura; Kuboma é cheio de artesãos e feiticeiros; e Sinaketa faz os colares vermelhos.',
      'Mesmo pertencendo a grupos gerais parecidos, pessoas da nobreza jamais se misturam com pessoas de clãs mais baixos.',
    ],
    layout: 'split-block',
  },
  {
    id: 'pais-jose',
    title: 'pais e tios',
    chapter: 'CAPÍTULO II',
    presenter: 'Apresentador 2: José',
    content: [
      'O tio materno é o "tutor oficial" da criança pela lei deles, mas a relação entre os dois é distante, cheia de tabus e fria.',
      'Já o pai biológico, que pela regra oficial não é considerado um parente de sangue, é quem dá amor, protege, cuida na doença e brinca no dia a dia.',
    ],
    layout: 'analysis',
  },
  {
    id: 'espiritos-jose',
    title: 'bruxas e feitiços',
    chapter: 'CAPÍTULO II',
    presenter: 'Apresentador 2: José',
    content: [
      'Eles não têm medo de fantasmas, pois acreditam que os mortos vivem em paz em uma ilha distante e só voltam para visitar uma vez por ano.',
      'O grande pavor deles é a magia negra. Eles acreditam que bruxas voadoras e feiticeiros perigosos são os únicos culpados por todas as doenças e mortes (até as de velhice).',
    ],
    layout: 'split-block',
  },

  // ==========================================
  // APRESENTADOR 3: André (5 slides)
  // ==========================================
  {
    id: 'kula-andre',
    title: 'o que é o kula',
    chapter: 'CAPÍTULO III',
    presenter: 'Apresentador 3: André',
    content: [
      'O Kula é uma enorme rede de trocas que interliga várias ilhas formando um grande círculo.',
      'Apenas dois enfeites viajam por ela sem parar: os colares vermelhos (soulava) giram para o lado direito, e os braceletes brancos (mwali) giram para o lado esquerdo.',
    ],
    layout: 'split-block',
  },
  {
    id: 'regra-andre',
    title: 'parcerias fixas',
    chapter: 'CAPÍTULO III',
    presenter: 'Apresentador 3: André',
    content: [
      'As pessoas formam parcerias de troca que duram a vida toda.',
      'A regra básica é receber o objeto, guardar com você por pouco tempo e depois passar adiante para o seu parceiro da outra ilha. É por isso que os enfeites nunca param de viajar.',
    ],
    quote: 'Uma vez no Kula, sempre no Kula.',
    layout: 'split-block',
  },
  {
    id: 'leis-andre',
    title: 'sem leis escritas',
    chapter: 'CAPÍTULO III',
    presenter: 'Apresentador 3: André',
    content: [
      'Toda essa rede funciona sem nenhuma lei escrita ou contrato de papel.',
      'Os nativos também não conhecem o circuito inteiro e nem sabem de onde o colar vem ou onde vai parar no final. Cada pessoa entende apenas a sua parte direta na troca.',
    ],
    layout: 'analysis',
  },
  {
    id: 'cientista-andre',
    title: 'o pesquisador',
    chapter: 'CAPÍTULO III',
    presenter: 'Apresentador 3: André',
    content: [
      'Como os nativos só viam as partes isoladas, coube ao antropólogo juntar tudo o que observou para desenhar a regra geral.',
      'Malinowski compara seu próprio trabalho ao de um físico, que precisa organizar vários dados isolados no laboratório para poder criar uma teoria completa que faça sentido.',
    ],
    layout: 'split-block',
  },
  {
    id: 'comercio-andre',
    title: 'não é fome',
    chapter: 'CAPÍTULO III',
    presenter: 'Apresentador 3: André',
    content: [
      'Antes, os europeus achavam que os povos isolados só trocavam coisas por desespero e necessidade de sobrevivência.',
      'O Kula prova exatamente o contrário. Eles se arriscam no mar não por comida, mas por tradição, rituais e honra. É um sistema altamente organizado e com datas certas.',
    ],
    layout: 'analysis',
  },

  // ==========================================
  // APRESENTADOR 4: Alice (5 slides)
  // ==========================================
  {
    id: 'joias-alice',
    title: 'as joias',
    chapter: 'CAPÍTULO III',
    presenter: 'Apresentador 4: Alice',
    content: [
      'Os braceletes (mwali) são feitos de grandes conchas marinhas cortadas e polidas com muito cuidado.',
      'Os colares (soulava) são fabricados juntando milhares de pequenos discos de concha vermelha. Eles chegam a medir até cinco metros de comprimento, decorados com sementes e pingentes na ponta.',
    ],
    layout: 'split-block',
  },
  {
    id: 'uso-alice',
    title: 'só para brilhar',
    chapter: 'CAPÍTULO III',
    presenter: 'Apresentador 4: Alice',
    content: [
      'Eles nunca usam essas joias no dia a dia. Elas só saem de casa para grandes festas e cerimônias de dança.',
      'Alguns braceletes são tão pequenos que não cabem nem no braço de uma criança, servindo apenas para pendurar.',
      'O valor delas não está na utilidade. É muito parecido com as Joias da Coroa dos reis europeus: o que vale é a fama e a história da peça.',
    ],
    layout: 'analysis',
  },
  {
    id: 'protecao-alice',
    title: 'o padrinho no mar',
    chapter: 'CAPÍTULO III',
    presenter: 'Apresentador 4: Alice',
    content: [
      'Uma pessoa comum tem no máximo dois ou três parceiros no mar. Já um chefe importante chega a ter centenas de aliados.',
      'Quando viajam pelo mar e chegam a uma ilha estranha, é o parceiro do Kula quem os recebe, dá comida e garante proteção contra os feiticeiros locais.',
    ],
    layout: 'split-block',
  },
  {
    id: 'nacoes-alice',
    title: 'encontro de culturas',
    chapter: 'CAPÍTULO III',
    presenter: 'Apresentador 4: Alice',
    content: [
      'Esse circuito junta milhares de pessoas de ilhas muito distantes, que de outra forma seriam grandes inimigas.',
      'Quando dezenas de canoas se encontram nas praias, elas não trazem apenas joias. Eles trocam também novas músicas, passos de dança e novidades culturais.',
    ],
    layout: 'split-block',
  },
  {
    id: 'direcao-alice',
    title: 'o fluxo perfeito',
    chapter: 'CAPÍTULO III',
    presenter: 'Apresentador 4: Alice',
    content: [
      'Os caminhos da troca são muito firmes. Uma aldeia recebe braceletes de um lado e colares do outro. A joia nunca volta para trás.',
      'O tempo para que uma única joia dê a volta completa passando por todas as ilhas pode demorar de dois a dez anos.',
    ],
    quote: 'De frente para o centro do círculo, o nativo sempre recebe braceletes com a mão esquerda e colares com a direita, repassando-os adiante.',
    layout: 'split-block',
  },

  // ==========================================
  // APRESENTADOR 5: Antônia (5 slides)
  // ==========================================
  {
    id: 'dar-antonia',
    title: 'dar e receber',
    chapter: 'CAPÍTULO III',
    presenter: 'Apresentador 5: Antônia',
    content: [
      'A regra mais básica é: você ganha um presente valioso e, depois de um tempo, tem a honra e o dever de devolver outro presente do mesmo nível.',
      'Se o seu parceiro te der uma joia enorme hoje e você não tiver nada tão bom para devolver no mês que vem, você oferece um item provisório menor como "sinal de confiança" até arrumar a joia certa.',
    ],
    layout: 'split-block',
  },
  {
    id: 'pechincha-antonia',
    title: 'sem pechincha',
    chapter: 'CAPÍTULO III',
    presenter: 'Apresentador 5: Antônia',
    content: [
      'No Kula é absolutamente proibido discutir valor, reclamar do tamanho do colar ou pechinchar.',
      'Existe um comércio comum entre eles, chamado gimwali, onde bater boca por preço é normal. Porém, tentar pechinchar no meio do Kula é visto como a pior ofensa e falta de educação possível.',
    ],
    quote: 'Ao criticar alguém que age de forma incorreta durante o Kula, os nativos dizem que essa pessoa "age como se o Kula fosse o gimwali" — a pior ofensa possível.',
    layout: 'analysis',
  },
  {
    id: 'gloria-antonia',
    title: 'a glória de dar',
    chapter: 'CAPÍTULO III',
    presenter: 'Apresentador 5: Antônia',
    content: [
      'Para eles, guardar riqueza no fundo do baú não traz respeito. Ser ganancioso é a maior vergonha para qualquer chefe.',
      'O prestígio de um líder é medido por quanta riqueza ele consegue distribuir. O orgulho está na capacidade de dar, e não na de acumular.',
    ],
    quote: 'Possuir é dar: quanto mais alta a posição social, maior a obrigação de generosidade.',
    layout: 'split-block',
  },
  {
    id: 'magia-antonia',
    title: 'viagem e compras',
    chapter: 'CAPÍTULO III',
    presenter: 'Apresentador 5: Antônia',
    content: [
      'Toda a travessia no mar depende de feitiços para garantir ventos bons e para tentar amolecer o coração dos parceiros e deixá-los generosos.',
      'Enquanto os líderes fazem a cerimônia do Kula, as canoas aproveitam a viagem para fazer um comércio comum. Elas levam alimentos e trazem potes de cerâmica e pedras vulcânicas que faltam em casa.',
    ],
    layout: 'split-block',
  },
  {
    id: 'pratica-antonia',
    title: 'rumo à prática',
    chapter: 'CAPÍTULO III',
    presenter: 'Apresentador 5: Antônia',
    content: [
      'Para enfrentar o mar, várias aldeias vizinhas se unem e formam uma verdadeira equipe de trabalho, a "comunidade kula".',
      'Depois de explicar todas essas regras, Malinowski encerra a parte teórica. A partir daqui, ele mostra a prática: os machados cortando as árvores, a construção das grandes canoas e a partida rumo à aventura no mar.',
    ],
    layout: 'analysis',
  }
];
