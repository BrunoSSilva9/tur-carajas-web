import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { Categoria } from '../../types'

const categoriaInfo: Record<Categoria, { label: string; icone: string; classeBadge: string; classePlaceholder: string }> = {
  natureza: {
    label: 'Natureza',
    icone: 'forest',
    classeBadge: 'bg-primary text-on-primary',
    classePlaceholder: 'from-primary/70 to-primary-container/70 text-on-primary',
  },
  'praca-parque': {
    label: 'Praça / Parque',
    icone: 'park',
    classeBadge: 'bg-primary-container text-on-primary-container',
    classePlaceholder: 'from-primary-container/70 to-primary-fixed/70 text-on-primary-container',
  },
  cultura: {
    label: 'Cultura',
    icone: 'festival',
    classeBadge: 'bg-tertiary text-on-tertiary',
    classePlaceholder: 'from-tertiary/70 to-tertiary-container/70 text-on-tertiary',
  },
  gastronomia: {
    label: 'Gastronomia',
    icone: 'restaurant',
    classeBadge: 'bg-secondary text-on-secondary',
    classePlaceholder: 'from-secondary/70 to-secondary-container/70 text-on-secondary',
  },
  hospedagem: {
    label: 'Hospedagem',
    icone: 'hotel',
    classeBadge: 'bg-secondary-container text-on-secondary-container',
    classePlaceholder: 'from-secondary-container/70 to-secondary-fixed/70 text-on-secondary-container',
  },
  artesanato: {
    label: 'Artesanato',
    icone: 'palette',
    classeBadge: 'bg-tertiary text-on-tertiary',
    classePlaceholder: 'from-tertiary/70 to-tertiary-container/70 text-on-tertiary',
  },
  agricultura: {
    label: 'Agricultura',
    icone: 'agriculture',
    classeBadge: 'bg-primary text-on-primary',
    classePlaceholder: 'from-primary/70 to-primary-container/70 text-on-primary',
  },
  comercio: {
    label: 'Comércio Local',
    icone: 'storefront',
    classeBadge: 'bg-tertiary text-on-tertiary',
    classePlaceholder: 'from-tertiary/70 to-tertiary-container/70 text-on-tertiary',
  },
}

interface CardItemProps {
  nome: string
  categoria: Categoria
  descricaoCurta: string
  bairro: string
  imagem?: string
  nota?: number
  avaliacoes?: number
  linkPara?: string
}

export function CardItem({
  nome,
  categoria,
  descricaoCurta,
  bairro,
  imagem,
  nota,
  avaliacoes,
  linkPara,
}: CardItemProps) {
  const info = categoriaInfo[categoria]
  const [favoritado, setFavoritado] = useState(false)
  const temFoto = Boolean(imagem)

  return (
    <article className="w-full flex flex-col bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
      <div className="relative w-full h-52 overflow-hidden">
        {temFoto ? (
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('${imagem}')` }}
          />
        ) : (
          <div
            className={`w-full h-full flex flex-col items-center justify-center gap-space-xs bg-gradient-to-br ${info.classePlaceholder}`}
          >
            <span className="material-symbols-outlined text-[40px]">{info.icone}</span>
            <span className="font-label-sm text-label-sm uppercase tracking-wider opacity-90">
              Foto em breve
            </span>
          </div>
        )}

        <div className="absolute top-space-sm right-space-sm flex items-center gap-1.5">
          {linkPara && (
            <button
              aria-label={`Adicionar ${nome} ao roteiro`}
              type="button"
              title="Adicionar ao roteiro"
              className="w-9 h-9 rounded-full bg-surface-container-lowest/90 text-primary hover:bg-surface-container-high flex items-center justify-center transition-all active:scale-90 shadow-sm"
            >
              <span className="material-symbols-outlined text-[20px] font-bold">add</span>
            </button>
          )}
          <button
            aria-label={favoritado ? `Remover ${nome} dos favoritos` : `Salvar ${nome}`}
            type="button"
            onClick={() => setFavoritado((atual) => !atual)}
            className={`w-9 h-9 rounded-full bg-surface-container-lowest/90 backdrop-blur-md flex items-center justify-center transition-all active:scale-90 shadow-sm ${
              favoritado ? 'text-error' : 'text-outline hover:text-error'
            }`}
          >
            <span
              className="material-symbols-outlined text-[20px]"
              style={favoritado ? { fontVariationSettings: "'FILL' 1" } : undefined}
            >
              {favoritado ? 'favorite' : 'favorite_border'}
            </span>
          </button>
        </div>

        <div className="absolute bottom-space-sm left-space-sm">
          <span
            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold shadow-sm ${info.classeBadge}`}
          >
            {info.label}
          </span>
        </div>
      </div>

      <div className="p-space-md flex flex-col gap-space-xs">
        <div className="flex items-start justify-between gap-space-xs">
          <h3 className="font-title-md text-title-md text-on-surface font-bold tracking-tight">
            {nome}
          </h3>
          {nota !== undefined && (
            <div className="flex items-center gap-1 text-secondary flex-shrink-0">
              <span
                className="material-symbols-outlined text-[16px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span className="font-label-md font-bold text-on-surface">{nota}</span>
              {avaliacoes !== undefined && (
                <span className="text-body-sm text-on-surface-variant">({avaliacoes})</span>
              )}
            </div>
          )}
        </div>

        <span className="flex items-center gap-1 font-body-sm text-body-sm text-on-surface-variant">
          <span className="material-symbols-outlined text-[14px] text-secondary">location_on</span>
          {bairro}
        </span>

        <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
          {descricaoCurta}
        </p>

        {linkPara && (
          <div className="pt-space-sm mt-space-xs flex items-center justify-end">
            <Link
              to={linkPara}
              className="px-4 py-2 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-sm flex items-center gap-1.5 shadow-sm transition-all active:scale-95"
            >
              <span>Ver Detalhes</span>
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </Link>
          </div>
        )}
      </div>
    </article>
  )
}
