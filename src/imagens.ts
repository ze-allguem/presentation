// Imagens que ilustram as seções dos slides (1 a 3 por slide).
// `apos` = número do bloco do slide depois do qual a imagem aparece (começa em 0).
// Cada imagem tem um id (ex.: laura-6-2). Para fixar a imagem no projeto, salve em public/imagens/<id>.png.
// Também dá para inserir clicando no espaço da imagem (fica guardada no navegador).

export const ESTILO =
  'Estilo: ilustração em gravura (linocut), preto e branco, alto contraste, traço grosso, fundo branco liso, sem texto nem letras, proporção 4:3.';

export type Imagem = { id: string; apos: number; ideia: string; prompt: string };

type Def = [apos: number, ideia: string, prompt: string];

const defs: Record<string, Def[]> = {
  'laura-1': [
    [4, 'Weber escrevendo; revolução pela janela', 'Max Weber, homem de barba cheia e terno escuro do começo do século XX, escrevendo à mão numa escrivaninha abarrotada de livros e papéis. Pela janela grande ao lado vê-se uma rua de Munique tomada por uma multidão com bandeiras e soldados. Contraste entre a calma do escritório e a agitação lá fora.'],
    [8, 'o tipo ideal como régua', 'Uma régua gigante deitada na horizontal com a silhueta de um "aluno perfeito" desenhada nela; diante dela, três alunos reais de alturas e posturas diferentes sendo comparados à régua (um com livro, um olhando o relógio, um levantando a mão).'],
  ],
  'laura-2': [
    [5, 'o poder pede legitimidade', 'Uma mão grande vinda do alto apontando para baixo; abaixo, várias pessoas pequenas obedecendo. Entre a mão e as pessoas flutuam símbolos de legitimidade: uma coroa de louros, uma bandeira, um selo oficial e um microfone de discurso de posse.'],
    [8, 'o entregador recebe ordens pelo app', 'Um entregador de bicicleta com mochila térmica olhando o celular, de onde saem setas, um cronômetro e uma estrela de avaliação apontando para ele como ordens; ao fundo, um restaurante apenas pagando uma taxa numa caixa registradora, sem receber ordens.'],
  ],
  'laura-3': [
    [2, 'três réguas: lei, tradição, carisma', 'Três réguas em pé lado a lado como colunas. No topo de cada uma, um símbolo grande: na primeira, um livro de leis aberto; na segunda, uma árvore antiga de raízes profundas; na terceira, uma figura humana de braços abertos com raios de luz atrás.'],
  ],
  'laura-4': [
    [2, 'até o chefe obedece à regra', 'Um chefe de terno e gravata e um cidadão comum, lado a lado e exatamente do mesmo tamanho, ambos olhando para cima, para um enorme livro de regras aberto que paira acima deles como um teto.'],
    [5, 'a repartição: processo, carimbo e protocolo', 'Balcão de repartição pública com pilhas de processos numerados, um carimbo, uma bandeja de protocolo e um computador; o servidor usa o computador, mas uma etiqueta de patrimônio na máquina mostra que ela é da instituição.'],
  ],
  'laura-5': [
    [2, 'o burocrata concursado', 'Funcionário público de terno sentado à mesa, carimbando um documento; na parede atrás dele, um diploma emoldurado e um quadro com a escada da carreira (degraus numerados); na mesa, uma placa com o cargo.'],
    [4, 'em cima o político, embaixo a máquina', 'Corte vertical de um prédio: no último andar, um ministro sorridente apertando mãos e acenando; nos andares de baixo, muitos técnicos de jaleco e óculos analisando documentos, microscópios e planilhas.'],
  ],
  'laura-6': [
    [3, 'a máquina burocrática', 'Uma enorme máquina de engrenagens feita de pastas, arquivos e carimbos, operada por pequenos funcionários; um ministro de cartola tenta empurrá-la sozinho, sem conseguir movê-la.'],
    [8, 'informação é poder: o segredo oficial', 'Um funcionário guardando com uma grande chave um arquivo de aço cheio de gavetas com cadeados; do lado de fora, um cidadão tenta espiar por uma fresta, segurando um papel de pedido.'],
    [11, 'o concurso: porta aberta, escada longa', 'Uma porta aberta no alto de uma escada muito longa feita de livros empilhados; muitas pessoas na base, mas só algumas, com tempo e mochilas cheias, conseguem subir.'],
  ],
  'laura-7': [
    [4, 'o duplo reino do senhor', 'Um rei no trono com o braço esquerdo acorrentado a um grande livro antigo de costumes e a mão direita livre distribuindo moedas e favores a súditos ajoelhados, escolhendo uns e ignorando outros.'],
    [6, 'troca o rei, fica o trono', 'Camponeses com foices e tochas retirando um rei de um trono enquanto outro rei, sorridente, já é carregado para sentar no mesmo trono; o trono permanece no centro, intacto.'],
  ],
  'laura-8': [
    [2, 'a casa do rei vira Estado', 'Salão de castelo medieval: o rei à cabeceira de uma mesa farta, servidores comendo na mesma mesa, um copeiro servindo vinho e, ao fundo, um cavalariço cuidando dos cavalos (a origem do "marechal").'],
    [5, 'pagando o servidor com favores', 'Um servidor medieval atrás de uma mesa recebendo uma galinha, um saco de moedas e um barril de quem pede favores; não há tabela de preços, só uma fila de pessoas com presentes diferentes.'],
  ],
  'laura-9': [
    [3, 'o patriarca sem polícia', 'Um avô de bengala sentado numa cadeira de balanço no centro de uma grande família reunida, todos ouvindo com respeito; não há guardas nem armas, só o círculo da família ao redor dele.'],
    [7, 'o poder como patrimônio do senhor', 'Um senhor sentado num trono muito alto, cercado de soldados e mercenários, segurando um mapa do território como se fosse uma escritura de propriedade; abaixo, súditos pequenos.'],
    [11, 'o vassalo dono dos próprios meios', 'Cena dividida ao meio: à esquerda, o faraó distribuindo armas e comida de seus armazéns a soldados idênticos; à direita, um cavaleiro vestindo a própria armadura, com seu cavalo e suas terras ao fundo.'],
  ],
  'laura-10': [
    [4, 'feudo: poder entregue em pacto', 'Senhor feudal entregando um pergaminho com selo e uma espada a um cavaleiro ajoelhado; ao fundo, sacos de grãos e moedas sendo distribuídos a outros servidores.'],
    [7, 'a semente dos parlamentos', 'Barões medievais de armadura em torno de uma mesa num campo, diante do rei, que assina um grande pergaminho a contragosto; tendas e estandartes ao fundo (Magna Carta, 1215).'],
  ],
  'laura-11': [
    [2, 'sem previsibilidade', 'Um comerciante preocupado diante de um cobrador de impostos que segura uma balança torta e um papel com valores riscados e reescritos; o comerciante segura uma bolsa sem saber quanto vai pagar.'],
    [5, 'capitalismo colonial', 'Porto colonial com navios à vela, escravizados carregando sacos de açúcar, e um funcionário da Coroa anotando tudo num livro; brasão real numa bandeira.'],
    [7, 'o Ocidente: juristas, reinos e cidades', 'Três cenas lado a lado: uma universidade medieval com estudantes de toga, dois reinos com castelos rivais e bandeiras, e uma cidade murada cheia de comerciantes e bancos.'],
  ],
  'laura-12': [
    [3, 'o líder carismático', 'Um profeta de braços abertos no alto de uma rocha, com raios de luz atrás dele; abaixo, uma multidão olhando para cima com devoção, alguns ajoelhados.'],
    [7, 'o carisma precisa de provas', 'Imperador chinês com túnica cerimonial de pé num campo seco e rachado, olhando para o céu sem chuva, enquanto camponeses o observam desconfiados.'],
    [10, 'carisma vive de doações', 'Um pequeno grupo de missionários entusiasmados numa praça, com uma cesta de doações no chão e voluntários distribuindo panfletos; nenhum prédio, nenhuma estrutura, só pessoas.'],
  ],
  'laura-13': [
    [2, 'o momento da sucessão', 'Um trono vazio no centro de um salão, com uma coroa sobre o assento; ao redor, discípulos e conselheiros discutindo e apontando para diferentes candidatos.'],
    [4, 'a fumaça branca', 'Fumaça branca saindo da chaminé de uma capela antiga, com uma multidão na praça olhando para cima à espera.'],
    [7, 'a autoridade está no cargo', 'Uma toga de juiz pendurada num cabide diante de uma bancada de tribunal, sem ninguém dentro, mas iluminada com respeito; pessoas na plateia em pé diante dela.'],
  ],
  'laura-14': [
    [3, 'o sobrenome que abre portas', 'Um homem bem vestido passando à frente de uma fila longa, mostrando um anel de brasão de família ao porteiro, que abre a porta; as pessoas da fila olham indignadas.'],
    [6, 'o fundador vira foto na parede', 'Retrato antigo emoldurado de um fundador carismático pendurado na parede de um escritório moderno, com mesas, arquivos, crachás e funcionários trabalhando sem olhar para o retrato.'],
  ],
  'laura-15': [
    [0, 'a caixa de ferramentas de Weber', 'Uma caixa de ferramentas aberta sobre uma mesa de madeira, contendo três objetos: um livro de leis, uma chave antiga e uma tocha acesa.'],
  ],
  'ze-1': [
    [2, 'o chefe e o quadro', 'Um rei no topo de uma pirâmide humana; as pessoas da base, que o sustentam, seguram espadas, chaves e ferramentas e olham umas para as outras, como se pudessem soltá-lo.'],
    [4, 'sócios x contratados', 'Duas empresas lado a lado: à esquerda, gerentes sentados em tronos próprios em volta de um dono pequeno; à direita, funcionários em mesas iguais e o dono numa mesa maior no centro.'],
  ],
  'ze-2': [
    [3, 'o poder vira herança', 'Árvore genealógica em que cada galho segura um objeto de poder (coroa, cálice, chave, espada, carimbo de cartório), passando de pai para filho ao longo das gerações.'],
    [6, 'o revolucionário vira estátua', 'De um lado, um jovem rebelde discursando sobre um caixote para uma multidão; do outro, a mesma figura transformada em estátua de bronze imóvel numa praça, cercada por grades.'],
  ],
  'ze-3': [
    [2, 'o juramento do vassalo', 'Cerimônia medieval de homenagem: cavaleiro ajoelhado com as mãos entre as mãos do senhor, outros cavaleiros em fila e um castelo ao fundo.'],
    [6, 'a corrente de lealdades', 'Uma corrente vertical de figuras: rei no topo, abaixo um vassalo, abaixo um subvassalo, abaixo outro; cada um segura só a mão de quem está imediatamente acima, e o rei não alcança os de baixo.'],
  ],
  'ze-4': [
    [1, 'o rei manda fiscais', 'Um rei no centro de um mapa enviando mensageiros a cavalo e fiscais com pergaminhos para castelos espalhados pelo território, como raios saindo do centro.'],
    [3, 'o rei e seus juristas', 'Palácio de Versalhes com nobres passeando nos jardins ao fundo e, em primeiro plano, juristas de toga trabalhando com pilhas de documentos para o rei.'],
  ],
  'ze-5': [
    [1, 'feudo x prebenda', 'Cena dividida ao meio: à esquerda, um cavaleiro recebe uma espada num juramento de honra; à direita, um homem recebe um livro-caixa e um saco de moedas, conferindo números.'],
    [3, 'o arrecadador vira senhor', 'Cobrador de impostos a cavalo recolhendo sacos de uma aldeia; ao fundo, sobre a mesma terra, o palácio onde ele passou a morar, com seus próprios guardas.'],
  ],
  'ze-6': [
    [4, 'guerra perdida, guerra vencida', 'Cena dividida: à esquerda, um rei derrotado deixa a coroa cair no chão diante de soldados cansados; à direita, um general a cavalo é recebido por uma multidão com flores numa república.'],
    [7, 'mais fraco que todos juntos', 'Um diretor sozinho de um lado de uma mesa comprida e, do outro lado, uma fileira de professores de braços cruzados, unidos.'],
  ],
  'ze-7': [
    [2, 'o carisma vira voto', 'Uma multidão erguendo cédulas de voto em direção a uma urna grande no centro, que brilha com raios como se fosse um altar.'],
    [7, 'a voz do povo contra o sistema', 'Orador num palanque de braços abertos falando direto para uma multidão enorme, por cima de prédios de partidos e instituições que ficam pequenos atrás dele.'],
    [13, 'regra fixa x justiça caso a caso', 'Cena dividida: à esquerda, um juiz aplicando um livro de leis com uma balança equilibrada; à direita, um juiz decidindo pelo grito de uma multidão, com a balança pendendo.'],
  ],
  'ze-8': [
    [2, 'o conselho que manda', 'Senado romano: senadores de toga sentados em semicírculo "aconselhando" um magistrado de pé, que baixa a cabeça como quem recebe ordens.'],
    [4, 'decisão em grupo demora', 'Mesa redonda de conselho com muitas pessoas falando ao mesmo tempo e um grande relógio na parede marcando a demora; papéis espalhados e ninguém assinando.'],
    [8, 'o tesouro do rei x o cofre público', 'Cena dividida: à esquerda, um rei sentado sobre baús de ouro como se fossem seus; à direita, um cofre público com vários cadeados e funcionários conferindo livros de contas.'],
  ],
  'ze-9': [
    [2, 'sem Parlamento, sem imposto', 'Um rei estendendo a mão para pedir um saco de moedas, enquanto um grupo de nobres, padres e burgueses segura o saco e aponta para um pergaminho a ser assinado.'],
    [5, 'quem manda no dinheiro manda', 'Balança com três pratos equilibrados: um parlamento, um tribunal e um palácio de governo; no centro, pendurada, uma grande bolsa de moedas.'],
  ],
  'ze-10': [
    [1, 'chapas disputando o grêmio', 'Estudantes de duas chapas rivais com faixas e cartazes (sem letras) num pátio de universidade, distribuindo panfletos para colegas.'],
    [6, 'candidatos na prateleira', 'Prateleira de supermercado com candidatos sorridentes em embalagens, como produtos, e eleitores com carrinhos escolhendo entre eles.'],
    [9, 'o financiador escondido', 'Um candidato discursando num palco iluminado; atrás da cortina, escondida, uma mão grande segura cordões presos aos braços dele, como uma marionete, com um saco de dinheiro ao lado.'],
  ],
  'ze-11': [
    [2, 'democracia direta em pequena escala', 'Assembleia ao ar livre na praça de uma pequena cidade suíça, cidadãos de mão erguida votando em círculo, montanhas ao fundo.'],
    [5, 'os notáveis na primeira fila', 'Reunião de associação de bairro: na primeira fila, poucos senhores bem vestidos e aposentados sentados confortavelmente; no fundo, cadeiras vazias e, pela janela, trabalhadores passando apressados para o trabalho.'],
    [7, 'o reitor passa, a burocracia fica', 'Uma sequência de retratos de reitores trocados numa parede, enquanto embaixo, sempre os mesmos funcionários antigos cuidam de armários de arquivos com chaves na mão.'],
  ],
  'ze-12': [
    [2, 'mandato livre x mandato vinculado', 'Um deputado de pé no plenário votando com convicção, enquanto na galeria eleitores levantam cartazes (sem letras) e apontam para ele, cobrando.'],
    [4, 'o parlamento', 'Plenário de parlamento visto de cima, deputados sentados em semicírculo divididos em blocos de partidos e um deputado em pé discursando ao centro.'],
    [7, 'a ampliação do voto', 'Fila histórica diante de uma urna: um homem de cartola, uma mulher com chapéu dos anos 1930, um trabalhador de macacão e uma senhora idosa, cada um com sua cédula.'],
  ],
  'ze-13': [
    [2, 'três classes', 'Três pessoas lado a lado: uma senhora contando chaves de vários imóveis, uma médica de jaleco no consultório e um motorista de aplicativo no carro olhando o celular.'],
    [5, 'juntos x espalhados', 'Cena dividida: à esquerda, operários saindo juntos do portão de uma grande fábrica; à direita, entregadores de moto espalhados por uma cidade, cada um sozinho.'],
    [10, 'dinheiro x prestígio', 'Um novo-rico carregando sacos de dinheiro sendo barrado na porta de um clube tradicional, enquanto um nobre de roupas gastas é recebido com reverência.'],
  ],
  'ze-14': [
    [0, 'ler o jornal com Weber', 'Óculos redondos sobre um jornal aberto, com um livro antigo de Max Weber ao lado, numa mesa de madeira com uma xícara de café.'],
  ],
};

export const imagensPorSlide: Record<string, Imagem[]> = Object.fromEntries(
  Object.entries(defs).map(([slide, list]) => [
    slide,
    list.map(([apos, ideia, prompt], i) => ({ id: `${slide}-${i + 1}`, apos, ideia, prompt })),
  ]),
);
