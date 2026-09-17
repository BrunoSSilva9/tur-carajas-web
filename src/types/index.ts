export type Categoria =
  | 'natureza'
  | 'praca-parque'
  | 'cultura'
  | 'gastronomia'
  | 'hospedagem'
  | 'artesanato'
  | 'agricultura'
  | 'comercio'

export interface Localizacao {
  bairro: string
  endereco?: string
  latitude?: number
  longitude?: number
}

export interface Atrativo {
  id: string
  nome: string
  categoria: Categoria
  descricaoCurta: string
  localizacao: Localizacao
  contatoWhatsapp?: string
  imagem: string
}

export interface Negocio {
  id: string
  nome: string
  categoria: Categoria
  descricaoCurta: string
  localizacao: Localizacao
  contatoWhatsapp?: string
  imagem: string
}

export interface Restaurante {
  id: string
  nome: string
  categoria: Categoria
  descricaoCurta: string
  localizacao: Localizacao
  contatoWhatsapp?: string
  imagem: string
}

export type Orcamento = 'baixo' | 'medio' | 'alto'
export type Duracao = 'meio-dia' | 'dia-inteiro' | 'fim-de-semana'

export interface RespostaQuestionario {
  interesses: Categoria[]
  orcamento: Orcamento
  duracao: Duracao
}
