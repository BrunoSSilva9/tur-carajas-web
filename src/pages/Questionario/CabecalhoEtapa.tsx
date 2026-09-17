import type { ReactNode } from 'react'

interface CabecalhoEtapaProps {
  etapa: number
  onVoltar: () => void
  kickerIcone: string
  kickerTexto: string
  titulo: string
  descricao: string
  children?: ReactNode
}

const TOTAL_ETAPAS = 5

export function CabecalhoEtapa({
  etapa,
  onVoltar,
  kickerIcone,
  kickerTexto,
  titulo,
  descricao,
}: CabecalhoEtapaProps) {
  return (
    <div className="flex flex-col pt-space-md gap-space-md">
      <div className="flex items-center justify-between">
        <button
          aria-label="Voltar"
          type="button"
          onClick={onVoltar}
          className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface hover:bg-surface-container transition-all active:scale-95 shadow-sm"
        >
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
        </button>
        <span className="font-label-md text-label-md text-on-surface-variant tracking-wider uppercase bg-surface-container-low px-3 py-1 rounded-full">
          Etapa {etapa} de {TOTAL_ETAPAS}
        </span>
        <button
          aria-label="Ajuda ou informações"
          type="button"
          className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-all active:scale-95"
        >
          <span className="material-symbols-outlined text-[20px]">help_outline</span>
        </button>
      </div>

      <div className="flex items-center gap-1.5 w-full">
        {Array.from({ length: TOTAL_ETAPAS }, (_, index) => (
          <div
            key={index}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              index < etapa ? 'bg-primary-container' : 'bg-surface-container-highest'
            }`}
          />
        ))}
      </div>

      <div className="flex flex-col mt-space-sm">
        <div className="inline-flex items-center gap-1.5 text-secondary mb-1">
          <span className="material-symbols-outlined text-[18px]">{kickerIcone}</span>
          <span className="font-label-sm text-label-sm uppercase tracking-wider">{kickerTexto}</span>
        </div>
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface leading-tight tracking-tight">
          {titulo}
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs leading-relaxed">
          {descricao}
        </p>
      </div>
    </div>
  )
}
