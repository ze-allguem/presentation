// Imagens que ilustram as seções dos slides (1 a 3 por slide).
// `apos` = número do bloco do slide depois do qual a imagem aparece (começa em 0).
// Cada imagem tem um id (ex.: laura-6-2). Para fixar a imagem no projeto, salve em public/imagens/<id>.png.
// Também dá para inserir clicando no espaço da imagem (fica guardada no navegador).

export const ESTILO =
  'ESTILO (obrigatório): ilustração editorial em preto e branco feita a nanquim, no estilo de gravura de jornal antigo. ' +
  'Contornos limpos e firmes, formas simplificadas, sombreado só com hachuras e linhas cruzadas finas, sem cinza chapado e sem degradê. ' +
  'Personagens levemente caricatos, com expressões fortes e fáceis de ler. ' +
  'Fundo branco liso: a cena fica recortada sobre o branco, sem moldura e sem cenário desnecessário. ' +
  'Composição clara de ilustração editorial, com um único foco principal. ' +
  'Sem cor, sem texto, sem letras, sem números, sem placas legíveis, sem logotipos, sem assinatura e sem marca d’água. ' +
  'Formato horizontal 4:3.';

export type Imagem = { id: string; apos: number; ideia: string; prompt: string; foto?: boolean; legenda?: string };

type Def = [apos: number, ideia: string, prompt: string];

const defs: Record<string, Def[]> = {
  'laura-1': [
    [4, 'Weber escrevendo; revolução pela janela',
      'Cena: um escritório de 1919. À esquerda, Max Weber (homem de 55 anos, corpulento, barba cheia e escura, cabelo curto penteado para trás, terno escuro de três peças e colarinho alto) está sentado de perfil numa escrivaninha de madeira, escrevendo à mão com uma caneta-tinteiro, cercado de pilhas de livros grossos e folhas manuscritas. À direita, uma janela alta e aberta mostra, lá embaixo, uma rua de cidade alemã tomada por uma multidão de trabalhadores e soldados com bonés e bandeiras erguidas (bandeiras lisas, sem símbolos). Weber está sério e concentrado, sem olhar para fora. Contraste entre a calma do escritório e a agitação da rua.'],
    [8, 'o tipo ideal como régua',
      'Cena: uma régua de madeira gigante, deitada na horizontal no alto da imagem, com a silhueta recortada de um "aluno perfeito" (de pé, postura reta, livro debaixo do braço). Embaixo da régua, três estudantes reais de roupas simples estão em fila, sendo comparados a ela: o primeiro chega correndo olhando um relógio de bolso; o segundo boceja com um livro fechado; o terceiro levanta a mão animado. Um professor de óculos e colete, à direita, mede os três com uma fita métrica, pensativo.'],
  ],
  'laura-2': [
    [5, 'o poder pede legitimidade',
      'Cena: uma mão enorme e firme desce do alto da imagem, com o dedo indicador apontando para baixo. Embaixo, um grupo de pessoas pequenas (operário de boné, senhora de chapéu, estudante, comerciante de avental) caminha na direção apontada. Entre a mão e as pessoas, flutuando em arco, estão quatro objetos que simbolizam a legitimidade: uma coroa de louros, um selo oficial de cera, uma bandeira lisa num mastro e uma faixa presidencial. As pessoas olham para esses objetos, não para a mão.'],
    [8, 'o entregador recebe ordens pelo app',
      'Cena dividida em duas partes. À esquerda e em destaque: um jovem entregador de bicicleta, com capacete e mochila térmica quadrada nas costas, para no meio-fio olhando o celular; do celular saem setas, um cronômetro e uma estrela de avaliação que apontam para ele como ordens, e ele parece pressionado. À direita, menor: o dono de um pequeno restaurante, de avental, apenas entrega moedas numa bandeja, tranquilo, sem receber ordens.'],
  ],
  'laura-3': [
    [2, 'três réguas: lei, tradição, carisma',
      'Cena: três réguas de madeira gigantes, em pé lado a lado como colunas, da mesma altura e com marcas de medida. No topo de cada uma há um símbolo grande: na régua da esquerda, um livro de leis grosso e aberto; na do meio, uma árvore antiga com tronco largo e raízes profundas saindo pela base; na da direita, a figura de um homem de braços abertos com raios de luz atrás dele. Ao pé das réguas, um pequeno estudioso de óculos e terno observa as três, com a mão no queixo.'],
  ],
  'laura-4': [
    [2, 'até o chefe obedece à regra',
      'Cena: um chefe de terno, gravata e bigode e um cidadão comum de camisa simples e boné estão lado a lado, exatamente do mesmo tamanho, de pé no chão. Os dois olham para cima com o mesmo respeito para um enorme livro de regras aberto que flutua acima deles como um teto, com páginas cheias de linhas (sem letras legíveis). Nenhum dos dois está acima do outro. Composição simétrica e central.'],
    [5, 'a repartição: processo, carimbo e protocolo',
      'Cena: o balcão de uma repartição pública. Atrás do balcão, um servidor de óculos, camisa social e gravata carimba um documento com força. Sobre o balcão: pilhas altas de pastas de processo amarradas com barbante, uma bandeja de protocolo, um carimbo de madeira e um computador antigo com uma pequena etiqueta de patrimônio colada na lateral. Do outro lado, um cidadão espera com um papel na mão. Ao fundo, apenas a silhueta de um arquivo de gavetas.'],
  ],
  'laura-5': [
    [2, 'o burocrata concursado',
      'Cena: um funcionário público de meia-idade, magro, de óculos redondos, terno sóbrio e gravata, sentado ereto numa mesa de escritório arrumada, carimbando um documento. Na parede atrás dele: um diploma emoldurado e um quadro em forma de escada com degraus (a carreira), com uma setinha mostrando em qual degrau ele está. Na mesa, uma placa de cargo sem texto legível, um relógio de mesa e uma pilha de papéis bem alinhada. Expressão séria, disciplinada e neutra.'],
    [4, 'em cima o político, embaixo a máquina',
      'Cena: corte vertical de um prédio de três andares, como uma casa de bonecas aberta. No andar de cima, um ministro sorridente de terno e faixa acena e aperta a mão de alguém diante de fotógrafos. Nos dois andares de baixo, muitos técnicos de jaleco e óculos trabalham concentrados: um olha num microscópio, outro analisa frascos de remédio, outros examinam pastas e gráficos sem números. O andar de cima é vazio de trabalho; os de baixo, cheios.'],
  ],
  'laura-6': [
    [3, 'a máquina burocrática',
      'Cena: uma máquina gigantesca de engrenagens, alavancas e esteiras, construída com pastas de arquivo, gavetas, carimbos e pilhas de papel. Pequenos funcionários de terno e viseira operam as alavancas, giram manivelas e carregam papéis de um lado para o outro. À direita, em primeiro plano, um ministro baixinho de cartola e fraque empurra a máquina com as duas mãos e o corpo inclinado, suando, sem conseguir movê-la um centímetro.'],
    [8, 'informação é poder: o segredo oficial',
      'Cena: à esquerda, um alto funcionário corpulento, de terno escuro, bigode e queixo erguido com ar de superioridade, segura junto ao peito uma chave antiga enorme. No centro, um grande arquivo de aço com muitas gavetas, cada uma fechada com um cadeado pesado. À direita, um cidadão magro e curioso, de paletó amassado, encosta o rosto na lateral do arquivo para espiar por uma fresta, segurando uma folha de pedido na outra mão.'],
    [11, 'o concurso: porta aberta, escada longa',
      'Cena: no alto da imagem, uma porta aberta com luz saindo de dentro. Até ela sobe uma escada muito longa e íngreme feita de livros empilhados. Na base, uma pequena multidão de pessoas diversas olha para cima. Na escada, só sobem algumas pessoas com mochilas cheias, apostilas e garrafas de café; uma delas já está perto da porta. Na base, um trabalhador de uniforme com marmita olha a escada, sem tempo para subir.'],
  ],
  'laura-7': [
    [4, 'o duplo reino do senhor',
      'Cena: um rei gordo e barbudo, de coroa e manto de arminho, sentado num trono. O braço esquerdo dele está preso por uma corrente grossa a um livro antigo e enorme de costumes, apoiado no chão ao lado do trono. A mão direita, livre, joga moedas para alguns súditos ajoelhados à sua frente, escolhendo uns e virando o rosto para outros, que ficam de mãos vazias. Expressão de capricho no rosto do rei.'],
    [6, 'troca o rei, fica o trono',
      'Cena: no centro, um trono de pedra vazio e intacto. À esquerda, camponeses com foices, forcados e tochas carregam para fora um rei carrancudo, que se debate. À direita, outros camponeses carregam nos ombros um rei novo e sorridente na direção do mesmo trono. Os camponeses dos dois lados comemoram. O trono continua exatamente no mesmo lugar.'],
  ],
  'laura-8': [
    [2, 'a casa do rei vira Estado',
      'Cena: o salão de um castelo medieval com uma mesa comprida de madeira cheia de pães, carnes e jarras. Na cabeceira, o rei come com a coroa na cabeça. Ao longo da mesa, servidores e criados comem junto com ele. Um copeiro serve vinho de uma jarra; um mordomo segura uma bandeja. Pela porta aberta ao fundo vê-se um cavalariço escovando dois cavalos. Atmosfera de casa, não de escritório.'],
    [5, 'pagando o servidor com favores',
      'Cena: um servidor medieval gordinho, de chapéu de feltro, sentado atrás de uma mesa de madeira. À sua frente, uma fila de pessoas pedindo favores, cada uma com um presente diferente: um camponês com uma galinha, uma senhora com um saco de moedas, um comerciante com um barril pequeno. O servidor escolhe o que pegar com ar de quem decide o preço na hora. Não há nenhuma tabela de preços na parede.'],
  ],
  'laura-9': [
    [3, 'o patriarca sem polícia',
      'Cena: um avô de barba branca e bengala sentado numa cadeira de balanço no centro, falando com calma. Ao redor dele, em semicírculo, uma família grande de várias idades (filhos adultos, netos, uma criança no colo) ouve com respeito. Não há guardas, armas nem funcionários: só a família reunida num pátio simples.'],
    [7, 'o poder como patrimônio do senhor',
      'Cena: um sultão de turbante e barba pontuda sentado no alto de um trono muito elevado, no topo de uma escadaria. Ele segura um mapa enrolado do território como se fosse a escritura de uma propriedade. Ao redor do trono, uma guarda pessoal de soldados com lanças e mercenários armados. Bem embaixo, súditos pequenos e curvados olham para cima.'],
    [11, 'o vassalo dono dos próprios meios',
      'Cena dividida ao meio por uma linha vertical. À esquerda: um faraó egípcio de cocar distribui, de um armazém cheio de sacos e lanças, armas e comida a uma fila de soldados idênticos, todos dependentes dele. À direita: um cavaleiro medieval sozinho veste a própria armadura ao lado do próprio cavalo, com um pequeno castelo e campos dele ao fundo, independente.'],
  ],
  'laura-10': [
    [4, 'feudo: poder entregue em pacto',
      'Cena: um senhor feudal de manto e coroa simples, em pé, entrega com as duas mãos um pergaminho com selo de cera e uma espada a um cavaleiro de cota de malha ajoelhado diante dele. Ao fundo, à direita e menores, servidores recebem sacos de grãos e moedas de um mordomo. Clima solene de cerimônia.'],
    [7, 'a semente dos parlamentos',
      'Cena ao ar livre num campo: o rei inglês João, de coroa e cara contrariada, sentado a uma mesa de madeira, assina um grande pergaminho com uma pena. Ao redor da mesa, barões de armadura e capa, de braços cruzados ou com a mão na espada, observam de perto, pressionando. Ao fundo, tendas medievais e estandartes lisos.'],
  ],
  'laura-11': [
    [2, 'sem previsibilidade',
      'Cena: um comerciante de colete e mangas arregaçadas, com cara preocupada, segura uma bolsa de dinheiro junto ao peito. À sua frente, um cobrador de impostos de chapéu alto e sorriso esperto segura uma balança torta, com um prato bem mais baixo que o outro, e estende a mão aberta pedindo mais. No chão, papéis com valores riscados e reescritos (sem números legíveis).'],
    [5, 'capitalismo colonial',
      'Cena: um porto colonial do século XVIII. Ao fundo, dois navios a vela atracados. Em primeiro plano, homens escravizados carregam sacos pesados de açúcar pela prancha do navio, curvados pelo peso. Ao lado, um funcionário da Coroa, de peruca, casaca e chapéu tricórnio, anota tudo num livro grosso, sentado à sombra. Uma bandeira lisa com uma coroa tremula no mastro.'],
    [7, 'o Ocidente: juristas, reinos e cidades',
      'Cena em três partes lado a lado, como um tríptico. À esquerda: estudantes de toga e barrete numa universidade medieval, debruçados sobre livros grossos. No centro: dois castelos rivais, cada um com sua bandeira lisa, separados por um rio. À direita: uma cidade murada cheia de comerciantes, banqueiros com balanças e cofres. Uma linha fina separa as três partes.'],
  ],
  'laura-12': [
    [3, 'o líder carismático',
      'Cena: um profeta de barba longa e túnica simples, de pé no alto de uma rocha, de braços abertos e olhar intenso. Atrás dele, raios de luz desenhados em linhas retas. Abaixo da rocha, uma multidão de seguidores olha para cima com devoção: alguns ajoelhados, alguns com as mãos estendidas, uma criança nos ombros do pai.'],
    [7, 'o carisma precisa de provas',
      'Cena: um imperador chinês de túnica cerimonial bordada e chapéu imperial, de pé num campo seco, com o chão rachado e plantas mortas. Ele olha para um céu vazio, sem nuvens, com o sol forte. Ao redor, camponeses magros de chapéu cônico o observam de braços cruzados, desconfiados, cochichando entre si.'],
    [10, 'carisma vive de doações',
      'Cena: numa praça simples, um pequeno grupo de missionários jovens e entusiasmados, de roupas modestas, conversa com passantes e distribui folhetos (sem texto legível). No chão, à frente deles, uma cesta de vime com algumas moedas e pães doados. Não há prédio, palco nem estrutura: só pessoas animadas e a cesta.'],
  ],
  'laura-13': [
    [2, 'o momento da sucessão',
      'Cena: no centro de um salão de pedra, um trono vazio com uma coroa pousada sobre o assento. Ao redor, discípulos e conselheiros de túnica discutem acaloradamente, cada um apontando para um candidato diferente: um jovem tímido, um homem forte, uma criança. Expressões de dúvida e tensão. Ninguém senta no trono.'],
    [4, 'a fumaça branca',
      'Cena: o telhado de uma capela antiga de pedra com uma chaminé fina de onde sobe uma coluna de fumaça branca. Embaixo, numa praça, uma multidão compacta olha para cima ao mesmo tempo, apontando e com as mãos no rosto de expectativa. Alguns seguram terços.'],
    [7, 'a autoridade está no cargo',
      'Cena: num tribunal, uma toga preta de juiz está pendurada num cabide alto atrás da bancada de madeira, sem ninguém dentro dela. A toga recebe um feixe de luz de uma janela. Diante dela, na plateia, várias pessoas estão de pé, em silêncio e com respeito, como se o juiz estivesse ali.'],
  ],
  'laura-14': [
    [3, 'o sobrenome que abre portas',
      'Cena: na porta de um clube elegante, uma fila longa de pessoas comuns espera. Um homem bem vestido, de bigode fino e nariz empinado, passa na frente de todos mostrando ao porteiro um anel com brasão de família. O porteiro, de uniforme, abre a porta curvando-se. As pessoas da fila olham indignadas, de braços cruzados.'],
    [6, 'o fundador vira foto na parede',
      'Cena: um escritório moderno com mesas iguais, computadores, arquivos e funcionários de crachá trabalhando de cabeça baixa. Na parede ao fundo, um retrato antigo e emoldurado de um fundador carismático de olhar inspirado e cabelo revolto, com uma pequena luminária em cima. Nenhum funcionário olha para o retrato.'],
  ],
  'laura-15': [
    [0, 'a caixa de ferramentas de Weber',
      'Cena: uma caixa de ferramentas de metal aberta sobre uma mesa de madeira, vista de cima em leve ângulo. Dentro, três objetos arrumados lado a lado: um livro de leis grosso, uma chave antiga de ferro e uma tocha acesa com chamas desenhadas em linhas. Ao lado da caixa, um par de óculos redondos.'],
  ],
  'ze-1': [
    [2, 'o chefe e o quadro',
      'Cena: um rei de coroa sentado no topo de uma pirâmide humana. A pirâmide é feita de servidores, soldados, escrivães e cobradores, uns sobre os ombros dos outros. Os da base seguram espadas, chaves e ferramentas e olham uns para os outros de canto de olho, como se combinassem soltar o rei. O rei, lá em cima, sorri sem perceber.'],
    [4, 'sócios x contratados',
      'Cena dividida ao meio. À esquerda: um dono pequeno no centro de uma sala, cercado por gerentes sentados em tronos próprios, cada um com sua chave e seu cofre, olhando o dono de cima. À direita: o mesmo dono numa mesa maior, no centro, e funcionários iguais em mesas pequenas e organizadas, todos olhando para ele.'],
  ],
  'ze-2': [
    [3, 'o poder vira herança',
      'Cena: uma grande árvore genealógica com tronco grosso e muitos galhos. Em cada galho há um retrato oval de um membro da família, e cada um segura um objeto de poder: coroa, cálice, chave, espada, carimbo. Os mesmos objetos passam de um galho para o galho de baixo, de pai para filho, até as raízes.'],
    [6, 'o revolucionário vira estátua',
      'Cena dividida ao meio. À esquerda: um jovem rebelde de cabelo desgrenhado discursa em cima de um caixote de madeira, punho erguido, para uma multidão agitada. À direita: a mesma figura virou uma estátua de bronze imóvel e solene num pedestal alto, cercada por uma grade de ferro, com pombos em cima e pessoas passando sem olhar.'],
  ],
  'ze-3': [
    [2, 'o juramento do vassalo',
      'Cena: cerimônia medieval de homenagem dentro de um salão de pedra. Um cavaleiro de cota de malha está ajoelhado, com as mãos unidas entre as mãos do senhor feudal, que está de pé com manto e espada na cintura. Atrás do cavaleiro, outros cavaleiros esperam em fila. Pela janela, um castelo ao longe.'],
    [6, 'a corrente de lealdades',
      'Cena: uma corrente humana vertical que desce do topo para a base da imagem. No topo, o rei de coroa; abaixo dele, um nobre; abaixo, um cavaleiro; abaixo, um escudeiro. Cada um segura apenas a mão de quem está imediatamente acima. O rei estica o braço tentando alcançar o escudeiro lá embaixo e não consegue: o braço fica curto no meio do caminho.'],
  ],
  'ze-4': [
    [1, 'o rei manda fiscais',
      'Cena: um rei de coroa em pé no centro de um grande mapa estendido no chão, apontando. Dele partem, como raios, vários mensageiros a cavalo e fiscais a pé com pergaminhos e lunetas, indo em direção a pequenos castelos espalhados pelas bordas do mapa. Nos castelos, nobres espiam pelas janelas, desconfiados.'],
    [3, 'o rei e seus juristas',
      'Cena: em primeiro plano, numa mesa comprida, juristas de toga e peruca branca trabalham com pilhas de documentos, penas e tinteiros. Ao fundo, pela janela grande de um palácio, nobres de roupas luxuosas passeiam despreocupados por um jardim geométrico. Um rei com peruca longa observa os juristas por trás, satisfeito.'],
  ],
  'ze-5': [
    [1, 'feudo x prebenda',
      'Cena dividida ao meio. À esquerda: um cavaleiro ajoelhado recebe de um senhor uma espada, num gesto solene de juramento e honra. À direita: um homem de turbante e roupa oriental, sentado numa almofada, recebe de um governante um livro-caixa e um saco de moedas e confere as contas com um ábaco, com cara de negociante.'],
    [3, 'o arrecadador vira senhor',
      'Cena: em primeiro plano, um cobrador de impostos a cavalo recolhe sacos de grãos de camponeses curvados numa aldeia pobre. Ao fundo, sobre a colina da mesma terra, um palácio grande onde o mesmo cobrador aparece pequeno na varanda, agora vestido como um nobre e cercado por guardas próprios.'],
  ],
  'ze-6': [
    [4, 'guerra perdida, guerra vencida',
      'Cena dividida ao meio. À esquerda: um imperador de bigode e capacete pontudo, cabisbaixo, deixa a coroa cair no chão diante de soldados cansados e feridos. À direita: um general jovem, a cavalo, com uniforme de gala e chapéu bicorne, é recebido por uma multidão eufórica que joga flores numa praça republicana.'],
    [7, 'mais fraco que todos juntos',
      'Cena: uma mesa comprida de reunião. De um lado, sozinho, um diretor de escola de terno, suando e afrouxando a gravata. Do outro lado, uma fileira de professores e professoras de braços cruzados, sérios e unidos, ombro a ombro. Composição que deixa claro o desequilíbrio: um contra muitos.'],
  ],
  'ze-7': [
    [2, 'o carisma vira voto',
      'Cena: no centro, uma urna eleitoral grande sobre um pedestal, cercada por raios de luz como se fosse um altar. Ao redor, uma multidão de pessoas diversas ergue cédulas de papel acima da cabeça em direção à urna, com expressões de fé e esperança.'],
    [7, 'a voz do povo contra o sistema',
      'Cena: um orador em cima de um palanque, de braços abertos e boca aberta discursando com energia, falando diretamente para uma multidão enorme que o aclama. Atrás dele, bem pequenos e apagados, prédios de partidos, um parlamento e um tribunal ficam em segundo plano, como se ele passasse por cima deles.'],
    [13, 'regra fixa x justiça caso a caso',
      'Cena dividida ao meio. À esquerda: um juiz calmo, de toga, consulta um livro de leis aberto ao lado de uma balança perfeitamente equilibrada. À direita: outro juiz, nervoso, ouve uma multidão gritando na janela do tribunal, e sua balança pende bruscamente para um lado.'],
  ],
  'ze-8': [
    [2, 'o conselho que manda',
      'Cena: Senado romano. Senadores idosos de toga branca, sentados em bancos de pedra em semicírculo, falam todos ao mesmo tempo e apontam o dedo. No centro, um magistrado de pé, mais jovem, baixa a cabeça e anota obediente, como quem recebe ordens, apesar de ser ele quem deveria mandar.'],
    [4, 'decisão em grupo demora',
      'Cena: uma mesa redonda de conselho com dez pessoas de terno falando ao mesmo tempo, gesticulando, algumas bocejando, papéis espalhados. Na parede atrás, um grande relógio de ponteiros. No centro da mesa, um documento com um espaço de assinatura em branco, que ninguém assina.'],
    [8, 'o tesouro do rei x o cofre público',
      'Cena dividida ao meio. À esquerda: um rei sentado confortavelmente em cima de baús de ouro abertos, jogando moedas para cima como se fossem dele. À direita: um cofre público de ferro com vários cadeados diferentes, e três funcionários de óculos conferindo juntos um livro de contas, cada um com uma das chaves.'],
  ],
  'ze-9': [
    [2, 'sem Parlamento, sem imposto',
      'Cena: um rei estende a mão aberta pedindo um grande saco de moedas. Quem segura o saco é um grupo formado por um nobre, um padre e um burguês de cartola, juntos. O nobre aponta para um pergaminho sobre uma mesa, exigindo que o rei assine antes de receber o dinheiro.'],
    [5, 'quem manda no dinheiro manda',
      'Cena: uma balança gigante com três pratos pendurados num suporte central. Em cada prato, uma miniatura de prédio: um parlamento com cúpula, um tribunal com colunas e um palácio de governo. Os três estão em equilíbrio. Pendurada no centro, logo abaixo do suporte, uma grande bolsa de moedas.'],
  ],
  'ze-10': [
    [1, 'chapas disputando o grêmio',
      'Cena: o pátio de uma universidade. Dois grupos de estudantes jovens, cada um de um lado, com faixas e cartazes (sem texto legível), entregam folhetos aos colegas que passam. Um estudante no centro, de mochila, recebe folhetos dos dois lados ao mesmo tempo, confuso.'],
    [6, 'candidatos na prateleira',
      'Cena: o corredor de um supermercado. Na prateleira, em vez de produtos, há candidatos sorridentes de terno dentro de caixas e embalagens, como bonecos à venda. Eleitores empurram carrinhos e escolhem entre eles com cara de dúvida. Só existem as opções da prateleira.'],
    [9, 'o financiador escondido',
      'Cena: um candidato discursa num palco iluminado diante de uma plateia. Atrás da cortina do palco, escondida da plateia, uma mão grande segura cordões presos aos pulsos do candidato, como uma marionete. Ao lado da mão, no chão dos bastidores, um saco de dinheiro aberto.'],
  ],
  'ze-11': [
    [2, 'democracia direta em pequena escala',
      'Cena: uma praça de cidade pequena nas montanhas suíças, com casas de madeira e montanhas ao fundo. Cidadãos em pé, formando um círculo, levantam a mão para votar ao mesmo tempo. No centro do círculo, um homem conta as mãos. Clima simples e comunitário.'],
    [5, 'os notáveis na primeira fila',
      'Cena: uma reunião de associação de bairro num salão simples. Na primeira fila, poucos senhores bem vestidos e aposentados estão sentados confortavelmente, falando. Atrás deles, muitas cadeiras vazias. Pela janela do salão, trabalhadores de uniforme passam apressados para o trabalho, sem tempo de entrar.'],
    [7, 'o reitor passa, a burocracia fica',
      'Cena: o corredor de uma universidade. Na parede, uma sequência de retratos de reitores diferentes, emoldurados lado a lado. Embaixo dos retratos, sempre a mesma dupla de funcionários antigos, de cabelos brancos, cuida de um arquivo de gavetas com um molho de chaves na mão, tranquilos e com ar de quem manda.'],
  ],
  'ze-12': [
    [2, 'mandato livre x mandato vinculado',
      'Cena: num plenário, um deputado de terno está de pé, com a mão no peito, votando com convicção. Acima, na galeria, eleitores irritados levantam cartazes (sem texto legível) e apontam para ele, cobrando. O deputado olha para frente, sem se abalar.'],
    [4, 'o parlamento',
      'Cena: plenário de parlamento visto do alto, em leve diagonal. Deputados sentados em bancadas em semicírculo, separados em blocos de partidos por pequenos corredores. No centro, um deputado em pé discursa num púlpito. Na mesa principal, um presidente com um martelo.'],
    [7, 'a ampliação do voto',
      'Cena: uma fila diante de uma urna, mostrando a ampliação do voto ao longo do tempo. Na frente, um senhor de cartola e casaca do século XIX; atrás dele, uma mulher com chapéu e vestido dos anos 1930; depois, um trabalhador de macacão; por último, uma senhora idosa simples. Cada um segura sua cédula com orgulho.'],
  ],
  'ze-13': [
    [2, 'três classes',
      'Cena com três pessoas lado a lado, separadas por linhas finas. À esquerda: uma senhora elegante sentada numa poltrona, contando um molho de chaves de vários imóveis. No centro: uma médica de jaleco e estetoscópio no consultório. À direita: um motorista de aplicativo dentro do carro, olhando o celular preso no painel, com cara de cansado.'],
    [5, 'juntos x espalhados',
      'Cena dividida ao meio. À esquerda: dezenas de operários de macacão saem juntos pelo grande portão de uma fábrica com chaminés, conversando lado a lado. À direita: entregadores de moto espalhados por uma cidade vista de cima, cada um sozinho numa rua diferente, sem se ver.'],
    [10, 'dinheiro x prestígio',
      'Cena: a entrada de um clube tradicional com colunas. À esquerda, um novo-rico de terno chamativo, carregando sacos de dinheiro, é barrado pelo porteiro com a mão espalmada. À direita, um nobre idoso de roupas gastas e remendadas é recebido pelo mesmo porteiro com uma reverência profunda.'],
  ],
  'ze-14': [
    [0, 'ler o jornal com Weber',
      'Cena: uma mesa de madeira vista de cima em leve ângulo. Sobre ela, um jornal aberto (com colunas de linhas, sem texto legível), um par de óculos redondos apoiado em cima do jornal, um livro antigo de capa dura ao lado e uma xícara de café fumegante.'],
  ],
};

export const imagensPorSlide: Record<string, Imagem[]> = Object.fromEntries(
  Object.entries(defs).map(([slide, list]) => [
    slide,
    list.map(([apos, ideia, prompt], i) => ({ id: `${slide}-${i + 1}`, apos, ideia, prompt })),
  ]),
);

// Fotos reais do slide "o autor e a obra" (logo após a capa). Não são geradas por IA.
export const fotosAutorObra: Imagem[] = [
  {
    id: 'autor-weber', apos: -1, foto: true,
    ideia: 'Foto de Max Weber',
    legenda: 'Max Weber (1864–1920)',
    prompt: 'Use um retrato real de Max Weber. A foto mais conhecida é de 1918 e está em domínio público (procure "Max Weber 1918" na Wikimedia Commons). Prefira a versão em preto e branco, enquadrada do peito para cima, na vertical.',
  },
  {
    id: 'autor-obra', apos: -1, foto: true,
    ideia: 'Foto da obra usada no trabalho',
    legenda: 'WEBER, Max. Economia e sociedade, v. 1. Brasília: Editora UnB, 1999.',
    prompt: 'Tire uma foto da capa do livro que vocês usaram (Economia e sociedade, v. 1, Editora UnB), de frente, na vertical, com boa luz e sem reflexo. Se preferir, use uma foto do exemplar aberto nas páginas estudadas.',
  },
];
