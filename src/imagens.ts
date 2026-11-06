// Imagens dos slides. Salve cada imagem gerada em public/imagens/<id do slide>.png
// (ex.: public/imagens/laura-3.png). Enquanto o arquivo não existir, o slide mostra um espaço reservado.

export const ESTILO =
  'Estilo: ilustração em gravura (linocut), preto e branco, alto contraste, traço grosso, fundo branco liso, sem texto nem letras, proporção 4:3.';

export const imagens: Record<string, { ideia: string; prompt: string }> = {
  'laura-1': { ideia: 'Weber escrevendo, revolução pela janela', prompt: 'Max Weber, homem de barba cheia e terno do começo do século XX, escrevendo numa escrivaninha cheia de livros; pela janela ao lado se vê uma multidão com bandeiras na rua.' },
  'laura-2': { ideia: 'quem manda e quem obedece', prompt: 'Uma mão grande apontando de cima e várias pessoas pequenas abaixo seguindo a direção indicada; acima da mão, uma coroa de louros representando a legitimidade.' },
  'laura-3': { ideia: 'três réguas: lei, tradição, carisma', prompt: 'Três réguas lado a lado; na ponta de cada uma, um símbolo: um livro de leis, uma árvore antiga com raízes profundas, uma figura humana com raios de luz atrás.' },
  'laura-4': { ideia: 'até o chefe obedece à regra', prompt: 'Um chefe de terno e um cidadão comum, lado a lado e do mesmo tamanho, ambos olhando para cima, para um enorme livro de regras aberto que paira acima deles.' },
  'laura-5': { ideia: 'o burocrata e seus processos', prompt: 'Funcionário público de terno sentado em uma mesa de repartição com pilhas de processos numerados, carimbo na mão e um diploma emoldurado na parede.' },
  'laura-6': { ideia: 'a máquina burocrática', prompt: 'Uma enorme máquina de engrenagens feita de pastas e arquivos, operada por pequenos funcionários; um ministro de cartola tenta empurrá-la sozinho, sem sucesso.' },
  'laura-7': { ideia: 'o duplo reino do senhor', prompt: 'Um rei no trono com uma das mãos acorrentada a um grande livro antigo de costumes e a outra mão distribuindo moedas a súditos ajoelhados.' },
  'laura-8': { ideia: 'a casa do rei vira Estado', prompt: 'Salão de castelo medieval: o rei à cabeceira de uma mesa farta, servidores comendo na mesma mesa, um copeiro servindo vinho e um cavalariço com cavalos ao fundo.' },
  'laura-9': { ideia: 'do patriarca ao sultão', prompt: 'Sequência de quatro figuras da esquerda para a direita: um ancião com cajado, um patriarca com a família, um rei com guardas armados e um sultão isolado num trono alto cercado de soldados.' },
  'laura-10': { ideia: 'pagando o servidor: feudo e prebenda', prompt: 'Senhor feudal entregando um pergaminho e uma espada a um cavaleiro ajoelhado; ao fundo, sacos de grãos e moedas sendo distribuídos a servidores.' },
  'laura-11': { ideia: 'sem previsibilidade, sem capitalismo', prompt: 'Comerciante num porto colonial com navios e sacos de açúcar, olhando preocupado para um cobrador de impostos que segura uma balança torta.' },
  'laura-12': { ideia: 'o líder carismático', prompt: 'Um profeta de braços abertos no alto de uma rocha, com raios de luz atrás dele, e uma multidão abaixo olhando para cima com devoção.' },
  'laura-13': { ideia: 'a sucessão: a fumaça branca', prompt: 'Fumaça branca saindo da chaminé de uma capela antiga, com uma multidão na praça olhando para cima à espera.' },
  'laura-14': { ideia: 'o fundador vira foto na parede', prompt: 'Retrato antigo emoldurado de um fundador pendurado na parede de um escritório moderno, com mesas, arquivos e funcionários de crachá trabalhando.' },
  'laura-15': { ideia: 'a caixa de ferramentas de Weber', prompt: 'Uma caixa de ferramentas aberta contendo três objetos: um livro de leis, uma chave antiga e uma tocha acesa.' },
  'ze-1': { ideia: 'o chefe e o quadro', prompt: 'Um rei no topo de uma pirâmide humana; as pessoas da base, que o sustentam, seguram espadas, chaves e ferramentas e olham umas para as outras.' },
  'ze-2': { ideia: 'o poder vira herança', prompt: 'Árvore genealógica em que cada galho segura um objeto de poder (coroa, cálice, chave, espada), passando de geração em geração.' },
  'ze-3': { ideia: 'o juramento do vassalo', prompt: 'Cerimônia medieval de homenagem: cavaleiro ajoelhado com as mãos entre as mãos do senhor, outros cavaleiros em fila e um castelo ao fundo.' },
  'ze-4': { ideia: 'o rei e seus juristas', prompt: 'Palácio com nobres passeando no jardim ao fundo e, em primeiro plano, juristas de toga trabalhando com pilhas de documentos para o rei.' },
  'ze-5': { ideia: 'o arrecadador vira senhor', prompt: 'Cobrador de impostos a cavalo recolhendo sacos de uma aldeia; ao fundo, sobre a mesma terra, o palácio onde ele passou a morar.' },
  'ze-6': { ideia: 'mais fraco que todos juntos', prompt: 'Um diretor sozinho de um lado de uma mesa comprida e, do outro lado, uma fileira de professores de braços cruzados, unidos.' },
  'ze-7': { ideia: 'o carisma das urnas', prompt: 'Orador num palanque de braços abertos diante de uma multidão que ergue cédulas de voto; urnas em primeiro plano.' },
  'ze-8': { ideia: 'governar em grupo', prompt: 'Mesa redonda de conselho com muitas pessoas falando ao mesmo tempo e um grande relógio na parede marcando a demora.' },
  'ze-9': { ideia: 'poderes divididos e o orçamento', prompt: 'Balança com três pratos equilibrados: um parlamento, um tribunal e um palácio de governo; no centro, uma bolsa de moedas.' },
  'ze-10': { ideia: 'candidatos na prateleira', prompt: 'Prateleira de supermercado com candidatos em embalagens, como produtos, e eleitores com carrinhos escolhendo; atrás da prateleira, uma mão escondida segurando dinheiro.' },
  'ze-11': { ideia: 'democracia direta e notáveis', prompt: 'Assembleia ao ar livre na praça de uma cidade pequena, cidadãos de mão erguida votando; na primeira fila, poucos senhores bem vestidos.' },
  'ze-12': { ideia: 'o parlamento', prompt: 'Plenário de parlamento visto de cima, deputados sentados em semicírculo e um deputado em pé discursando.' },
  'ze-13': { ideia: 'dinheiro x prestígio', prompt: 'Um novo-rico carregando sacos de dinheiro sendo barrado na porta de um clube tradicional, enquanto um nobre de roupas gastas é recebido com reverência.' },
  'ze-14': { ideia: 'ler o jornal com Weber', prompt: 'Óculos redondos sobre um jornal aberto, com um livro antigo de Max Weber ao lado, numa mesa.' },
};
