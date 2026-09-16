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
    presenter: 'Apresentadores',
  },
  
  // ==========================================
  // APRESENTADOR 1
  // ==========================================
  {
    id: 'chegada',
    title: 'a chegada',
    chapter: 'CAPÍTULO II',
    section: '1. Os Nativos das Ilhas Trobriand',
    presenter: 'Apresentador 1: Airton',
    content: [
      'Malinowski deixa para trás regiões de pedras para chegar às ilhas planas de coral, um território com características distintas da Melanésia.',
      'A viagem cruza mares azuis e transparentes, onde se observa o leito de coral, até alcançar águas verdes e opacas na aproximação.',
      'A entrada na aldeia revela um cenário nas cores cinza e bronze, marcado pela presença dos nativos e dos celeiros de inhame.',
      'O etnógrafo relata que cada nativo observado detém potenciais pistas sobre feitiçaria e costumes locais.',
    ],
    layout: 'split-block',
  },
  {
    id: 'citacao-etnografo',
    title: 'o etnógrafo',
    chapter: 'CAPÍTULO II',
    presenter: 'Apresentador 1: Airton',
    quote: 'É difícil descrever o suspense e o interesse de um etnógrafo ao pisar pela primeira vez no campo de sua pesquisa.',
    content: [],
    layout: 'impact-quote',
  },
  {
    id: 'diversidade-fisica',
    title: 'diversidade',
    chapter: 'CAPÍTULO II',
    section: '1. Diversidade e Costumes',
    presenter: 'Apresentador 1: Airton',
    content: [
      'Observa-se variedade nos tipos físicos: indivíduos de traços finos e perfil aquilino, ao lado de outros de traços rústicos e rosto prognato.',
      'O primeiro grupo apresenta pele mais clara e utiliza artefatos de adorno como braceletes, brincos de casco de tartaruga e discos de Spondylus.',
      'A conduta da população é livre e espontânea. Na chegada de visitantes desconhecidos, reúnem-se com curiosidade e demonstram familiaridade imediata.',
    ],
    layout: 'split-image',
    imagePlaceholder: 'Três homens nativos de classes altas ("aristocratas" de Kiriwina), vestindo seus enfeites tradicionais',
  },
  {
    id: 'classes-sociais',
    title: 'classes sociais',
    chapter: 'CAPÍTULO II',
    section: '1. Estrutura Social',
    presenter: 'Apresentador 1: Airton',
    content: [
      'A divisão social é demarcada: os nativos que ostentam melhor aparência, em grande parte os próprios chefes, recebem tratamento de reverência.',
      'Existem regras espaciais e corporais rigorosas. Na presença do chefe, a nenhum homem comum é permitido posicionar-se em altura superior à dele.',
      'Caso o líder sente-se, impõe-se aos presentes curvar-se ou agachar. Essa instituição assemelha-se a rituais de realeza, destoando do padrão de outras tribos da região.',
    ],
    layout: 'analysis',
  },
  {
    id: 'mulheres',
    title: 'as mulheres',
    chapter: 'CAPÍTULO II',
    section: '1. Posição Social e Trajes',
    presenter: 'Apresentador 1: Airton',
    content: [
      'Diferente de outras ilhas onde as nativas adotavam comportamento retraído, as mulheres em Boyowa apresentam conduta amigável e acessível.',
      'A vestimenta evidencia essa distinção: enquanto em outras áreas usam-se saias longas de fibra, as mulheres de Trobriand utilizam saias curtas, de múltiplas camadas franzidas e adornadas em três cores.',
    ],
    layout: 'split-block',
  },
  {
    id: 'casamento',
    title: 'casamento',
    chapter: 'CAPÍTULO II',
    section: '2. Matrilinearidade',
    presenter: 'Apresentador 1: Airton',
    content: [
      'Os jovens experienciam autonomia nas relações amorosas até a consolidação de vínculos permanentes.',
      'A união matrimonial ocorre sem cerimônias formais: a mulher passa a residir na casa do homem, sucedendo-se a troca de presentes entre os grupos familiares.',
      'O ato descarta o conceito de "compra da esposa", visto que cabe à família materna dela o provimento econômico da nova residência.',
      'O sistema obedece à matrilinearidade: a criança e sua herança material e social pertencem ao grupo do tio materno, inexistindo transmissão patrilinear.',
    ],
    layout: 'analysis',
  },
  {
    id: 'aldeia-baku',
    title: 'a aldeia circular',
    chapter: 'CAPÍTULO II',
    section: '3. Disposição Física',
    presenter: 'Apresentador 1: Airton',
    content: [
      'A planta das aldeias configura-se em círculos concêntricos. O núcleo do terreno é composto por uma clareira designada como baku.',
      'Limitando o baku encontram-se os celeiros de inhame ornamentados, pertencentes aos chefes. A faixa perimetral abriga as cabanas residenciais.',
      'O baku atua como palco para danças, funerais e as cerimônias de colheita milamala, período em que os espíritos dos antepassados de Tuma retornam às aldeias.',
    ],
    layout: 'split-image',
    imagePlaceholder: 'Aldeia circular com celeiros de inhame ao redor do baku',
  },
  {
    id: 'mito-preguicoso',
    title: 'o mito refutado',
    chapter: 'CAPÍTULO II',
    section: '4. A Roça e a Teoria Econômica',
    presenter: 'Apresentador 1: Airton',
    content: [
      'Malinowski dedica-se a refutar a teoria ocidental do "Homem Econômico Primitivo", baseada na premissa de que o indivíduo autóctone trabalhava apenas o limite estrito de sua necessidade de sobrevivência.',
      'A observação em Trobriand prova o contrário: a produção alcança o dobro do exigido para o consumo alimentar. Há aplicação de energia em organização puramente estética das roças.',
      'As atividades agrícolas são balizadas pela magia e por cerimônias tradicionais.',
      'O chefe, em períodos de fartura agrícola, proclama o Kayasa: um evento competitivo focado na exibição cerimonial de alimentos.',
    ],
    layout: 'analysis',
  },
  {
    id: 'citacao-lavrador',
    title: 'prestígio',
    chapter: 'CAPÍTULO II',
    presenter: 'Apresentador 1: Airton',
    quote: 'O bom lavrador trabalha por prestígio e competição social, não apenas por necessidade de sobrevivência.',
    content: [],
    layout: 'impact-quote',
  },

  // ==========================================
  // APRESENTADOR 2
  // ==========================================
  {
    id: 'chefia-e-clas',
    title: 'instituição da chefia',
    chapter: 'CAPÍTULO II',
    section: '5. Duas Instituições',
    presenter: 'Apresentador 2: José',
    content: [
      'Em Trobriand, o chefe sobrepõe liderança cívica e posicional, coordenando a aldeia e os clãs totêmicos.',
      'Em situações regulares, o líder comunitário age como mestre de cerimônias. Contudo, pertencer a um subclã de elevada posição outorga-lhe prerrogativas absolutas de nobreza.',
      'A sociedade divide-se em quatro clãs fundamentais, compartimentados em subclãs que estipulam as gradações de status.',
    ],
    layout: 'split-block',
  },
  {
    id: 'grande-chefe',
    title: 'to\'uluwa',
    chapter: 'CAPÍTULO II',
    section: '5. O Grande Chefe',
    presenter: 'Apresentador 2: José',
    content: [
      'To\'uluwa é o chefe da aldeia de Omarakana e pertence ao subclã Tabalu, o de maior hierarquia. É tratado com temor reverente generalizado.',
      'O acúmulo de recursos advém da poliginia. As famílias de cada esposa assumem o dever tributário de repassar-lhe volumes agrícolas.',
      'Esses bens suprem o custeio de cerimônias públicas, o pagamento de prestadores de serviço e o suporte material às expedições intertribais.',
    ],
    layout: 'analysis',
  },
  {
    id: 'citacao-riqueza',
    title: 'o poder',
    chapter: 'CAPÍTULO II',
    presenter: 'Apresentador 2: José',
    quote: 'A riqueza constitui o sinal visível e a substância do poder nas ilhas Trobriand.',
    content: [],
    layout: 'impact-quote',
  },
  {
    id: 'punicao',
    title: 'punição',
    chapter: 'CAPÍTULO II',
    section: '5. A Feitiçaria como Controle',
    presenter: 'Apresentador 2: José',
    content: [
      'O poder coercitivo do chefe opera através de intermediários. O castigo recai via magia negra sob responsabilidade de feiticeiros locais subordinados.',
      'O proferimento da ordem contra um ofensor é público. A ciência da perseguição mística estabelece o definhamento psicológico da vítima por meio do medo.',
    ],
    layout: 'split-block',
  },
  {
    id: 'divisoes',
    title: 'distritos',
    chapter: 'CAPÍTULO II',
    section: '6. Divisões Políticas',
    presenter: 'Apresentador 2: José',
    content: [
      'O arquipélago abriga regiões com matrizes sociopolíticas específicas:',
      'Kiriwina destaca-se pelo poder agrícola central. Tilataula congrega habitantes voltados à guerra, com histórico de disputas pela hegemonia.',
      'Kuboma reúne corporações de artesãos e feiticeiros — indivíduos evitados devido ao consumo de alimentos designados como tabu.',
      'A zona sul divide-se entre comunidades litorâneas e aldeias como Sinaketa e Vakuta, centros detentores da confecção de discos de Spondylus.',
    ],
    layout: 'analysis',
  },
  {
    id: 'hierarquia-clas',
    title: 'os clãs',
    chapter: 'CAPÍTULO II',
    section: '6. Estrutura Totêmica',
    presenter: 'Apresentador 2: José',
    content: [
      'O pertencimento ao clã define a exogamia: membros do mesmo totem não podem constituir matrimônio.',
      'A segregação social impõe-se na unidade do subclã. O compartilhamento do mesmo animal totêmico entre um chefe de linhagem aristocrática e um artesão evitado não suprime o rigor hierárquico.',
      'A aceitação deste distanciamento interno é uma exclusividade sociológica trobriandesa.',
    ],
    layout: 'split-block',
  },
  {
    id: 'tio-e-pai',
    title: 'parentesco',
    chapter: 'CAPÍTULO II',
    section: '6. Papéis Materno e Paterno',
    presenter: 'Apresentador 2: José',
    content: [
      'O tio materno figura como o detentor do poder legal. A ele compete a sucessão, contudo o relacionamento rege-se por tabus sociais, impedindo diálogos diretos com as sobrinhas.',
      'O pai biológico, pela dogmática local, não representa vínculo formal de parentesco. Porém, a dinâmica familiar confere-lhe o papel de protetor afetivo presente na rotina e nas enfermidades.',
      'O arcabouço social divide o dever formal (tio materno) e a adesão afetiva (pai).',
    ],
    layout: 'analysis',
  },
  {
    id: 'espiritos-feiticaria',
    title: 'bruxas e temores',
    chapter: 'CAPÍTULO II',
    section: '7. O Sobrenatural',
    presenter: 'Apresentador 2: José',
    content: [
      'A crença postula que os mortos migram para a ilha de Tuma, de onde retornam sem fins predatórios nas festividades anuais. Não se documenta temor perante o pós-morte.',
      'O vetor do medo é a feitiçaria. O feiticeiro bwaga\'u atua como causador das morbidades.',
      'As mulukwausi, entidades voadoras, são responsabilizadas por fatalidades imediatas. Todo óbito, excetuando combate e suicídio, é categorizado como desfecho de feitiçaria.',
    ],
    layout: 'split-block',
  },
  {
    id: 'preludio-kula',
    title: 'além-mar',
    chapter: 'CAPÍTULO II',
    section: '8. Transição',
    presenter: 'Apresentador 2: José',
    content: [
      'A descrição detalhada de Boyowa estipula a base comparativa necessária para os capítulos seguintes.',
      'As ilhas adjacentes — Kitava, Iwa, Gawa, Murua — partilham substratos linguísticos e organizacionais semelhantes, ainda que produzam artefatos distintos.',
      'Compreendida essa disposição socio-política, estabelece-se o terreno propício à análise do circuito comercial interligante: o Kula.',
    ],
    layout: 'analysis',
  },

  // ==========================================
  // APRESENTADOR 3
  // ==========================================
  {
    id: 'o-que-e-kula',
    title: 'o kula',
    chapter: 'CAPÍTULO III',
    section: '1. O Circuito Fechado',
    presenter: 'Apresentador 3: André',
    content: [
      'A instituição do Kula constitui uma modalidade de escambo de caráter intertribal, restrita a um circuito insular fechado.',
      'A operação alicerça-se no transporte contínuo de apenas duas categorias de itens em fluxos inversos.',
      'Os colares vermelhos de Spondylus (soulava) transitam pelo sentido horário. Os braceletes brancos de concha (mwali) deslocam-se no sentido anti-horário.',
      'A mecânica obriga a recepção, a posse por tempo limitado e a transmissão compulsória do artefato para a comunidade seguinte.',
    ],
    layout: 'split-block',
  },
  {
    id: 'citacao-kula',
    title: 'a regra de retenção',
    chapter: 'CAPÍTULO III',
    presenter: 'Apresentador 3: André',
    quote: 'Uma vez no Kula, sempre no Kula.',
    content: [],
    layout: 'impact-quote',
  },
  {
    id: 'parceiros',
    title: 'movimento perpétuo',
    chapter: 'CAPÍTULO III',
    section: '2. Vínculos Institucionais',
    presenter: 'Apresentador 3: André',
    content: [
      'O tratado transacional é vitalício. Indivíduos formam parceiros fixos que os acompanharão permanentemente.',
      'Visto que os colares e braceletes mantêm transitoriedade e as alianças não expiram, há um engajamento sociopolítico ininterrupto.',
      'Sincronizado a este rito cerimonial, viabilizam-se as permutas objetivas envolvendo mantimentos e ferramentas.',
    ],
    layout: 'analysis',
  },
  {
    id: 'sem-regras-escritas',
    title: 'instituição orgânica',
    chapter: 'CAPÍTULO III',
    section: '3. A Ausência de Leis Escritas',
    presenter: 'Apresentador 3: André',
    content: [
      'O mecanismo unifica agrupamentos tribais ao longo de extensões náuticas por um conjunto de regras não escritas.',
      'O nativo inserido atua sob pragmatismo prático, sem possuir dimensão sociológica total do fenômeno. Ele domina unicamente a transação direta na qual se envolve.',
    ],
    layout: 'split-block',
  },
  {
    id: 'papel-etnografo',
    title: 'o etnógrafo',
    chapter: 'CAPÍTULO III',
    section: '4. Formulação Científica',
    presenter: 'Apresentador 3: André',
    content: [
      'Diante do olhar fragmentado das comunidades autóctones, cabe à etnografia aglomerar e sistematizar as regularidades.',
      'Malinowski estabelece a analogia entre o etnógrafo e o físico: o cientista organiza dados pontuais oriundos de experimentos limitados para estruturar a teoria geral do circuito.',
    ],
    layout: 'analysis',
  },
  {
    id: 'comercio-primitivo',
    title: 'falsa premissa',
    chapter: 'CAPÍTULO III',
    section: '5. Contestando o Modelo Primitivo',
    presenter: 'Apresentador 3: André',
    content: [
      'Postulava-se historicamente que o intercâmbio de povos originais reduzia-se a trocas utilitárias de mantimentos, impulsionadas por necessidades biológicas e sem rituais.',
      'A realidade do Kula desfaz o paradigma: trata-se de um sistema estruturado, com agendas predefinidas, rotas demarcadas e obrigações regradas entre as partes.',
    ],
    layout: 'split-image',
    imagePlaceholder: 'Canoas se encontrando no mar',
  },
  {
    id: 'tradicao-e-magia',
    title: 'alicerces institucionais',
    chapter: 'CAPÍTULO III',
    section: '6. Base Sistêmica',
    presenter: 'Apresentador 3: André',
    content: [
      'A utilidade utilitária ou o suprimento básico não justificam o esforço material e o risco das expedições oceânicas.',
      'Tais eventos apoiam-se em mitos locais, direito consuetudinário e obrigações de crédito mantidas sob honra pública.',
      'Reduzindo a mecânica ao seu componente prático, o Kula define-se como a circulação contínua de dois enfeites de valor histórico.',
    ],
    layout: 'analysis',
  },

  // ==========================================
  // APRESENTADOR 4
  // ==========================================
  {
    id: 'fabricacao',
    title: 'vaygu\'a',
    chapter: 'CAPÍTULO III',
    section: '1. Produção',
    presenter: 'Apresentador 4: Alice',
    content: [
      'As argolas (mwali) derivam do corte da concha Conus millepunctatus, acompanhado de polimento sistemático. Seu valor é atestado regionalmente.',
      'A manufatura dos colares (soulava) baseia-se na junção de discos retirados da concha Spondylus.',
      'Nas transações, os exemplares assumem proporções cerimoniais: colares estendem-se até cinco metros, acompanhados de sementes e pingentes.',
    ],
    layout: 'split-block',
  },
  {
    id: 'uso-temporario',
    title: 'a ostentação',
    chapter: 'CAPÍTULO III',
    section: '2. Enfeites Cerimoniais',
    presenter: 'Apresentador 4: Alice',
    content: [
      'A função das peças restringe-se a eventos dançantes. O uso no cotidiano não ocorre.',
      'Uma parcela dos artigos mwali apresenta diâmetro insuficiente até para o pulso infantil, restando atados como adornos suspensos. Alguns colares soulava são exibidos em intervalos de até dez anos.',
      'A exposição pública dos artefatos durante cerimônias constitui, via de regra, um empréstimo temporário feito pelo chefe ou parceiro diplomático.',
    ],
    layout: 'analysis',
  },
  {
    id: 'joias-coroa',
    title: 'a posse',
    chapter: 'CAPÍTULO III',
    section: '3. A Comparação Europeia',
    presenter: 'Apresentador 4: Alice',
    content: [
      'Malinowski aproxima tais artefatos às relíquias da Coroa escocesa em Edimburgo: objetos desprovidos de aplicação prática, conservados perante reverência metódica.',
      'O valor financeiro e diplomático baseia-se nas trajetórias e na antiguidade das peças. Conchas notórias possuem titulação nominal.',
      'A distinção reside na retenção: o padrão monárquico pressupõe a posse inalienável; a mecânica do Kula fundamenta-se estritamente no repasse compulsório da posse.',
    ],
    layout: 'split-image',
    imagePlaceholder: 'Joias da Coroa britânica ou o Castelo de Edimburgo',
  },
  {
    id: 'regras-parceria',
    title: 'proporção social',
    chapter: 'CAPÍTULO III',
    section: '4. Número de Parceiros',
    presenter: 'Apresentador 4: Alice',
    content: [
      'Um indivíduo desprovido de influência atesta número escasso de associações comerciais. Chefes locais registram alianças estimadas em centenas.',
      'O liame institucional extrapola a permuta e implica deveres de hospedagem, segurança mútua e troca de presentes subsidiários.',
    ],
    layout: 'split-block',
  },
  {
    id: 'padrinho-estrangeiro',
    title: 'a proteção',
    chapter: 'CAPÍTULO III',
    section: '5. Hospedagem além-mar',
    presenter: 'Apresentador 4: Alice',
    content: [
      'O trânsito em águas distantes submete o viajante a temores perante a feitiçaria e a violência de grupos alheios.',
      'O parceiro comercial localizado na ilha de destino atua na função de hospedeiro garantidor: ele encarrega-se do fornecimento alimentar e concede salvaguarda contra ações hostis da tribo receptora.',
    ],
    layout: 'analysis',
  },
  {
    id: 'rede-unificada',
    title: 'convergência',
    chapter: 'CAPÍTULO III',
    section: '6. Expansão do Evento',
    presenter: 'Apresentador 4: Alice',
    content: [
      'O impacto geográfico do sistema congrega populações dispersas num raio marítimo extenso.',
      'Registros antropológicos assinalam aglomerações com dezenas de embarcações reunidas. Esse conglomerado opera como canal de difusão de canções, tradições e tendências regionais.',
    ],
    layout: 'split-block',
  },
  {
    id: 'regra-geografica',
    title: 'vetores geográficos',
    chapter: 'CAPÍTULO III',
    section: '7. O Fluxo Normativo',
    presenter: 'Apresentador 4: Alice',
    content: [
      'A trajetória dos itens atende a rotas estabelecidas. A comunidade capta os braceletes via territórios a Norte e Leste, e os colares via territórios de Sul e Oeste.',
      'O percurso não admite retorno no sentido inverso. O prazo para a conclusão física do anel marítimo varia, de forma geral, entre dois a dez anos.',
    ],
    layout: 'analysis',
  },
  {
    id: 'citacao-direcao',
    title: 'coordenação',
    chapter: 'CAPÍTULO III',
    presenter: 'Apresentador 4: Alice',
    quote: 'De frente para o centro do círculo, o nativo sempre recebe braceletes com a mão esquerda e colares com a direita, repassando-os adiante.',
    content: [],
    layout: 'impact-quote',
  },

  // ==========================================
  // APRESENTADOR 5
  // ==========================================
  {
    id: 'regra-troca',
    title: 'a devolução',
    chapter: 'CAPÍTULO III',
    section: '1. Regra Transacional',
    presenter: 'Apresentador 5: Antônia',
    content: [
      'O ciclo fundamenta-se na concessão de um artigo visando o direito à retribuição.',
      'O repasse inicial de abertura designa-se vaga. O contrapagamento futuro denomina-se yotile.',
      'Inviabilizada a retribuição correspondente no prazo, entrega-se o basi, um apaziguador honorário provisório, que posterga a liquidação firmada posteriormente como kudu.',
    ],
    layout: 'split-block',
  },
  {
    id: 'gimwali-ofensa',
    title: 'escambo vs protocolo',
    chapter: 'CAPÍTULO III',
    section: '2. Distinção Econômica',
    presenter: 'Apresentador 5: Antônia',
    content: [
      'A normativa do Kula interdita o diálogo comercial pragmático ou a regulação pública de valor.',
      'Em via separada, a troca utilitária de bens secundários admite barganha comercial, configurando a transação denominada gimwali.',
      'Transpor as práticas do gimwali para a alçada do Kula constitui uma falha moral.',
    ],
    layout: 'analysis',
  },
  {
    id: 'citacao-gimwali',
    title: 'ofensa diplomática',
    chapter: 'CAPÍTULO III',
    presenter: 'Apresentador 5: Antônia',
    quote: 'Ao criticar alguém que age de forma incorreta durante o Kula, os nativos dizem que essa pessoa "age como se o Kula fosse o gimwali" — a pior ofensa possível.',
    content: [],
    layout: 'impact-quote',
  },
  {
    id: 'possuir-e-dar',
    title: 'obrigação vs acumulação',
    chapter: 'CAPÍTULO III',
    section: '3. Paridade do Doador',
    presenter: 'Apresentador 5: Antônia',
    content: [
      'Cabe exclusivamente ao doador estipular a equivalência do item de devolução. Inexiste espaço para litígio caso o receptor julgue-se em desvantagem.',
      'A avareza tipifica a conduta mais censurada entre os participantes. O protocolo prescreve que toda riqueza ostenta a finalidade compulsória de doação subsequente.',
    ],
    layout: 'split-block',
  },
  {
    id: 'citacao-dar',
    title: 'imperativo moral',
    chapter: 'CAPÍTULO III',
    presenter: 'Apresentador 5: Antônia',
    quote: 'Possuir é dar: quanto mais alta a posição social, maior a obrigação de generosidade.',
    content: [],
    layout: 'impact-quote',
  },
  {
    id: 'pokala-kaributu',
    title: 'petição de bens',
    chapter: 'CAPÍTULO III',
    section: '4. Antecipações e Alianças',
    presenter: 'Apresentador 5: Antônia',
    content: [
      'Artefatos de renome mobilizam disputa entre as comunidades da malha marítima.',
      'Buscando primazia no repasse, os nativos enviam adiantamentos persuasivos. Utiliza-se o pokala (suprimento agrícola e animal) ou o kaributu (machados cerimoniais beku e utilitários de osso baleeiro).',
    ],
    layout: 'analysis',
  },
  {
    id: 'canoas',
    title: 'logística marítima',
    chapter: 'CAPÍTULO III',
    section: '5. Preparação Prática',
    presenter: 'Apresentador 5: Antônia',
    content: [
      'A mecânica transacional exige contingência estrutural: abate de troncos florestais, entalhe de frotas e arrecadação de provisões civis.',
      'As viagens incorporam o comércio auxiliar. Por meio das frotas cerimoniais, transportam-se artigos deficitários em determinados nichos, como cerâmicas e rochas basálticas.',
    ],
    layout: 'split-image',
    imagePlaceholder: 'Construção de embarcações nativas e atividade de escambo',
  },
  {
    id: 'magia-mwasila',
    title: 'recurso mágico',
    chapter: 'CAPÍTULO III',
    section: '6. Sustentação Mítica',
    presenter: 'Apresentador 5: Antônia',
    content: [
      'A ancoragem do percurso náutico apoia-se em práticas mágicas, visando a consolidação das embarcações e a neutralização de intempéries.',
      'O componente mwasila objetiva a incidência na disposição dos parceiros, buscando receptividade diplomática e a extração dos melhores artefatos.',
      'Mitos registrando as proezas de progenitores marinhos conferem base e validação aos métodos aplicados nas expedições vigentes.',
    ],
    layout: 'analysis',
  },
  {
    id: 'comunidade-kula',
    title: 'o circuito integrado',
    chapter: 'CAPÍTULO III',
    section: '7. O Fim da Teoria',
    presenter: 'Apresentador 5: Antônia',
    content: [
      'O termo "comunidade kula" sumariza o ajuntamento orgânico de aldeias unificadas pela navegação e por ritos dogmáticos de cooperação.',
      'Findada a formulação estrutural, a narrativa avança aos registros das operações empíricas do fenômeno: o ciclo de entalhe, o cerimonial das naus e a crônica da partida em Sinaketa.',
    ],
    layout: 'split-block',
  }
];
