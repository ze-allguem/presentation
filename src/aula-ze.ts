import { conceito, contexto, destaque, exemplo, foto, h, lista, numerada, p, tabela, type AulaSlide } from './aula';

// PARTE 2: Zé · Economia e sociedade, pp. 167–203
// A apresentação do autor ("quem era Weber") já está na Parte 1.

const base = { presenter: 'Zé' as const, layout: 'content' as const, chapter: 'Capítulo III · Os tipos de dominação' };

export const zeSlides: AulaSlide[] = [
  {
    ...base, id: 'ze-1', topic: 1,
    title: 'a pergunta que guia a parte 2',
    blocks: [
      p(`Continuando de onde a Laura parou: toda dominação precisa de legitimidade e de uma equipe para executar as ordens.`),
      conceito(`<strong>Quadro administrativo</strong> é o grupo que executa as ordens de quem manda: funcionários, assessores, vassalos, soldados. Nenhum chefe governa sozinho.`),
      destaque(`Quem controla os meios de governar: o chefe ou a equipe dele?`),
      p(`Se os funcionários são donos das ferramentas (terra, armas, o próprio cargo), eles podem desafiar o chefe. Se só recebem salário, dependem dele. Essa ideia explica o feudalismo, o Estado moderno e a burocracia.`),
      exemplo(`Duas empresas: numa, cada gerente é sócio e dono do próprio departamento; na outra, todos são contratados. Na segunda, o dono manda mais, porque ninguém tem poder próprio. O feudalismo funcionava como a primeira empresa, e o Estado moderno funciona como a segunda.`),
      foto(0),
    ],
  },
  {
    ...base, id: 'ze-2', topic: 2, pages: '167',
    title: 'quando o carisma vira herança',
    blocks: [
      p(`O texto abre na Índia, caso extremo de rotinização: os cargos da aldeia, as funções religiosas e até os clientes de um barbeiro passavam de pai para filho. <strong>Fundar uma seita era fundar uma dinastia.</strong>`),
      destaque(`A pessoa deixa de mandar porque é boa e passa a mandar porque é filha de quem mandava.`),
      foto(0),
      p(`Isso aconteceu no mundo inteiro e está na base dos <strong>estamentos</strong>, grupos fechados que passam privilégios de geração em geração. E Weber nota que, rotinizado, o carisma passa a <strong>servir à economia</strong>: os ricos defendiam o rei hereditário porque, se a herança do trono deixasse de ser sagrada, a deles também deixaria.`),
      exemplo(`Famílias donas do mesmo cartório por gerações, ou o sobrenome que abre portas. Quando "de onde você vem" pesa mais que "o que você sabe fazer", é o mesmo mecanismo.`),
      p(`O carisma nasce revolucionário, mas depois de rotinizado <strong>conserva e engessa</strong>.`),
    ],
  },
  {
    ...base, id: 'ze-3', topic: 3, pages: '167–170',
    title: 'o feudalismo: a Europa dos cavaleiros',
    blocks: [
      conceito(`<strong>Feudo</strong> é a entrega de poderes de mando (terra, cobrar impostos, julgar) a alguém, em troca de serviços, principalmente militares. <strong>É uma fatia do poder.</strong>`),
      lista(
        `era um <strong>contrato entre homens livres</strong>, um pacto de lealdade e honra entre o nobre e o vassalo, que é quem recebe o feudo;`,
        `o vassalo vivia como cavaleiro, com armas, cavalo e código de honra;`,
        `com o tempo, virou <strong>herança</strong>, e o rei foi obrigado a conceder terras.`,
      ),
      exemplo(`Um time amador em que cada jogador jura lealdade ao capitão por honra, não por carteira assinada. Trair o time é uma vergonha enorme.`),
      foto(0),
      h('O grande problema'),
      destaque(`Cada vassalo só deve lealdade ao nobre de quem recebeu o feudo. Ninguém deve lealdade ao "chefe do chefe".`),
      exemplo(`Como uma terceirizada que contrata outra, que contrata outra: o funcionário da última obedece ao chefe imediato, e não ao dono lá do topo.`),
      p(`Para punir um vassalo traidor, o rei dependia dos outros vassalos. Conclusão: <strong>no feudalismo o rei é frágil</strong>, porque os vassalos são donos dos meios de governar, e a briga entre eles nunca termina.`),
    ],
  },
  {
    ...base, id: 'ze-4', topic: 4, pages: '170–171',
    title: 'como os reis venceram e nasceu o Estado moderno',
    blocks: [
      p(`Como o rei frágil virou o monarca poderoso dos séculos XVI a XVIII? Com três estratégias:`),
      lista(
        `<strong>mudar as regras</strong>, por exemplo criando uma lealdade direta dos subvassalos (os vassalos dos vassalos) ao rei;`,
        `<strong>fiscalizar</strong>, com tribunais do rei, fiscais nas cortes dos vassalos e impostos próprios;`,
        `<strong>e a decisiva: montar uma equipe própria</strong>, que dependesse só dele.`,
      ),
      exemplo(`É como o governo federal criando ouvidorias, controladorias e tribunais de recurso para enxergar o que acontece nos estados e municípios.`),
      foto(0),
      p(`No Ocidente, essa equipe foram os <strong>juristas formados nas universidades</strong>. Weber chama isso de "germe do Estado ocidental moderno". No fim, venceu o rei, ou seja, <strong>a administração burocrática</strong>, ajudada pela burguesia das cidades e pela competição entre os Estados europeus.`),
      contexto(`Luís XIV, o "Rei Sol", levou a nobreza para Versalhes, sob seus olhos, enquanto funcionários que dependiam dele administravam o país.`),
    ],
  },
  {
    ...base, id: 'ze-5', topic: 5, pages: '171–173',
    title: 'prebendas e "falsos feudalismos"',
    blocks: [
      tabela(
        ['', 'Feudo (Europa)', 'Prebenda (Oriente, Índia)'],
        ['O que importa', 'Lealdade e honra', 'Arrecadar'],
        ['O que se recebe', 'Uma fatia do poder', 'Uma renda registrada'],
      ),
      p(`Na prebenda, o governante entrega a um particular o direito de cobrar impostos de uma região. Sem força para fiscalizar, <strong>o arrecadador acaba virando dono de terras e de poder</strong>.`),
      exemplo(`Como uma concessão de pedágio mal fiscalizada: a empresa vai virando dona de fato daquele território, e fica difícil tirá-la de lá.`),
      foto(0),
      p(`Weber também critica o uso solto da palavra "feudal": Esparta, por exemplo, não era feudal, porque faltava o contrato pessoal com um nobre. Quando alguém fala em "feudos políticos" ou "feudalismo digital", é metáfora. Como conceito científico, feudalismo tem sentido preciso.`),
    ],
  },
  {
    ...base, id: 'ze-6', topic: 6, pages: '173–175',
    title: 'nenhum governo é puro',
    blocks: [
      conceito(`A base de toda dominação é uma <strong>crença</strong>: a crença no prestígio de quem manda. <strong>Nenhum governo se sustenta só pela força</strong>: quando a crença some, ele cai, mesmo tendo exército.`),
      p(`E as crenças se misturam: obedecemos ao sinal vermelho porque é lei, mas também por hábito. Um governo legal que fracassa de forma visível perde o prestígio e abre espaço para um líder carismático.`),
      destaque(`Para as monarquias, perigosas são as guerras perdidas. Para as repúblicas, perigosas são as guerras vencidas.`),
      contexto(`Em 1918 o Kaiser perdeu a guerra e o trono. Napoleão, general vitorioso, tomou o poder na França republicana em 1799. No Brasil, a República nasceu de um golpe militar, em 1889, depois da Guerra do Paraguai.`),
      foto(0),
      h('O chefe e o quadro'),
      destaque(`O chefe é mais forte que cada funcionário sozinho, mas mais fraco que todos juntos.`),
      exemplo(`A diretora pode pressionar um professor. Se todos entram em greve juntos, quem fica em apuros é ela. Por isso os sindicatos são tão importantes para os trabalhadores.`),
      p(`Por isso a história é, em boa parte, <strong>uma luta silenciosa entre o chefe e seu quadro</strong> pelos meios de governar. Na Alemanha de 1918, a revolução não virou caos porque os funcionários antigos continuaram trabalhando para os novos governantes.`),
    ],
  },
  {
    ...base, id: 'ze-7', topic: 7, pages: '175–178',
    title: 'o carisma de cabeça para baixo: a democracia',
    blocks: [
      p(`No carisma de verdade, o líder tem o dom e os seguidores têm o dever de reconhecê-lo. Com a racionalização, isso se inverte: <strong>o reconhecimento passa a ser a causa da legitimidade</strong>, e ganha um nome: <strong>eleição</strong>.`),
      conceito(`<strong>Legitimidade democrática:</strong> o governante governa "pela graça dos dominados", eleito por eles e podendo ser destituído por eles.`),
      foto(0),
      destaque(`A democracia plebiscitária é uma dominação carismática escondida sob a aparência de vontade popular.`),
      p(`O exemplo clássico é Napoleão, que tomou o poder e depois fez plebiscitos. O líder manda porque confiam nele pessoalmente: a eleição é a forma, o carisma é o conteúdo.`),
      exemplo(`O político que se apresenta como "a voz do povo contra o sistema", falando direto com as massas por cima dos partidos. Isso existe à esquerda e à direita.`),
      contexto(`Weber defendia, para a Alemanha de 1919, um presidente forte eleito pelo povo. Anos depois da morte dele, foi o presidente Hindenburg quem nomeou Hitler chanceler, em 1933.`),
      conceito(`<strong>Racionalidade formal</strong> é seguir regras fixas, iguais para todos, mesmo que o resultado pareça injusto num caso. <strong>Material</strong> é buscar o resultado justo caso a caso, mesmo quebrando a regra. O capitalismo prefere a formal, porque precisa de previsibilidade.`),
    ],
  },
  {
    ...base, id: 'ze-8', topic: 8, pages: '178–186',
    title: 'governar em grupo: a colegialidade',
    blocks: [
      conceito(`<strong>Colegialidade</strong> é quando o poder deixa de estar nas mãos de uma pessoa só (monocracia) e passa a depender de um grupo.`),
      tabela(
        ['Tipo', 'Como funciona', 'Exemplo de hoje'],
        ['De veto', 'Um pode barrar o outro', 'Veto do presidente a uma lei'],
        ['De decisão', 'Votação', 'Tribunal colegiado'],
        ['Consultiva', 'O grupo aconselha, o chefe decide', 'Conselhos de políticas públicas'],
        ['De compromisso', 'Interesses opostos negociam', 'Patrões e sindicatos'],
      ),
      exemplo(`O Senado romano só "aconselhava", mas o "se lhes parecer bem" virou ordem. Como o "sugiro que você faça isso" do chefe, que todo mundo sabe que não é sugestão.`),
      foto(0),
      p(`<strong>Vantagens:</strong> decisões mais pensadas e controle do poder de um só. <strong>Desvantagens:</strong> lentidão e responsabilidade diluída. Numa comissão de 15 pessoas, de quem é a culpa por uma decisão ruim? De ninguém, porque a responsabilidade se espalha entre todos. Por isso os Estados grandes preferiram a monocracia.`),
      destaque(`A colegialidade não é, de modo algum, algo especificamente democrático.`),
      p(`Muitas vezes foi arma das elites contra líderes populares. E foram os <strong>funcionários unidos em conselhos</strong> que tiraram o poder dos reis: um funcionário sozinho cede, um grupo resiste. Isso ajudou a separar o dinheiro público do patrimônio do rei.`),
    ],
  },
  {
    ...base, id: 'ze-9', topic: 9, pages: '186–188',
    title: 'divisão de poderes',
    blocks: [
      conceito(`<strong>Divisão de poderes:</strong> órgãos diferentes, e certas decisões só saem por acordo entre eles. Weber usa o termo para a divisão do poder supremo <strong>fundada numa constituição</strong>.`),
      p(`Ela nasceu de uma <strong>briga por dinheiro</strong>: o rei precisava de impostos e não conseguia arrecadar sem o consentimento de nobres, clero e cidades. Dessas negociações surgiram os parlamentos.`),
      contexto(`Na Inglaterra, da Magna Carta (1215) à Revolução Gloriosa (1688): o rei não cobra impostos sem o Parlamento.`),
      foto(0),
      destaque(`Para saber quem manda de fato, pergunte: o que acontece se o orçamento não for aprovado?`),
      p(`Na Inglaterra, o rei que governasse sem orçamento perderia a coroa; na Prússia, governaria assim mesmo. Logo, lá mandava o Parlamento, e aqui, o rei.`),
      exemplo(`Nos EUA, sem orçamento, o governo entra em <em>shutdown</em>. No Brasil, a disputa pelo controle das emendas ao orçamento é a mesma pergunta: quem manda no dinheiro manda no governo.`),
    ],
  },
  {
    ...base, id: 'ze-10', topic: 10, pages: '188–190',
    title: 'partidos',
    blocks: [
      conceito(`<strong>Partido</strong> é uma associação de adesão livre, que busca poder dentro de uma organização para seus dirigentes e vantagens ou objetivos para seus membros.`),
      exemplo(`As chapas que disputam o centro acadêmico ou um sindicato são "partidos" no sentido de Weber. Partido não existe só no Estado.`),
      foto(0),
      tabela(
        ['Tipo', 'O que busca'],
        ['De patronagem', 'Cargos para os membros'],
        ['De classe', 'Interesses de um grupo social'],
        ['Ideológico', 'Uma visão de mundo'],
      ),
      p(`Na prática os três se misturam, e o interesse dos dirigentes sempre pesa. Todo partido tem camadas: <strong>um núcleo de líderes, militantes, eleitores (alvo de propaganda) e financiadores, em geral escondidos.</strong>`),
      h('O dinheiro'),
      lista(
        `se o candidato paga a campanha, <strong>só os ricos se candidatam</strong>;`,
        `se o partido paga, <strong>o candidato fica refém da máquina</strong>.`,
      ),
      exemplo(`É o debate atual sobre financiamento de campanha e fundo eleitoral distribuído pelas cúpulas dos partidos.`),
    ],
  },
  {
    ...base, id: 'ze-11', topic: 11, pages: '190–193',
    title: 'democracia direta e os notáveis',
    blocks: [
      p(`Dá para ter uma organização sem dominação? A tentativa é a <strong>democracia direta</strong>: mandatos curtos, rodízio, destituição a qualquer hora e prestação de contas. Mas <strong>só funciona em grupos pequenos</strong> e sem tarefas técnicas.`),
      exemplo(`Uma república estudantil ou um condomínio pequeno: funciona com 30 pessoas; com 3 mil, trava.`),
      foto(0),
      conceito(`<strong>Notáveis</strong> são pessoas com dinheiro e prestígio que dirigem uma organização sem receber por isso. <strong>Vivem para a política, sem precisar viver da política.</strong>`),
      p(`Quem tem tempo para isso? Em geral, quem vive de renda, os fazendeiros e os advogados, que têm horário flexível. Por isso <strong>toda democracia direta tende a virar governo de notáveis</strong>. E, quando os dirigentes mudam e os funcionários ficam, <strong>mandam os funcionários fixos</strong>.`),
      exemplo(`Quem está sempre nas reuniões da associação de bairro? Em geral, aposentados e profissionais liberais, que têm tempo livre. Quem tem dois empregos raramente consegue ir. E o reitor muda a cada mandato, mas a burocracia da universidade fica.`),
    ],
  },
  {
    ...base, id: 'ze-12', topic: 12, pages: '193–198',
    title: 'representação',
    blocks: [
      conceito(`<strong>Representação</strong> é quando as ações de alguns (os representantes) valem como obrigatórias para todos.`),
      tabela(
        ['Tipo', 'Como funciona', 'Exemplo'],
        ['Apropriada', 'O chefe representa por tradição', 'Cacique, rei'],
        ['Estamental', 'Privilegiados defendem seus privilégios', 'Assembleias medievais'],
        ['Vinculada', 'Mensageiro preso a instruções', 'Delegados dos sovietes'],
        ['Livre', 'Segue a própria convicção', 'Parlamentos modernos'],
      ),
      foto(0),
      exemplo(`O deputado que diz "mudei de ideia" age como representante livre. O eleitor que reclama "votei em você para fazer tal coisa" cobra um mandato vinculado. O Brasil adota o mandato livre, então o eleitor não pode destituir o deputado no meio do mandato.`),
      destaque(`O próprio do Ocidente é a representação livre reunida em parlamentos.`),
      p(`Os parlamentos cresceram porque a <strong>burguesia queria leis previsíveis</strong>. No começo, só votava quem tinha renda; depois o voto foi ampliado e, com os partidos de massa, <strong>o deputado virou servidor da máquina do partido</strong>.`),
      contexto(`No Brasil: voto censitário no Império (1824), voto feminino em 1932 e voto dos analfabetos em 1985.`),
    ],
  },
  {
    ...base, id: 'ze-13', topic: 13, pages: '199–203', chapter: 'Capítulo IV · Estamentos e classes',
    title: 'classes e estamentos',
    blocks: [
      contexto(`Para Marx, a sociedade se divide em classes pela relação com os meios de produção. Weber achava isso simples demais: a desigualdade tem várias dimensões.`),
      conceito(`<strong>Classe</strong> é a sua posição no mercado: o que você tem e o que sabe fazer definem suas chances de vida.`),
      tabela(
        ['Classe', 'Definida por', 'Exemplo'],
        ['Proprietária', 'O que você tem', 'Quem vive de aluguéis (rentista)'],
        ['Aquisitiva', 'O que você ganha no mercado', 'Médica, empresária, motorista de aplicativo'],
        ['Social', 'A facilidade de mudar de posição', 'O filho do motorista consegue virar médico?'],
      ),
      foto(0),
      p(`Para Weber, <strong>estar na mesma classe não significa agir junto</strong>. A organização é mais fácil quando o adversário é visível e as pessoas se reúnem com facilidade.`),
      exemplo(`Operários de uma fábrica se organizam mais fácil que trabalhadores de aplicativo, espalhados pela cidade e sem um "patrão" de carne e osso.`),
      conceito(`<strong>Estamento</strong> é um grupo com prestígio social próprio, baseado em estilo de vida, educação e família. Aparece em com quem se casa, com quem se senta à mesa e nos monopólios do grupo.`),
      destaque(`Classe e estamento não são a mesma coisa.`),
      lista(
        `<strong>dinheiro não garante prestígio:</strong> o novo-rico pode ser desprezado;`,
        `<strong>pobreza não tira prestígio:</strong> o nobre falido continua nobre.`,
      ),
      exemplo(`O professor universitário pode ganhar menos que um comerciante e ter mais prestígio. O jogador milionário da periferia pode enfrentar preconceito de certos círculos.`),
      contexto(`Weber completa o raciocínio com uma tríade: <strong>classe</strong> (economia), <strong>estamento</strong> (prestígio) e <strong>partido</strong> (política).`),
    ],
  },
  {
    ...base, id: 'ze-14', topic: 14, chapter: 'Capítulos III e IV',
    title: 'fechando a aula',
    blocks: [
      numerada(
        `Toda dominação se apoia numa <strong>crença</strong> e precisa de um <strong>quadro administrativo</strong>.`,
        `A grande luta da história é entre o chefe e esse quadro, pelos meios de governar. No feudalismo o rei era frágil; os reis venceram com <strong>funcionários próprios, os juristas</strong>, e nasceu o Estado moderno.`,
        `O carisma ou vira herança, ou, de cabeça para baixo, <strong>vira democracia</strong>: manda quem foi reconhecido.`,
        `Colegiados e divisão de poderes limitam o poder; <strong>partidos</strong> organizam a política de massas.`,
        `Por baixo de tudo, <strong>classes</strong> (economia) e <strong>estamentos</strong> (prestígio), que não são a mesma coisa.`,
      ),
      foto(0),
      conceito(
        `"O fundamento de toda dominação é uma crença."`,
        `"O chefe é mais forte que cada funcionário, mas mais fraco que todos juntos."`,
        `"Classe é posição no mercado; estamento é prestígio."`,
      ),
      p(`Mais de cem anos depois, as ferramentas de Weber ainda servem para ler o jornal de hoje. Esse é o sinal de um clássico.`),
    ],
  },
];
