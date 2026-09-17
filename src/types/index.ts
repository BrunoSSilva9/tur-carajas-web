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
  nota?: number
  avaliacoes?: number
}

export interface Negocio {
  id: string
  nome: string
  categoria: Categoria
  descricaoCurta: string
  localizacao: Localizacao
  contatoWhatsapp?: string
  imagem: string
  nota?: number
  avaliacoes?: number
}

export interface Restaurante {
  id: string
  nome: string
  categoria: Categoria
  descricaoCurta: string
  localizacao: Localizacao
  contatoWhatsapp?: string
  imagem: string
  nota?: number
  avaliacoes?: number
}

export interface Hospedagem {
  id: string
  nome: string
  categoria: Categoria
  descricaoCurta: string
  localizacao: Localizacao
  contatoWhatsapp?: string
  imagem: string
  nota?: number
  avaliacoes?: number
}

export type Orcamento = 'baixo' | 'medio' | 'alto'
export type Duracao = '2-3h' | 'meio-dia' | 'dia-inteiro' | 'fim-de-semana'
export type Companhia = 'sozinho' | 'casal' | 'familia' | 'amigos'

export type InteresseViagem =
  | 'cachoeiras-pocos'
  | 'mirantes-por-do-sol'
  | 'gastronomia-paraense'
  | 'trilhas-ecologicas'
  | 'banho-de-rio'
  | 'cavernas-arqueologia'
  | 'fotografia-natureza'
  | 'observacao-aves'
  | 'eventos-culturais'

export type Transporte = 'carro-proprio' | 'transporte-local' | 'trilha-guiada'
export type NivelCaminhada = 'leve' | 'moderado' | 'intenso'

export interface RespostaQuestionario {
  duracao: Duracao
  orcamento: Orcamento
  companhia: Companhia
  interesses: InteresseViagem[]
  transporte: Transporte
  nivelCaminhada: NivelCaminhada
}
