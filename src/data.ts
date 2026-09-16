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
  // APRESENTADOR 1: Airton (7 slides)
  // ==========================================
  {
    id: 'p1-1',
    title: 'a chegada',
    chapter: 'CAPÍTULO II',
    presenter: 'Apresentador 1: Airton',
    content: [
      'Malinowski relata sua viagem saindo das regiões escuras de Amphlett rumo ao norte. O destino são as <strong class="text-brand-orange">ilhas planas de coral</strong> de Trobriand.',
      'A viagem marca uma mudança radical na paisagem: os mares azuis e transparentes dão lugar a águas com um tom <strong class="text-brand-orange">verde opaco</strong>.',
      'A sensação do autor é de estar entrando em um mundo completamente isolado, com regras e costumes que destoam do resto da região.',
    ],
    layout: 'split-block',
  },
  {
    id: 'p1-2',
    title: 'a primeira visão',
    chapter: 'CAPÍTULO II',
    presenter: 'Apresentador 1: Airton',
    content: [
      'Ao entrar na aldeia principal, a visão que marca o etnógrafo é a mistura de cores <strong class="text-brand-orange">cinza e bronze</strong>, formadas pelos nativos em contraste com a terra.',
      'Sentado no meio deles, ele reflete que cada indivíduo ali poderia esconder rituais, inimizades e segredos de feitiçaria que a ciência ainda não conhecia.',
      'Para entender esse mundo, ele precisava esquecer a aparência exótica e focar em como aquelas pessoas se relacionavam no dia a dia.',
    ],
    quote: 'É difícil descrever o suspense e o interesse de um etnógrafo ao pisar pela primeira vez no campo de sua pesquisa.',
    layout: 'analysis',
  },
  {
    id: 'p1-3',
    title: 'diversidade física',
    chapter: 'CAPÍTULO II',
    presenter: 'Apresentador 1: Airton',
    content: [
      'Chama a atenção a enorme diferença física entre as pessoas da mesma aldeia.',
      'De um lado, há nativos altos, de pele mais clara e traços delicados, que <strong class="text-brand-orange">geralmente ocupam as posições sociais mais altas</strong>.',
      'Do outro, há pessoas com traços mais fortes e rústicos. Os mais nobres andam muito enfeitados, exibindo orgulhosamente seus brincos de tartaruga e flores cheirosas pelo corpo.',
    ],
    imagePlaceholder: 'Três homens nativos de classes altas ("aristocratas" de Kiriwina), vestindo seus enfeites tradicionais',
    layout: 'split-image',
  },
  {
    id: 'p1-4',
    title: 'etiqueta social',
    chapter: 'CAPÍTULO II',
    presenter: 'Apresentador 1: Airton',
    content: [
      'A divisão de classes sociais é muito rígida e visível na postura do corpo. Os chefes são tratados com um <strong class="text-brand-orange">temor quase sagrado</strong>.',
      'Existe uma regra estrita: a cabeça de um homem comum nunca pode ficar mais alta que a do chefe.',
      'Se o chefe estiver em pé, os outros podem caminhar. Mas se o chefe resolver se sentar no chão, <strong class="text-brand-orange">ninguém mais pode ficar de pé</strong> na aldeia inteira.',
    ],
    layout: 'split-block',
  },
  {
    id: 'p1-5',
    title: 'as mulheres',
    chapter: 'CAPÍTULO II',
    presenter: 'Apresentador 1: Airton',
    content: [
      'Ao contrário das ilhas vizinhas, onde as mulheres costumavam fugir ou se esconder dos visitantes, as mulheres de Boyowa são <strong class="text-brand-orange">confiantes, amigáveis e muito presentes</strong>.',
      'Elas usam um traje único na região: em vez das longas saias que cobrem até a canela, elas vestem saias curtas de fibra vegetal, cheias de camadas franzidas e tingidas em três cores diferentes.',
    ],
    layout: 'analysis',
  },
  {
    id: 'p1-6',
    title: 'o casamento',
    chapter: 'CAPÍTULO II',
    presenter: 'Apresentador 1: Airton',
    content: [
      'Antes de casar, os jovens têm total liberdade para viver diversas relações amorosas sem julgamento da comunidade.',
      'Quando decidem casar, <strong class="text-brand-orange">não existe uma grande cerimônia religiosa ou civil</strong>. A mulher apenas muda suas coisas para a cabana do homem.',
      'Muitos europeus achavam que eles "compravam" a esposa, mas Malinowski explica que é o contrário: a família da noiva é que ajuda a sustentar o casal dali em diante.',
    ],
    layout: 'split-block',
  },
  {
    id: 'p1-7',
    title: 'matrilinearidade',
    chapter: 'CAPÍTULO II',
    presenter: 'Apresentador 1: Airton',
    content: [
      'Toda a organização da sociedade segue a <strong class="text-brand-orange">linha materna</strong>. O sobrenome, a posição social e a aldeia a qual a pessoa pertence vêm exclusivamente da mãe.',
      'Na hora de herdar terras ou poderes mágicos, a passagem nunca é de pai para filho. O poder passa sempre do <strong class="text-brand-orange">tio (irmão da mãe) para o sobrinho</strong>.',
      'O homem trabalha para sustentar a família da irmã, não apenas a própria esposa.',
    ],
    layout: 'analysis',
  },

  // ==========================================
  // APRESENTADOR 2: José (7 slides)
  // ==========================================
  {
    id: 'p2-1',
    title: 'a aldeia circular',
    chapter: 'CAPÍTULO II',
    presenter: 'Apresentador 2: José',
    content: [
      'A construção das aldeias segue um planejamento quase geométrico. Elas formam dois círculos, tendo no centro uma grande praça de terra batida chamada <strong class="text-brand-orange">baku</strong>.',
      'O círculo interno é formado pelos celeiros de inhame dos chefes, que são as construções mais altas e enfeitadas.',
      'Somente no círculo externo, atrás dos celeiros, é que ficam as pequenas cabanas onde as famílias realmente dormem.',
    ],
    layout: 'split-block',
  },
  {
    id: 'p2-2',
    title: 'o mito da preguiça',
    chapter: 'CAPÍTULO II',
    presenter: 'Apresentador 2: José',
    content: [
      'Muitos estudiosos da época defendiam a ideia do "Homem Econômico Primitivo": a crença de que o selvagem era preguiçoso e trabalhava apenas o mínimo para não morrer de fome.',
      'Malinowski destrói esse mito. Ele observa que os nativos passam meses limpando o mato e produzindo <strong class="text-brand-orange">o dobro de comida</strong> que a aldeia precisa.',
      'Eles fazem jardins perfeitos e organizados apenas por vaidade e amor ao trabalho bem-feito.',
    ],
    layout: 'analysis',
  },
  {
    id: 'p2-3',
    title: 'magia e trabalho',
    chapter: 'CAPÍTULO II',
    presenter: 'Apresentador 2: José',
    content: [
      'A grande força que motiva o trabalho pesado na terra não é a sobrevivência, mas o <strong class="text-brand-orange">prestígio social e a magia</strong>.',
      'O mago da roça é uma das figuras mais respeitadas. Ele dita os ritos de quando plantar e colher.',
      'Em anos muito bons, o chefe convoca o <strong class="text-brand-orange">Kayasa</strong>, uma grande competição pública para ver qual agricultor exibe a colheita mais bonita e abundante.',
    ],
    quote: 'O bom lavrador trabalha por prestígio e competição social, não apenas por necessidade de sobrevivência.',
    layout: 'split-block',
  },
  {
    id: 'p2-4',
    title: 'a força do chefe',
    chapter: 'CAPÍTULO II',
    presenter: 'Apresentador 2: José',
    content: [
      'O grande chefe de Omarakana, To\'uluwa, manda não só na aldeia, mas em todo o clã mais alto da região.',
      'Sua imensa riqueza vem da <strong class="text-brand-orange">poligamia</strong>. Como ele tem muitas esposas, as famílias delas são obrigadas por lei a dar-lhe parte da colheita todos os anos.',
      'Os celeiros do chefe transbordam de inhame. É usando essa comida que ele contrata guerreiros, paga feiticeiros e financia a construção de grandes canoas.',
    ],
    layout: 'split-block',
  },
  {
    id: 'p2-5',
    title: 'punição mística',
    chapter: 'CAPÍTULO II',
    presenter: 'Apresentador 2: José',
    content: [
      'O chefe não usa uma tropa armada para prender quem o desobedece; ele usa a <strong class="text-brand-orange">feitiçaria</strong>.',
      'Quando ele se sente ofendido, dá a ordem para que os feiticeiros (que estão sempre ao seu dispor) lancem feitiços de doença na pessoa.',
      'Os nativos têm um medo tão profundo da magia negra que, só de saberem que foram amaldiçoados, <strong class="text-brand-orange">começam a definhar e adoecem de puro pânico</strong>.',
    ],
    layout: 'analysis',
  },
  {
    id: 'p2-6',
    title: 'pais e tios',
    chapter: 'CAPÍTULO II',
    presenter: 'Apresentador 2: José',
    content: [
      'Dentro das famílias, há uma separação muito curiosa entre a lei e o afeto.',
      'O <strong class="text-brand-orange">tio materno</strong> é o guardião legal da criança. Ele dá a herança, mas a relação é cheia de regras duras. Ele sequer pode olhar ou conversar diretamente com a própria irmã.',
      'O <strong class="text-brand-orange">pai biológico</strong>, por outro lado, não tem autoridade legal, mas é o melhor amigo da criança. É ele quem abraça, cuida na doença e ensina brincadeiras.',
    ],
    layout: 'split-block',
  },
  {
    id: 'p2-7',
    title: 'bruxas e espíritos',
    chapter: 'CAPÍTULO II',
    presenter: 'Apresentador 2: José',
    content: [
      'Para esses nativos, a morte nunca é um acidente biológico ou culpa da velhice. Toda morte é vista como resultado de <strong class="text-brand-orange">um feitiço direto de um inimigo</strong>.',
      'Eles não têm medo de fantasmas, pois acreditam que os espíritos vivem felizes em outra ilha e não fazem mal aos vivos.',
      'O pavor absoluto da comunidade são as <strong class="text-brand-orange">mulukwausi</strong>, bruxas que voam à noite e causam mortes violentas e rápidas.',
    ],
    layout: 'analysis',
  },

  // ==========================================
  // APRESENTADOR 3: André (7 slides)
  // ==========================================
  {
    id: 'p3-1',
    title: 'o que é o kula',
    chapter: 'CAPÍTULO III',
    presenter: 'Apresentador 3: André',
    content: [
      'O Kula é uma rede gigantesca de trocas cerimoniais que conecta dezenas de ilhas distantes, formando um <strong class="text-brand-orange">circuito fechado no mar</strong>.',
      'No meio dessa teia, viajam não apenas pessoas, mas objetos preciosos, costumes, alianças de proteção e muito prestígio.',
      'As canoas viajam centenas de quilômetros apenas para manter essa roda de trocas girando.',
    ],
    layout: 'split-block',
  },
  {
    id: 'p3-2',
    title: 'os dois objetos',
    chapter: 'CAPÍTULO III',
    presenter: 'Apresentador 3: André',
    content: [
      'Essa complexa rede é sustentada pela viagem ininterrupta de apenas <strong class="text-brand-orange">dois enfeites sem utilidade prática</strong>.',
      'Os colares vermelhos de concha, chamados de <strong class="text-brand-orange">soulava</strong>, viajam sempre para o lado direito do círculo (sentido horário).',
      'Os braceletes brancos, chamados de <strong class="text-brand-orange">mwali</strong>, viajam sempre para o lado esquerdo (sentido anti-horário).',
    ],
    layout: 'analysis',
  },
  {
    id: 'p3-3',
    title: 'parcerias eternas',
    chapter: 'CAPÍTULO III',
    presenter: 'Apresentador 3: André',
    content: [
      'A pessoa não pode trocar as joias com qualquer morador de outra ilha. Eles formam <strong class="text-brand-orange">parcerias fixas que duram a vida toda</strong>.',
      'A regra mais forte do sistema é que uma joia deve ser recebida, guardada por um tempo muito curto, e logo depois entregue ao próximo parceiro da rede.',
      'É por isso que nenhum colar valioso fica parado na casa de um chefe para sempre.',
    ],
    quote: 'Uma vez no Kula, sempre no Kula.',
    layout: 'split-block',
  },
  {
    id: 'p3-4',
    title: 'sem leis escritas',
    chapter: 'CAPÍTULO III',
    presenter: 'Apresentador 3: André',
    content: [
      'O mais impressionante é que essa enorme instituição funciona sem nenhuma liderança central, nenhum papel escrito e nenhuma lei falada.',
      'Nenhum nativo tem a visão inteira do círculo. Cada um se preocupa apenas com os parceiros que estão logo ao lado dele.',
      'Eles conhecem os detalhes brilhantes da sua própria viagem, mas <strong class="text-brand-orange">não sabem o mapa completo</strong> da tradição que seguem.',
    ],
    layout: 'analysis',
  },
  {
    id: 'p3-5',
    title: 'o pesquisador',
    chapter: 'CAPÍTULO III',
    presenter: 'Apresentador 3: André',
    content: [
      'Como os nativos enxergam apenas as partes quebradas do circuito, coube ao antropólogo investigar ilha por ilha para desenhar a regra geral.',
      'Malinowski <strong class="text-brand-orange">compara seu próprio trabalho ao de um físico</strong>: ele não vê a lei da gravidade, apenas pequenos dados em um laboratório.',
      'Juntando todos os dados separados sobre viagens, feitiços e trocas, ele conseguiu descrever, pela primeira vez, o sistema inteiro.',
    ],
    layout: 'split-block',
  },
  {
    id: 'p3-6',
    title: 'contra o óbvio',
    chapter: 'CAPÍTULO III',
    presenter: 'Apresentador 3: André',
    content: [
      'A descoberta do Kula quebrou a visão de muitos pesquisadores europeus da época.',
      'Eles achavam que as sociedades primitivas só faziam escambo (trocas) por puro desespero de sobrevivência, de forma caótica e bagunçada.',
      'O Kula provou que eles possuíam <strong class="text-brand-orange">regras rigorosas, agendas anuais precisas</strong> e obrigações comerciais que exigiam extrema confiança.',
    ],
    layout: 'analysis',
  },
  {
    id: 'p3-7',
    title: 'a base real',
    chapter: 'CAPÍTULO III',
    presenter: 'Apresentador 3: André',
    content: [
      'Em resumo, os nativos enfrentam tormentas no mar aberto e meses de trabalho duro não por necessidades biológicas.',
      'Tudo isso é alicerçado por <strong class="text-brand-orange">mitologia, respeito aos deuses do mar e honra cívica</strong>.',
      'A base que faz girar esse motor econômico é apenas a simples, mas poderosa, ambição de possuir um enfeite histórico por algumas semanas.',
    ],
    layout: 'split-block',
  },

  // ==========================================
  // APRESENTADOR 4: Alice (7 slides)
  // ==========================================
  {
    id: 'p4-1',
    title: 'a fabricação',
    chapter: 'CAPÍTULO III',
    presenter: 'Apresentador 4: Alice',
    content: [
      'Os famosos braceletes <strong class="text-brand-orange">mwali</strong> exigem muito esforço para serem fabricados. Eles quebram a parte superior de uma concha marinha em forma de cone e polem exaustivamente o anel que sobra.',
      'Já os colares <strong class="text-brand-orange">soulava</strong> são feitos juntando milhares de pequenos discos de uma concha vermelha específica.',
      'Para as trocas do Kula, alguns desses colares vermelhos chegam a medir de <strong class="text-brand-orange">dois a cinco metros</strong> de comprimento, decorados com enormes pingentes e sementes nas pontas.',
    ],
    layout: 'split-block',
  },
  {
    id: 'p4-2',
    title: 'uso exclusivo',
    chapter: 'CAPÍTULO III',
    presenter: 'Apresentador 4: Alice',
    content: [
      'O valor não vem da utilidade prática, pois <strong class="text-brand-orange">ninguém usa essas joias no dia a dia</strong>.',
      'A maioria dos braceletes é pequena demais para entrar até mesmo no braço de uma criança, servindo apenas para ficar amarrada em cordões.',
      'Os colares são tão pesados que só são tirados do baú para serem exibidos em festas que acontecem em intervalos de anos. Mesmo quando são usados, geralmente não pertencem a quem está vestindo, sendo apenas um empréstimo temporário.',
    ],
    layout: 'analysis',
  },
  {
    id: 'p4-3',
    title: 'joias da coroa',
    chapter: 'CAPÍTULO III',
    presenter: 'Apresentador 4: Alice',
    content: [
      'Malinowski compara a fixação dos nativos por essas conchas com o respeito dos britânicos pelas <strong class="text-brand-orange">Joias da Coroa da Escócia</strong>.',
      'Ambos são objetos inúteis na prática, mas que ganham um valor incalculável pelas vitórias e pelos grandes reis que já os usaram.',
      'As conchas mais renomadas do Kula não são coisas, são quase entidades: elas <strong class="text-brand-orange">têm nome próprio, histórias famosas</strong> e uma aura de respeito.',
    ],
    layout: 'split-block',
  },
  {
    id: 'p4-4',
    title: 'o número de parceiros',
    chapter: 'CAPÍTULO III',
    presenter: 'Apresentador 4: Alice',
    content: [
      'A importância de um homem na aldeia é facilmente medida pelo número de parceiros no exterior.',
      'Um nativo comum, de baixo escalão, tem apenas uns dois ou três parceiros nas ilhas vizinhas.',
      'Grandes líderes, como o chefe de Omarakana, <strong class="text-brand-orange">registram centenas de aliados</strong>. Esse status garante que ele terá suporte, favores políticos e segurança por onde passar.',
    ],
    layout: 'analysis',
  },
  {
    id: 'p4-5',
    title: 'proteção no mar',
    chapter: 'CAPÍTULO III',
    presenter: 'Apresentador 4: Alice',
    content: [
      'O Kula funciona como um <strong class="text-brand-orange">escudo diplomático</strong>. Quando a frota ancora em uma ilha distante de língua estranha, o medo de ataques e feitiçarias locais é imenso.',
      'Seu parceiro de Kula é quem o recebe. Ele funciona como um padrinho: garante teto seguro, alimento reforçado e avisa os líderes locais de que aquele visitante está sob sua proteção pessoal.',
    ],
    layout: 'split-block',
  },
  {
    id: 'p4-6',
    title: 'encontro de culturas',
    chapter: 'CAPÍTULO III',
    presenter: 'Apresentador 4: Alice',
    content: [
      'Em dias de grande movimentação, uma única praia como a de Sinaketa pode receber o encontro de até <strong class="text-brand-orange">oitenta grandes canoas</strong>.',
      'Isso promove uma união de culturas que, sem o Kula, provavelmente viveriam em guerra.',
      'Além das conchas, eles repassam novas letras de músicas, técnicas de entalhe em madeira e modas que se espalham pelo arquipélago.',
    ],
    layout: 'analysis',
  },
  {
    id: 'p4-7',
    title: 'o fluxo perfeito',
    chapter: 'CAPÍTULO III',
    presenter: 'Apresentador 4: Alice',
    content: [
      'A rede é tão matemática que as direções de troca nunca se quebram. Se uma comunidade está no Norte, ela sabe exatamente de qual direção virão as peças.',
      'Uma joia famosa demora cerca de <strong class="text-brand-orange">dez anos para dar a volta inteira</strong> e cair novamente nas mãos de um nativo, marcando assim as gerações da comunidade.',
    ],
    quote: 'De frente para o centro do círculo, o nativo sempre recebe braceletes com a mão esquerda e colares com a direita.',
    layout: 'split-block',
  },

  // ==========================================
  // APRESENTADOR 5: Antônia (7 slides)
  // ==========================================
  {
    id: 'p5-1',
    title: 'o ciclo de troca',
    chapter: 'CAPÍTULO III',
    presenter: 'Apresentador 5: Antônia',
    content: [
      'A grande regra do Kula é baseada na honra de quitar uma dívida material.',
      'Você recebe um colar gigantesco de presente de abertura, chamado <strong class="text-brand-orange">vaga</strong>. Depois de um bom tempo, você precisa viajar e entregar o presente de fechamento, chamado <strong class="text-brand-orange">yotile</strong>.',
      'Se na hora da viagem você não tiver nenhum bracelete forte o suficiente, você entrega uma joia menor, um <strong class="text-brand-orange">basi</strong>, que é um pedido formal de paciência.',
    ],
    layout: 'split-block',
  },
  {
    id: 'p5-2',
    title: 'kula não é gimwali',
    chapter: 'CAPÍTULO III',
    presenter: 'Apresentador 5: Antônia',
    content: [
      'Para eles, o momento de entregar as joias cerimoniais é um rito quase sagrado. <strong class="text-brand-orange">É proibido discutir valor, reclamar e, principalmente, pechinchar.</strong>',
      'Eles praticam a pechincha no dia a dia, mas chamam isso de comércio sujo ou <strong class="text-brand-orange">gimwali</strong>.',
      'Agir como um vendedor apressado querendo tirar vantagem com as joias é a maior vergonha diplomática imaginável.',
    ],
    quote: 'Ao criticar alguém que age de forma incorreta durante o Kula, os nativos dizem que essa pessoa "age como se o Kula fosse o gimwali" — a pior ofensa possível.',
    layout: 'analysis',
  },
  {
    id: 'p5-3',
    title: 'a glória de dar',
    chapter: 'CAPÍTULO III',
    presenter: 'Apresentador 5: Antônia',
    content: [
      'Quem recebe a joia não tem o direito de reclamar se achar que o parceiro o enganou. Tudo é baseado na confiança no prestígio do doador.',
      'Para um chefe, segurar as coisas no fundo do baú não gera respeito, gera a pecha nojenta de <strong class="text-brand-orange">avareza</strong>.',
      'A honra está inteiramente atrelada ao espetáculo de abrir a mão e doar. A riqueza só existe no momento da passagem.',
    ],
    quote: 'Possuir é dar: quanto mais alta a posição social, maior a obrigação de generosidade.',
    layout: 'split-block',
  },
  {
    id: 'p5-4',
    title: 'seduzindo as joias',
    chapter: 'CAPÍTULO III',
    presenter: 'Apresentador 5: Antônia',
    content: [
      'Quando o boato se espalha de que um colar de fama histórica, como uma verdadeira relíquia, chegou na aldeia de um aliado, a corrida começa.',
      'Parceiros mandam presentes antecipados, como pilhas de bananas maravilhosas ou enormes machados de pedra afiada (<strong class="text-brand-orange">kaributu</strong>), para "seduzir" a vontade do líder e garantir que o colar famoso vá para suas mãos na próxima viagem.',
    ],
    layout: 'analysis',
  },
  {
    id: 'p5-5',
    title: 'construção naval',
    chapter: 'CAPÍTULO III',
    presenter: 'Apresentador 5: Antônia',
    content: [
      'Todo esse protocolo diplomático estimula o trabalho civil. Antes das expedições, as ilhas se transformam em canteiros de obras frenéticos.',
      'Lenhadores precisam abater troncos maciços no interior da floresta, enquanto carpinteiros especializados usam o fogo e a pedra para construir verdadeiros navios de alto mar capazes de cruzar as tormentas do Pacífico.',
    ],
    layout: 'split-block',
  },
  {
    id: 'p5-6',
    title: 'a magia do mar',
    chapter: 'CAPÍTULO III',
    presenter: 'Apresentador 5: Antônia',
    content: [
      'Ninguém pisa em uma canoa sem que grandes rituais de <strong class="text-brand-orange">mwasila</strong> tenham sido entoados.',
      'Acreditam que as rezas mágicas não só fecham o mar contra os monstros e bruxas, como também voam até a ilha de destino para <strong class="text-brand-orange">"amolecer a mente"</strong> do parceiro.',
      'Eles têm certeza de que se o parceiro foi generoso e doou grandes conchas, não foi por boa vontade, mas porque a magia deles funcionou perfeitamente.',
    ],
    layout: 'analysis',
  },
  {
    id: 'p5-7',
    title: 'comércio secundário',
    chapter: 'CAPÍTULO III',
    presenter: 'Apresentador 5: Antônia',
    content: [
      'Embora o foco seja o Kula, o povo de Boyowa aproveita o esforço das viagens para um objetivo muito claro de economia.',
      'Como a ilha deles só tem coral, <strong class="text-brand-orange">falta argila para cozinhar e pedras para ferramentas</strong>. Eles levam a sobra de inhame e lotam os fundos das canoas com potes de barro e ferramentas compradas das outras ilhas.',
      'É essa união de crenças, festas e troca de presentes que forma o que o livro batiza de <strong class="text-brand-orange">Comunidade Kula</strong>.',
    ],
    layout: 'split-block',
  }
];

