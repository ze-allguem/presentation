# Apresentações: Max Weber e Argonautas

Execute `npm run dev -- --host 127.0.0.1` e abra http://127.0.0.1:5173/ para Weber. A apresentação original fica em http://127.0.0.1:5173/?deck=argonautas.

Weber possui 38 slides: capa, 18 de Laura (p. 139–166), 18 de Zé (p. 167–202) e referências. As páginas são as impressas na obra. O ícone de livro abre o roteiro de fala; o menu abre o sumário e os atalhos por apresentador. Setas e PageUp/PageDown navegam; Home abre a capa e End, as referências. Esc fecha os diálogos.

O conteúdo e as notas estão em `src/weber.ts`. Depois de editar, execute `node scripts/export-weber-notes.mjs` para atualizar `docs/ROTEIRO-WEBER.md` e `public/weber-roteiro.md`. O script usa a execução nativa de TypeScript do Node instalado neste ambiente (v24). Verifique com `npm run build` e `npm run lint`.

O conteúdo original de Argonautas permanece em `src/data.ts` e sua interface em `src/App.tsx`. O arquivo `src/main.tsx` seleciona a apresentação pelo parâmetro `deck`.

## Documentação original do template

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
