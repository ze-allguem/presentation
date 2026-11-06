import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { weberSlides } from '../src/weber.ts';

const markdown = (text) => text.replace(/<strong[^>]*>/g, '**').replace(/<\/strong>/g, '**').replace(/<[^>]+>/g, '');
const lines = [
  '# Max Weber: Economia e sociedade', '',
  '## Organização', '',
  'São 18 slides de conteúdo para Laura (p. 139–166) e 18 para Zé (p. 167–202), além de capa e referências. A numeração das páginas é a impressa no livro.', '',
  'As explicações usam palavras mais simples. Somente os trechos entre aspas, acompanhados de página, repetem as palavras do livro. O apoio para a fala traz explicações adicionais para estudar e apresentar. Ele fica separado do texto mostrado nos slides.', '',
  '## Referência informada para a atividade', '',
  'WEBER, Max. Economia e sociedade. v. 1 e 2. Brasília: UnB, 1999/2004.', '',
  'Foram estudados trechos do capítulo III, “Os tipos de dominação”, e do início do capítulo IV, “Estamentos e classes”. Os arquivos não incluem as páginas com os dados da edição. Por isso, a referência acima foi mantida como José informou.', '',
  '## Localização nos arquivos', '',
  '- PDF da Laura: “Laura - Max Weber - Economia e Sociedade - Volume 1 - Parte 1-179-207.pdf”. A página 1 do arquivo corresponde à página 139 do livro. Para localizar uma página impressa, subtrair 138.',
  '- PDF do Zé: “Zé - Max Weber.pdf”. A página 1 do arquivo corresponde à página 167 do livro. Para localizar uma página impressa, subtrair 166.',
  '- O PDF da Laura também inclui a página 167, e o do Zé vai até 203. A apresentação respeita a divisão combinada, sem utilizar conteúdo posterior à página 202.', ''
];

for (const [i, slide] of weberSlides.entries()) {
  const number = slide.presenter === 'Laura' ? i : i - 18;
  lines.push(`## Slide ${String(i + 1).padStart(2, '0')}: ${slide.title}`, '',
    `${slide.presenter}${slide.presenter !== 'Laura e Zé' ? ` · parte ${number} de 18` : ''}${slide.pages ? ` · p. ${slide.pages}` : ''}`, '',
    '### Texto do slide', '', ...slide.content.flatMap(p => [markdown(p), '']));
  if (slide.quote) lines.push('### Citação direta', '', `> ${slide.quote}`, '', `Fonte: WEBER, Max. Economia e sociedade, p. ${slide.quotePage}.`, '');
  lines.push('### Apoio para a fala', '', slide.notes || '', '', '---', '');
}

const body = lines.join('\n');
for (const relative of ['../docs/ROTEIRO-WEBER.md', '../public/weber-roteiro.md']) {
  const target = fileURLToPath(new URL(relative, import.meta.url));
  await mkdir(fileURLToPath(new URL('.', new URL(relative, import.meta.url))), { recursive: true });
  await writeFile(target, body, 'utf8');
}
console.log(`Roteiro exportado: ${weberSlides.length} slides; Laura: ${weberSlides.filter(s => s.presenter === 'Laura').length}; Zé: ${weberSlides.filter(s => s.presenter === 'Zé').length}; citações diretas: ${weberSlides.filter(s => s.quote).length}.`);
