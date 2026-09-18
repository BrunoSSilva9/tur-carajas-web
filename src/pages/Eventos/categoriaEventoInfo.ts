import type { CategoriaEvento } from '../../types'

export const categoriaEventoInfo: Record<
  CategoriaEvento,
  { label: string; classeBadge: string; classePlaceholder: string }
> = {
  cultura: {
    label: 'Cultura',
    classeBadge: 'bg-tertiary text-on-tertiary',
    classePlaceholder: 'from-tertiary/70 to-tertiary-container/70',
  },
  gastronomia: {
    label: 'Gastronomia',
    classeBadge: 'bg-secondary text-on-secondary',
    classePlaceholder: 'from-secondary/70 to-secondary-container/70',
  },
  'natureza-aventura': {
    label: 'Natureza & Aventura',
    classeBadge: 'bg-primary text-on-primary',
    classePlaceholder: 'from-primary/70 to-primary-container/70',
  },
  esporte: {
    label: 'Esporte',
    classeBadge: 'bg-primary-container text-on-primary-container',
    classePlaceholder: 'from-primary-container/70 to-primary-fixed/70',
  },
}
