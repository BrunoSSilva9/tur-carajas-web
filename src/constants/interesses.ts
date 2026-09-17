import type { InteresseViagem } from '../types'

export const opcoesInteresses: { valor: InteresseViagem; label: string; icone: string }[] = [
  { valor: 'cachoeiras-pocos', label: 'Cachoeiras & Poços Naturais', icone: 'waterfall_chart' },
  { valor: 'mirantes-por-do-sol', label: 'Mirantes & Pôr do Sol', icone: 'wb_twilight' },
  { valor: 'gastronomia-paraense', label: 'Gastronomia Paraense & Peixes', icone: 'restaurant' },
  { valor: 'trilhas-ecologicas', label: 'Trilhas Ecológicas na Floresta', icone: 'hiking' },
  { valor: 'banho-de-rio', label: 'Banho de Rio & Balneários', icone: 'pool' },
  { valor: 'cavernas-arqueologia', label: 'Cavernas & Arqueologia', icone: 'explore' },
  { valor: 'fotografia-natureza', label: 'Fotografia de Natureza', icone: 'photo_camera' },
  { valor: 'observacao-aves', label: 'Observação de Aves & Fauna', icone: 'nature' },
  { valor: 'eventos-culturais', label: 'Eventos Culturais & Música', icone: 'festival' },
]
