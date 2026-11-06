import { conceito, contexto, destaque, exemplo, foto, h, lista, numerada, p, tabela, type AulaSlide } from './aula';

// PARTE 1: Laura · Economia e sociedade, pp. 139–167

const base = { presenter: 'Laura' as const, layout: 'content' as const, chapter: 'Capítulo III · Os tipos de dominação' };

export const lauraSlides: AulaSlide[] = [
  {
    ...base, id: 'laura-1', topic: 1,
    title: 'antes de tudo: quem era Weber',
    blocks: [
      contexto(`Max Weber (1864 a 1920) foi um estudioso alemão de economia, história, direito e sociologia, considerado um dos três "pais" da sociologia, junto com Marx e Durkheim. Ficou famoso com <em>A ética protestante e o espírito do capitalismo</em>. <em>Economia e Sociedade</em> é a obra principal dele, mas <strong>ficou inacabada</strong>: Weber morreu em 1920 e a esposa, Marianne, publicou o livro.`),
      p(`O trecho que vamos ver é o começo do capítulo III, "Os tipos de dominação", escrito entre 1918 e 1920. A Alemanha tinha perdido a Primeira Guerra, o imperador havia fugido, surgiam "conselhos de trabalhadores e soldados" e nascia a República de Weimar. Quando Weber fala de burocracia que sobrevive a revoluções e de líderes carismáticos, <strong>ele descreve o que via pela janela</strong>.`),
      foto(0),
      conceito(`<strong>Tipo ideal</strong> é um modelo "puro", exagerado de propósito, que serve como régua para medir a realidade. Ninguém encontra um tipo ideal perfeito na vida real.`),
      exemplo(`O "aluno ideal" que o professor imagina: chega na hora, lê tudo, participa. Nenhum aluno é assim, mas o modelo ajuda a descrever os reais: "esse é pontual, mas não lê".`),
      foto(1),
      p(`Por isso <strong>nenhum dos três tipos de dominação existe puro na história</strong>: eles servem para ver o que há de burocrático, de tradicional e de carismático em cada caso.`),
    ],
  },
  {
    ...base, id: 'laura-2', topic: 2, pages: '139–141',
    title: 'o que é dominação e por que obedecemos',
    blocks: [
      conceito(`<strong>Dominação</strong> é a probabilidade de encontrar obediência a ordens dentro de um determinado grupo de pessoas.`),
      p(`Em outras palavras: alguém manda e, de forma regular, as pessoas cumprem. Não é qualquer influência (um amigo que convence você a ir ao cinema não domina você) e sempre há algum motivo para obedecer: <strong>costume, afeto, interesse ou crença</strong>. Só que obedecer por interesse é instável, porque quem obedece só por dinheiro vai embora quando aparece oferta melhor. Falta um ingrediente:`),
      conceito(`<strong>Crença na legitimidade:</strong> toda dominação procura fazer as pessoas acreditarem que é certo e justo obedecer.`),
      exemplo(`Um governo tem dinheiro e polícia, mas gasta energia com hinos, posses e propaganda. Por quê? Porque quer que as pessoas acreditem que ele tem direito de mandar.`),
      foto(0),
      p(`Weber nota também que <strong>um contrato livre pode criar dominação</strong>: o trabalhador aceitou o emprego, mas dentro da fábrica o patrão dá ordens e ele obedece. Já o poder de mercado sozinho não é dominação.`),
      exemplo(`A plataforma de entregas impõe taxas ao restaurante (poder econômico), mas dá ordens, metas e punições ao entregador pelo aplicativo. Isso se parece muito mais com dominação.`),
      foto(1),
    ],
  },
  {
    ...base, id: 'laura-3', topic: 3, pages: '141–142',
    title: 'os três tipos puros de dominação',
    blocks: [
      p(`Se toda dominação precisa de legitimidade, <strong>de onde ela pode vir?</strong> Weber responde com o parágrafo mais citado da sociologia política: existem três tipos puros de dominação legítima.`),
      tabela(
        ['Tipo', 'Obedece-se a...', 'Exemplo de hoje'],
        ['Legal (racional)', 'À regra impessoal e a quem ela nomeou', 'Você paga a multa porque está no código, não porque gosta do agente'],
        ['Tradicional', 'À pessoa indicada pelo costume, "desde sempre"', 'A matriarca que decide onde será o almoço de domingo'],
        ['Carismática', 'Ao líder visto como extraordinário', 'Seguidores de um líder religioso ou político de grande carisma'],
      ),
      foto(0),
      p(`"Carisma" vem do cristianismo antigo e quer dizer "graça" ou "dom". E nenhum tipo aparece puro na realidade.`),
      exemplo(`Um presidente é legal (foi eleito pela Constituição), pode ter carisma pessoal e o cargo carrega tradições, como a faixa e a posse. Uma mesma figura mistura os três.`),
      destaque(`Os tipos são réguas para medir a realidade, não caixas para guardá-la.`),
    ],
  },
  {
    ...base, id: 'laura-4', topic: 4, pages: '142–144',
    title: 'a dominação legal: obedecer à regra, e não à pessoa',
    blocks: [
      p(`Weber começa pela forma moderna de dominação, para depois comparar as outras. Ela funciona porque as pessoas acreditam que:`),
      lista(
        `<strong>o próprio chefe também obedece às regras</strong>: ele aplica uma ordem impessoal, não a vontade dele;`,
        `quem obedece, obedece ao direito, como cidadão, e não à pessoa do chefe;`,
        `<strong>só se obedece dentro da competência</strong> que a regra deu ao cargo.`,
      ),
      exemplo(`O professor pode exigir o trabalho no prazo, mas não pode exigir que você lave o carro dele. A autoridade dele vem do regulamento e só vale dentro dele. Num regime tradicional, o "senhor" poderia exigir as duas coisas.`),
      foto(0),
      h('As peças da administração legal'),
      lista(
        `<strong>Competência:</strong> cada cargo tem sua área e seus limites;`,
        `<strong>Hierarquia:</strong> dá para recorrer à instância de cima;`,
        `<strong>Qualificação:</strong> entra quem prova formação;`,
        `<strong>O funcionário não é dono dos meios:</strong> o computador e o dinheiro são da instituição, e o cargo não pertence a quem o ocupa;`,
        `<strong>Tudo é registrado por escrito.</strong>`,
      ),
      foto(1),
      destaque(`"Na vida cotidiana, dominação é, em primeiro lugar, administração."`),
    ],
  },
  {
    ...base, id: 'laura-5', topic: 5, pages: '144–145',
    title: 'o retrato do burocrata',
    blocks: [
      p(`Weber desenha o funcionário do tipo mais puro de dominação legal. Ele é <strong>nomeado, não eleito</strong>, escolhido pela qualificação (prova e diploma), recebe <strong>salário fixo</strong>, tem <strong>carreira</strong>, trabalha sob disciplina e controle e não é dono do cargo.`),
      exemplo(`É quase item por item o servidor concursado brasileiro. O concurso público é, talvez, a instituição mais "weberiana" do Estado.`),
      foto(0),
      p(`Esse modelo vale para o Estado, empresas, partidos, exército e até a Igreja. Mas <strong>no topo há sempre alguém que não é burocrata</strong>: ministros e presidentes não precisam de formação técnica, e o dono da empresa também não.`),
      exemplo(`O ministro da Saúde pode ser advogado, e o técnico que analisa o registro de um remédio precisa de formação específica. Em cima, um político; embaixo, a máquina técnica.`),
      foto(1),
    ],
  },
  {
    ...base, id: 'laura-6', topic: 6, pages: '145–147',
    title: 'por que a burocracia vence sempre, e o que ela custa',
    blocks: [
      destaque(`A administração burocrática é, tecnicamente, a forma mais racional de exercer a dominação.`),
      p(`Ela dá <strong>precisão, continuidade e calculabilidade</strong>: todos sabem o que esperar dela. Por isso Estado, Igreja, partido, empresa e sindicato se burocratizam.`),
      conceito(`"Só existe escolha entre burocratização e diletantização da administração." Ou profissionais, ou amadores. Não há terceira via.`),
      foto(0),
      p(`A burocracia <strong>sobrevive às revoluções</strong>, porque sem ela ninguém teria nem abastecimento. A pergunta, então, é <strong>quem controla a burocracia</strong>, e o funcionário experiente costuma vencer o ministro amador.`),
      exemplo(`Muda o governo, mudam os ministros, mas os servidores de carreira ficam. A série <em>Yes, Minister</em> faz humor com isso: o ministro acha que manda, o funcionário decide.`),
      conceito(`"Administração burocrática significa: dominação em virtude de conhecimento." Daí o <strong>"segredo oficial"</strong>: informação é poder.`),
      p(`Os efeitos sociais são dois, e parecem contraditórios: ela <strong>nivela</strong> (qualquer pessoa qualificada pode entrar), mas também favorece quem tem dinheiro, porque a formação é longa e cara. Além disso, é impessoal: trata todos igual, "sem raiva e sem paixão".`),
      exemplo(`O concurso é aberto a todos, mas passar exige anos de estudo, o que favorece quem pode só estudar. As cotas respondem, em parte, a essa tensão.`),
    ],
  },
  {
    ...base, id: 'laura-7', topic: 7, pages: '148',
    title: 'a dominação tradicional: "sempre foi assim"',
    blocks: [
      conceito(`<strong>Dominação tradicional:</strong> a legitimidade vem do valor sagrado do que existe "desde sempre". Obedece-se ao senhor pela dignidade que a tradição dá a ele.`),
      tabela(
        ['', 'Legal', 'Tradicional'],
        ['Quem manda', 'Um superior', 'Um senhor pessoal'],
        ['Quem executa', 'Funcionários', 'Servidores pessoais'],
        ['Obedece-se a', 'Regras', 'À pessoa'],
      ),
      h('O "duplo reino"'),
      lista(
        `<strong>Onde a tradição manda,</strong> o senhor está preso: se desrespeitar o costume, perde legitimidade;`,
        `<strong>onde ela deixa espaço,</strong> ele age por arbítrio, favorecendo ou castigando.`,
      ),
      exemplo(`O chefe político local vai ao enterro e apadrinha batizado (tradição), mas decide quem recebe favor conforme a lealdade (arbítrio). É o coronelismo e o clientelismo.`),
      foto(0),
      p(`Quando o senhor passa dos limites, o povo se revolta contra a <strong>pessoa</strong>, e não contra o sistema: troca-se o rei mau por um rei bom, mas continua havendo rei. É a "revolução tradicionalista".`),
    ],
  },
  {
    ...base, id: 'laura-8', topic: 8, pages: '148–151',
    title: 'quem trabalha para o senhor tradicional',
    blocks: [
      p(`A equipe do senhor tradicional vem <strong>de dentro da casa</strong> (parentes, criados, escravos) ou de pessoas de confiança de fora (favoritos e vassalos). Os cargos da casa viraram cargos de Estado.`),
      exemplo(`"Marechal" vem de um termo que significava "criado dos cavalos", e "ministro" vem de <em>minister</em>, "servidor". Os títulos pomposos nasceram na casa do rei: <strong>o Estado nasceu da casa do senhor</strong>.`),
      foto(0),
      h('O que falta, comparado à burocracia'),
      lista(
        `competência fixa: o senhor dá as tarefas como quer;`,
        `formação profissional e promoção regulada: promove quem ele quiser;`,
        `salário fixo: os servidores comiam na mesa do senhor e cobravam taxas de quem pedia favores.`,
      ),
      exemplo(`Taxa sem tabela cobrada por um "favor" hoje se chama propina. No patrimonialismo era o jeito normal de pagar o servidor. A corrupção moderna é <strong>um resto de patrimonialismo dentro de um Estado que deveria ser burocrático</strong>.`),
    ],
  },
  {
    ...base, id: 'laura-9', topic: 9, pages: '151–154',
    title: 'do patriarca ao sultão: as formas da tradição',
    blocks: [
      p(`Weber ordena as formas da dominação tradicional, da mais simples à mais concentrada.`),
      conceito(
        `<strong>Gerontocracia e patriarcalismo:</strong> mandam os mais velhos ou o chefe da família, <strong>sem equipe própria</strong>. Por isso o chefe depende da boa vontade de todos.`,
        `<strong>Patrimonialismo:</strong> o senhor monta uma equipe pessoal e <strong>trata o poder como propriedade dele</strong>.`,
        `<strong>Sultanismo:</strong> patrimonialismo com arbítrio máximo, quase solto da tradição.`,
      ),
      foto(0),
      exemplo(`O patrimonialismo é muito usado para interpretar o Brasil. Faoro (<em>Os donos do poder</em>) e Sérgio Buarque (<em>Raízes do Brasil</em>) o usaram para explicar a dificuldade de separar o público do privado. Quem trata um cargo público como coisa sua age de forma patrimonial.`),
      h('Dominação estamental'),
      p(`Quando a própria equipe se apropria dos cargos e dos meios, o senhor fica limitado. Na França do século XVIII, cargos de juiz eram comprados e herdados. No Brasil colonial, tabelião e escrivão passavam de pai para filho, e restos disso aparecem no debate sobre cartórios.`),
    ],
  },
  {
    ...base, id: 'laura-10', topic: 10, pages: '154–156',
    title: 'como se paga o servidor: prebendas e feudos',
    blocks: [
      p(`Como o senhor sustenta quem trabalha para ele? Com a mesa dele, com porções de produtos, com terras, com o direito de cobrar taxas ou com feudos. Duas formas merecem nome:`),
      conceito(
        `<strong>Prebenda:</strong> renda concedida a uma pessoa, sem herança, com valor fixado pela tradição.`,
        `<strong>Feudo:</strong> poderes de mando entregues por contrato, guiado pela honra militar dos cavaleiros.`,
      ),
      p(`Nos dois casos quem recebe paga do próprio bolso a administração e as armas, e por isso tende a tratar tudo como dele: <strong>julgar, cobrar impostos e convocar soldados viram bens privados</strong>.`),
      exemplo(`Vale-alimentação, imóvel funcional e concessão de serviço são versões modernas, com outro nome, das formas de sustento que Weber lista.`),
      foto(0),
      p(`Quando nobreza, clero e cidades negociam as leis e os impostos com o rei, temos a <strong>divisão estamental de poderes</strong>, que só se desenvolveu por completo no Ocidente.`),
      contexto(`É a semente dos parlamentos. Na Magna Carta (1215), os barões obrigaram o rei João a aceitar limites à cobrança de tributos.`),
    ],
  },
  {
    ...base, id: 'laura-11', topic: 11, pages: '156–158',
    title: 'tradição e economia: por que o capitalismo não nasce ali',
    blocks: [
      p(`O problema da economia patrimonial é a <strong>falta de calculabilidade</strong>: taxas, impostos novos e monopólios dependem do arbítrio do senhor, e ninguém sabe quanto vai pagar amanhã. Além disso, faltam funcionários profissionais, e a corrupção varia de funcionário para funcionário, por isso nem dá para calcular.`),
      exemplo(`Investidores dizem que o pior não é o imposto alto, é a incerteza. O que Weber chama de falta de calculabilidade hoje se chama "insegurança jurídica".`),
      foto(0),
      p(`Sob o patrimonialismo florescem vários capitalismos (comercial, colonial, das plantações), mas <strong>não nasce o capitalismo moderno</strong>: a empresa com trabalho livre, voltada ao mercado, que exige regras previsíveis.`),
      exemplo(`O Brasil colonial teve muito capitalismo (açúcar, ouro), mas ligado à Coroa, e não o capitalismo industrial de mercado.`),
      h('E por que nasceu no Ocidente?'),
      lista(
        `formação jurídica (universidades, direito romano);`,
        `competição entre vários reinos europeus;`,
        `aliança dos reis com as cidades e a burguesia.`,
      ),
    ],
  },
  {
    ...base, id: 'laura-12', topic: 12, pages: '158–161',
    title: 'a dominação carismática',
    blocks: [
      conceito(`<strong>Carisma</strong> é uma qualidade pessoal considerada extraordinária, que faz alguém ser seguido como líder.`),
      destaque(`Não importa se a qualidade é "verdadeira". Importa como os seguidores a veem.`),
      exemplo(`Você pode admirar ou detestar um líder e, mesmo assim, reconhecer que ele tem carisma no sentido de Weber. A pergunta sociológica é: os seguidores o veem como extraordinário?`),
      foto(0),
      h('Como funciona'),
      lista(
        `<strong>Precisa de provas e pode acabar:</strong> se o líder fracassa por muito tempo, perde a autoridade;`,
        `<strong>não há burocracia:</strong> há discípulos e homens de confiança, sem cargo nem salário;`,
        `<strong>não há regras fixas:</strong> o líder cria direito novo a cada caso, a fórmula é "Está escrito... mas eu vos digo".`,
      ),
      p(`O carisma é <strong>alheio à economia</strong>: vive de doações, não de trabalho regular. E é a grande força revolucionária das épocas presas à tradição, porque transforma <strong>de dentro para fora</strong>, mudando a consciência das pessoas, enquanto a razão muda de fora para dentro, pela técnica e pela economia.`),
      exemplo(`Movimentos e igrejas novas vivem de vaquinha e voluntários apaixonados. O problema vem quando é preciso pagar as contas todo mês.`),
    ],
  },
  {
    ...base, id: 'laura-13', topic: 13, pages: '161–163',
    title: 'quando o líder morre: a rotinização do carisma',
    blocks: [
      conceito(`<strong>Rotinização do carisma:</strong> o carisma, que é extraordinário e pessoal, vira algo cotidiano e permanente. O momento crítico é a morte do líder: <strong>quem sucede?</strong>`),
      foto(0),
      tabela(
        ['Como se escolhe o sucessor', 'Exemplo'],
        ['Busca por sinais', 'O novo Dalai-Lama'],
        ['Revelação (oráculo, sorteio)', 'Saul, escolhido rei por oráculo'],
        ['Indicação pelo líder', 'O ditador romano'],
        ['Indicação pelo quadro', 'Bispos e papa'],
        ['Carisma hereditário', 'Monarquias: o dom estaria "no sangue"'],
        ['Carisma de cargo', 'Padre ordenado, rei ungido'],
      ),
      p(`<strong>Indicação pelo quadro não é eleição</strong>: os discípulos tentam descobrir "a pessoa certa", e errar é pecado. No carisma hereditário, o rei manda por direito próprio, mesmo sem dom pessoal. No de cargo, o dom passa da pessoa para a função.`),
      exemplo(`O conclave que escolhe o papa guarda essa lógica: ritual, segredo, fumaça branca. E respeitar um juiz pela toga, e não por conhecê-lo, é um pouco de carisma de cargo.`),
    ],
  },
  {
    ...base, id: 'laura-14', topic: 14, pages: '163–167',
    title: 'o carisma vira instituição',
    blocks: [
      p(`Poucos discípulos aceitam viver só pela "vocação". A maioria quer segurança: o quadro se apropria dos cargos e controla quem entra. Quando a herança domina tudo, surge o <strong>"Estado de linhagem"</strong>: não é o cargo que dá prestígio à família, <strong>é o prestígio da família que define o cargo</strong>.`),
      exemplo(`"Sabe com quem está falando?", frase estudada por Roberto DaMatta, mostra que no Brasil o sobrenome às vezes ainda pesa mais que a regra.`),
      foto(0),
      p(`Para durar, o carisma precisa aceitar a economia e cobrar contribuições regulares. Aí surgem o <strong>clero</strong>, os <strong>funcionários</strong> do Estado e os funcionários de partido. Do carisma original só sobra o prestígio.`),
      exemplo(`Um movimento começa com líder inspirador e voluntários. Dez anos depois tem CNPJ, sede, diretoria, salários e estatuto, e o fundador virou foto na parede. É a rotinização do começo ao fim.`),
      destaque(`Aqui, na página 167, termina a Parte 1. O Zé continua na Parte 2.`),
    ],
  },
  {
    ...base, id: 'laura-15', topic: 15,
    title: 'fechando a parte 1',
    blocks: [
      numerada(
        `<strong>Dominação</strong> é a chance de ser obedecido, e toda dominação busca <strong>legitimidade</strong>.`,
        `Há três tipos puros: <strong>legal</strong> (a regra), <strong>tradicional</strong> (o costume) e <strong>carismática</strong> (o dom). Na realidade, se misturam.`,
        `A forma pura da dominação legal é a <strong>burocracia</strong>: eficiente e inevitável, e domina pelo conhecimento.`,
        `A dominação tradicional é pessoal; com equipe própria vira <strong>patrimonialismo</strong>, que trava o capitalismo moderno por tirar a previsibilidade.`,
        `O carisma é extraordinário e revolucionário, mas não dura: <strong>vira herança, cargo ou instituição</strong>.`,
      ),
      foto(0),
      conceito(
        `"Toda dominação procura despertar e cultivar a crença em sua legitimidade."`,
        `"Só existe escolha entre burocratização e diletantização da administração."`,
      ),
      p(`A lei, a tradição e o carisma continuam sendo ferramentas para entender por que as pessoas obedecem. Agora o Zé mostra como essas ideias explicam o feudalismo, o Estado moderno, a democracia e as classes.`),
    ],
  },
];
