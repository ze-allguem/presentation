// Estrutura dos slides da aula didática (texto vindo dos PDFs "Aprendendo Weber com calma").

export type BoxKind = 'conceito' | 'exemplo' | 'contexto';

export type Block =
  | { t: 'p'; html: string }
  | { t: 'h'; text: string }
  | { t: 'destaque'; html: string }
  | { t: 'box'; kind: BoxKind; html: string[] }
  | { t: 'lista'; ordered: boolean; items: string[] }
  | { t: 'tabela'; head: string[]; rows: string[][] }
  | { t: 'revisao'; items: string[] };

export type AulaSlide = {
  id: string;
  presenter: 'Laura' | 'Zé' | 'Laura e Zé';
  layout: 'cover' | 'content';
  topic?: number;
  title: string;
  pages?: string;
  chapter?: string;
  blocks: Block[];
};

export const p = (html: string): Block => ({ t: 'p', html });
export const h = (text: string): Block => ({ t: 'h', text });
export const destaque = (html: string): Block => ({ t: 'destaque', html });
export const conceito = (...html: string[]): Block => ({ t: 'box', kind: 'conceito', html });
export const exemplo = (...html: string[]): Block => ({ t: 'box', kind: 'exemplo', html });
export const contexto = (...html: string[]): Block => ({ t: 'box', kind: 'contexto', html });
export const lista = (...items: string[]): Block => ({ t: 'lista', ordered: false, items });
export const numerada = (...items: string[]): Block => ({ t: 'lista', ordered: true, items });
export const tabela = (head: string[], ...rows: string[][]): Block => ({ t: 'tabela', head, rows });
export const revisao = (...items: string[]): Block => ({ t: 'revisao', items });
