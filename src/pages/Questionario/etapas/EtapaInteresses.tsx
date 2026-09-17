import type { InteresseViagem } from '../../../types'
import { opcoesInteresses as opcoes } from '../../../constants/interesses'

interface EtapaInteressesProps {
  valores: InteresseViagem[]
  onAlternar: (valor: InteresseViagem) => void
  onLimpar: () => void
}

export function EtapaInteresses({ valores, onAlternar, onLimpar }: EtapaInteressesProps) {
  const total = valores.length

  return (
    <>
      <div className="relative overflow-hidden bg-surface-container-low rounded-xl p-space-md mb-space-md shadow-sm">
        <div className="flex items-center gap-space-md">
          <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-primary shrink-0">
            <span className="material-symbols-outlined text-[24px]">tips_and_updates</span>
          </div>
          <div className="flex flex-col min-w-0 flex-1">
            <span className="font-label-md text-label-md text-primary font-bold">Dica de Explorador</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
              Misturar natureza e gastronomia paraense garante pausas revigorantes no seu dia.
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-space-sm">
        <div className="flex flex-wrap gap-2.5">
          {opcoes.map((opcao) => {
            const selecionado = valores.includes(opcao.valor)
            return (
              <button
                key={opcao.valor}
                type="button"
                onClick={() => onAlternar(opcao.valor)}
                className={`inline-flex items-center gap-space-xs py-2.5 px-3.5 rounded-full active:scale-95 transition-all text-left ${
                  selecionado
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                <span className="font-label-md text-label-md font-semibold">{opcao.label}</span>
                {selecionado && (
                  <span className="material-symbols-outlined text-[18px] text-primary-fixed ml-0.5">
                    check_circle
                  </span>
                )}
              </button>
            )
          })}
        </div>

        <div className="flex items-center justify-between pt-space-sm px-1">
          <div className="inline-flex items-center gap-1.5 text-on-surface-variant font-label-md text-label-md">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary-fixed text-on-primary-fixed font-bold text-[11px]">
              {total}
            </span>
            <span className="text-on-surface font-medium">
              {total === 1 ? 'interesse selecionado' : 'interesses selecionados'}
            </span>
          </div>
          <button
            type="button"
            onClick={onLimpar}
            className="font-label-sm text-label-sm text-secondary hover:underline py-1"
          >
            Limpar tudo
          </button>
        </div>
      </div>
    </>
  )
}
