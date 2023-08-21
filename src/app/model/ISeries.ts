export interface ISeries{
  nome: string;
  lancamento: string;
  temporadas: number;
  classificacao: number;
  cartaz: string;
  generos: string[];
  pagina?: string; //** a ? indica que o campo nao é obrigatorio*/
  favorito: boolean;
}
