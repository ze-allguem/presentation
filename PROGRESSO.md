# Progresso

## 2026-11-05: fundo interativo e numeração discreta

Elementos SVG da apresentação original reutilizados no fundo de Weber, com deslocamento pelo mouse. A atualização usa variáveis CSS e requestAnimationFrame, sem atualizar o estado React a cada movimento. O modo de redução de movimento usa um deslocamento menor, sem suavização prolongada. As figuras não recebem cliques e ficam fora da leitura assistiva.

A contagem foi reduzida para 9 px com opacidade de 27% no rodapé. As contagens junto ao apresentador e na capa foram removidas; o sumário continua permitindo orientação e acesso a qualquer slide. Conteúdo e citações não foram alterados nessa etapa.

No Chrome, foram conferidos os seis elementos, a numeração e a ausência de vazamento horizontal. A verificação com o mouse real foi interrompida pela ferramenta de controle do computador, que não conseguiu confirmar o endereço do navegador. Essa interação continua pendente de teste manual. `npm run build` passou e o lint manteve apenas o aviso anterior da interface de Argonautas.

## 2026-11-05: revisão da linguagem

Textos dos 36 slides de conteúdo e das 38 notas de fala reescritos com frases mais diretas e vocabulário simples, sem coloquialismos. Os termos necessários ao estudo foram mantidos e explicados. Títulos, subtítulos e orientações de leitura também foram simplificados. O roteiro para baixar foi atualizado a partir dos mesmos dados.

Comparação automática com a versão anterior confirmou que as 12 citações diretas, suas páginas, os IDs, os capítulos e a divisão entre Laura e Zé permaneceram idênticos. A estrutura continua com 38 slides e 18 de conteúdo por apresentador.

Verificação: `npm run build` concluído; `npm run lint` sem erros, com o mesmo aviso anterior em `src/App.tsx:95`. No Chrome, o primeiro slide exibiu o texto novo, a citação original e a página. O painel de fala também exibiu a versão simplificada. Prévia salva em `docs/weber-previa-simplificada.png`.

## 2026-11-05: apresentação de Max Weber

Versão local baseada nos dois recortes de Economia e sociedade fornecidos por José. A apresentação original continua em `?deck=argonautas`.

- 18 slides de Laura, delimitados às páginas impressas 139–166.
- 18 slides de Zé, delimitados às páginas impressas 167–202.
- Capa e referências: 38 slides no total.
- 12 transcrições diretas conferidas visualmente nas páginas digitalizadas 139, 141, 147, 148, 159, 166, 168, 176, 183, 194, 199 e 202.
- Texto em linguagem atual, destaques, fonte por slide, notas de fala e roteiro completo em Markdown.
- Sumário, salto por apresentador, navegação por teclado, endereço individual e tela cheia.

## Evidências

- Extração com PyMuPDF: Laura tem 29 páginas (139–167); Zé tem 37 (167–203). Conteúdo limitado à divisão pedida.
- Validação por Python/Node: 38 IDs únicos, 18 slides por apresentador, páginas dentro dos recortes, notas em todos e 12 citações com página.
- Exportação do roteiro concluída; `/weber-roteiro.md` respondeu HTTP 200.
- `npm run build`: TypeScript e Vite concluídos com sucesso.
- `npm run lint`: nenhum erro; aviso preexistente em `src/App.tsx:95` sobre dependência de `paginate` no efeito da apresentação original. Weber não usa esse efeito.
- Chrome: os 38 slides percorridos em 1280 × 720, sem vazamento horizontal. Os 36 slides de conteúdo e as referências couberam verticalmente; a capa apresentou 13 pixels de rolagem nessa altura.
- Chrome: roteiro abriu no primeiro clique; Esc fechou e devolveu o foco ao botão. Sumário e salto para Laura testados.
- Chrome: medições em 390 × 844 e 300 × 700 sem vazamento horizontal no conteúdo e cabeçalho; diálogo de notas coube em 300 pixels. Conteúdo longo possui rolagem vertical.

## Limites

Os recortes não incluem folha de rosto ou ficha catalográfica. Os dados 1999/2004 foram preservados como informados por José, sem inferir o ano exato do exemplar. Não houve publicação, alteração das fontes em OneDrive ou inclusão de dependências.

Não foi feito teste com leitor de tela real nem ensaio cronometrado. Os slides possuem aproximadamente 3.200 palavras, além das notas; ajustar o tempo no ensaio.

Na automação do Chrome, a solicitação de tela cheia foi recusada; o aviso e a alternativa F11 foram exibidos corretamente. A ativação manual desse modo ainda não foi confirmada. O acesso à apresentação original foi aberto e conferido no Chrome; ao terminar, a nova apresentação ficou na capa, com o tamanho normal da janela restaurado.
