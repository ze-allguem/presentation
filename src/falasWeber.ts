// Frases do Weber em pixel. Por slide: sobre o conteúdo daquele slide, com uma pitada de humor.

export const FALAS_SLIDE: Record<string, string[]> = {
  'capa': ['Bem-vindos à minha aula!', 'Preparados para falar de dominação?', 'Sim, sou eu mesmo. Em pixel.'],
  'autor-e-obra': ['Esse livro pesa mais que eu.', 'Foi a Marianne que organizou tudo.', 'Foto boa, né? 1918.'],
  'laura-1': ['Eu via a revolução pela janela!', 'Tipo ideal é régua, não retrato.', 'Morri em 1920 e o livro ficou pela metade...'],
  'laura-2': ['Dominação: chance de ser obedecido.', 'Sem legitimidade, ninguém aguenta.', 'O entregador do app que o diga.'],
  'laura-3': ['Legal, tradicional, carismática. Decorou?', 'Três réguas, não três caixas!', 'Carisma vem de "graça". Que graça.'],
  'laura-4': ['Até o chefe obedece à regra!', 'Professor não manda lavar o carro.', 'Competência, hierarquia, documento.'],
  'laura-5': ['Concurso público: meu sonho de consumo.', 'Nomeado, não eleito!', 'O burocrata perfeito usa carimbo.'],
  'laura-6': ['Ou burocracia, ou amadorismo!', 'Informação é poder. Shhh...', 'Resmungar contra São Burocrácio não adianta.'],
  'laura-7': ['"Sempre foi assim" não é argumento!', 'Troca o rei, fica o trono.', 'Coronelismo: eu avisei.'],
  'laura-8': ['Marechal cuidava de cavalo, sabia?', 'Propina: resto de patrimonialismo.', 'Ministro quer dizer servidor. Ironia.'],
  'laura-9': ['Patrimonialismo: o público vira quintal.', 'O sultão faz o que quer.', 'O Faoro leu meu livro, hein?'],
  'laura-10': ['Prebenda: salário à moda antiga.', 'Magna Carta: rei de castigo.', 'Feudo é pacto de honra.'],
  'laura-11': ['Sem previsibilidade, sem capitalismo.', 'Pior que imposto alto: imposto surpresa.', 'Holanda e Inglaterra saíram na frente.'],
  'laura-12': ['Carisma: quando te acham extraordinário.', 'Está escrito... mas eu vos digo!', 'Carisma não paga boleto.'],
  'laura-13': ['O líder morreu, e agora?', 'Fumaça branca é carisma rotinizado.', 'Respeito a toga, não o juiz.'],
  'laura-14': ['O fundador vira foto na parede.', '"Sabe com quem está falando?"', 'Quase no fim da Parte 1!'],
  'laura-15': ['Lei, tradição e carisma. Fechou!', 'Três réguas na mão e a dominação na cabeça.', 'Até a burocracia agradece a atenção.'],
  'ze-1': ['Quem controla os meios de governar?', 'Chefe ou equipe: quem manda mais?', 'Chefe sem quadro não governa nada.'],
  'ze-2': ['Filho de quem mandava, manda.', 'Fundar seita era fundar dinastia.', 'O sobrenome abre portas, infelizmente.'],
  'ze-3': ['Ninguém obedece ao chefe do chefe!', 'Rei feudal: frágil de dar dó.', 'Jurei lealdade só pelo café.'],
  'ze-4': ['Os juristas salvaram os reis.', 'Luís XIV levou a nobreza pra Versalhes.', 'Nasce o Estado moderno!'],
  'ze-5': ['Prebenda: renda, não honra.', 'O cobrador virou dono da terra.', '"Feudalismo digital" é metáfora!'],
  'ze-6': ['Toda obediência é uma crença.', 'Mais fraco que todos juntos!', 'Guerra vencida assusta república.'],
  'ze-7': ['Democracia: carisma de cabeça pra baixo.', 'A eleição é a forma; o carisma, o conteúdo.', 'Formal ou material? Formal, por favor.'],
  'ze-8': ['Comissão de 15? Ninguém é culpado.', 'Colegialidade não é democracia!', 'Sugestão do chefe é ordem.'],
  'ze-9': ['Quem manda no dinheiro manda.', 'Sem orçamento, sem rei.', 'O Montesquieu aprovaria.'],
  'ze-10': ['Partido: produto na prateleira.', 'Quem paga a campanha?', 'Chapa do grêmio também é partido.'],
  'ze-11': ['Democracia direta: só com 30 pessoas.', 'Viver para a política, não da política.', 'O reitor passa, a burocracia fica.'],
  'ze-12': ['Mandato livre: "mudei de ideia!"', 'Parlamento não é sinônimo de democracia.', 'Voto feminino só em 1932, aqui.'],
  'ze-13': ['Classe é mercado; estamento é prestígio.', 'Dinheiro não compra prestígio.', 'O Marx que me desculpe.'],
  'ze-14': ['Fim! Agora podem aplaudir.', 'Cem anos depois e ainda sirvo.', 'Perguntas? Só não muito difíceis.'],
  'referencias': ['Leiam o livro todo, hein!', 'Página 139 a 203. Só isso.', 'Obrigado pela atenção!'],
};

// Humor geral, vale para qualquer slide.
export const HUMOR = [
  'Alguém trouxe café?',
  'Isso cai na prova, hein?',
  'Escrevi tudo isso à mão, viu?',
  'Sem raiva e sem paixão!',
  'Burocracia: eu avisei.',
  'Cuidado que eu viro tipo ideal.',
];

// Quando o slide demora demais, ele reclama.
export const RECLAMACOES = [
  'Vai demorar muito nesse slide?',
  'Próximo slide, por favor!',
  'Até a burocracia é mais rápida!',
  'Isso não estava no meu tipo ideal...',
  'Meu carisma está acabando aqui.',
  'Já dá para passar, né?',
  'Eu escrevi 3 volumes mais rápido.',
];

// Comentário quando o mouse para em cima de um trecho do texto.
const MODELOS = [
  (t: string) => `"${t}" — anotem isso!`,
  (t: string) => `Ah, "${t}"... essa é das boas.`,
  (t: string) => `Prestem atenção: "${t}".`,
  (t: string) => `"${t}"? Escrevi isso em 1919, viu?`,
  (t: string) => `Isso cai na prova: "${t}".`,
  (t: string) => `"${t}". Eu avisei!`,
];

function curto(t: string, max = 46) {
  const limpo = t.replace(/\s+/g, ' ').replace(/[“”"]/g, '').trim();
  if (limpo.length <= max) return limpo.replace(/[.:;,]$/, '');
  return limpo.slice(0, max).replace(/\s+\S*$/, '') + '…';
}

export function comentarTrecho(el: Element): string {
  const caixa = el.closest('.aula-box');
  const sorteio = <T,>(lista: T[]) => lista[Math.floor(Math.random() * lista.length)];
  const forte = el.querySelector('strong')?.textContent;
  if (caixa?.classList.contains('aula-box--exemplo')) return sorteio(['Exemplo de hoje! No meu tempo nem tinha celular.', 'Viram? Ainda acontece hoje.', 'Esse exemplo eu aprovo.']);
  if (caixa?.classList.contains('aula-box--contexto')) return sorteio(['Ah, que época... só confusão.', 'Eu estava lá. Não recomendo.', 'História: a burocracia do passado.']);
  if (caixa?.classList.contains('aula-box--revisao')) return sorteio(['Revisão! Tirem foto disso.', 'Resumo pra quem cochilou.', 'Isso aqui salva na prova.']);
  if (caixa?.classList.contains('aula-box--conceito')) return forte ? `Conceito-chave: "${curto(forte, 34)}". Decorem!` : 'Conceito-chave! Decorem esse.';
  if (el.closest('td, th')) return sorteio(['Tabelas: a burocracia agradece.', 'Organizado como um bom funcionário.', 'Linha por linha, sem pressa.']);
  if (el.matches('h3')) return `Agora: ${curto(el.textContent ?? '', 40)}.`;
  const base = forte ?? el.textContent ?? '';
  return sorteio(MODELOS)(curto(base));
}
