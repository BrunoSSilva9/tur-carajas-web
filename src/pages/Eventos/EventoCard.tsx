import { Link } from 'react-router-dom'
import type { Evento } from '../../types'
import { categoriaEventoInfo } from './categoriaEventoInfo'

export function EventoCard({ evento }: { evento: Evento }) {
  const info = categoriaEventoInfo[evento.categoria]

  return (
    <Link
      to={`/eventos/${evento.id}`}
      className="min-w-[85vw] sm:min-w-0 snap-center bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col hover:shadow-md transition-shadow"
    >
      <div
        className={`relative h-40 w-full bg-gradient-to-br ${info.classePlaceholder} flex items-center justify-center`}
      >
        <span className="material-symbols-outlined text-[36px] text-on-primary">
          {evento.icone}
        </span>
        <span
          className={`absolute top-3 left-3 font-label-sm text-label-sm px-space-sm py-space-xs rounded-full shadow-sm ${info.classeBadge}`}
        >
          {info.label}
        </span>
      </div>
      <div className="p-space-md flex flex-col gap-space-xs">
        <div className="flex items-center gap-space-xs text-on-surface-variant">
          <span className="material-symbols-outlined text-[14px] text-secondary">
            calendar_month
          </span>
          <span className="font-label-md text-label-md">{evento.dataLabel}</span>
        </div>
        <h3 className="font-title-md text-title-md text-on-surface leading-snug">{evento.nome}</h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
          {evento.descricaoCurta}
        </p>
        <div className="flex items-center justify-between pt-space-xs">
          <span className="flex items-center gap-1 font-body-sm text-body-sm text-on-surface-variant">
            <span className="material-symbols-outlined text-[14px] text-primary">location_on</span>
            {evento.local}
          </span>
          <span
            className={`font-label-sm text-label-sm px-space-sm py-0.5 rounded-full ${
              evento.gratuito
                ? 'bg-primary-fixed text-on-primary-fixed'
                : 'bg-surface-container text-on-surface-variant'
            }`}
          >
            {evento.gratuito ? 'Gratuito' : 'Entrada paga'}
          </span>
        </div>
      </div>
    </Link>
  )
}
