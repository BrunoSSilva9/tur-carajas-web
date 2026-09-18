import { useState } from 'react'
import type { Parada } from './tipos'

interface AjustarParadasModalProps {
  paradas: Parada[]
  onSalvar: (paradas: Parada[]) => void
  onFechar: () => void
}

export function AjustarParadasModal({ paradas, onSalvar, onFechar }: AjustarParadasModalProps) {
  const [lista, setLista] = useState(paradas)

  function mover(index: number, direcao: -1 | 1) {
    const destino = index + direcao
    if (destino < 0 || destino >= lista.length) return
    const nova = [...lista]
    const [item] = nova.splice(index, 1)
    nova.splice(destino, 0, item)
    setLista(nova)
  }

  function remover(id: string) {
    setLista((atual) => atual.filter((parada) => parada.id !== id))
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center">
      <div className="absolute inset-0 bg-on-surface/60 backdrop-blur-[2px]" onClick={onFechar} />

      <div className="relative w-full max-w-[480px] h-[88%] bg-surface rounded-t-[32px] shadow-2xl flex flex-col">
        <div className="w-full flex justify-center pt-3 pb-1.5">
          <div className="w-12 h-1.5 rounded-full bg-surface-container-highest" />
        </div>

        <div className="px-margin pt-1.5 pb-3 flex items-start justify-between border-b border-outline-variant/40">
          <div>
            <h2 className="font-title-md text-title-md text-on-surface tracking-tight">
              Ajustar paradas
            </h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
              Use as setas para reordenar ou remova uma parada
            </p>
          </div>
          <button
            aria-label="Fechar"
            type="button"
            onClick={onFechar}
            className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high active:scale-95 transition"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <div className="px-margin pt-3 pb-2">
          <div className="bg-surface-container-low rounded-xl p-space-sm px-space-md flex items-center gap-space-md text-body-sm">
            <span className="flex items-center gap-1.5 font-label-md text-label-md text-on-surface">
              <span className="material-symbols-outlined text-[16px] text-primary">schedule</span>
              {lista.length} paradas
            </span>
            <span className="inline-flex items-center gap-1 bg-secondary-container/40 text-secondary font-label-sm text-label-sm px-2 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              Recalculando em tempo real
            </span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-margin py-space-sm flex flex-col gap-space-sm">
          {lista.map((parada, index) => (
            <div key={parada.id} className="flex flex-col gap-space-xs">
              <div className="bg-surface-container-lowest rounded-xl p-space-sm border border-outline-variant/30 shadow-sm flex items-center gap-space-sm">
                <div className="flex flex-col gap-0.5">
                  <button
                    aria-label={`Mover ${parada.nome} para cima`}
                    type="button"
                    disabled={index === 0}
                    onClick={() => mover(index, -1)}
                    className="w-6 h-6 rounded flex items-center justify-center text-on-surface-variant hover:bg-surface-container disabled:opacity-30 disabled:pointer-events-none"
                  >
                    <span className="material-symbols-outlined text-[16px]">keyboard_arrow_up</span>
                  </button>
                  <button
                    aria-label={`Mover ${parada.nome} para baixo`}
                    type="button"
                    disabled={index === lista.length - 1}
                    onClick={() => mover(index, 1)}
                    className="w-6 h-6 rounded flex items-center justify-center text-on-surface-variant hover:bg-surface-container disabled:opacity-30 disabled:pointer-events-none"
                  >
                    <span className="material-symbols-outlined text-[16px]">keyboard_arrow_down</span>
                  </button>
                </div>

                <span className="w-6 h-6 rounded-full bg-primary text-on-primary text-xs font-bold flex items-center justify-center shrink-0">
                  {index + 1}
                </span>

                <div
                  className="w-14 h-14 rounded-xl bg-cover bg-center shrink-0"
                  style={{ backgroundImage: `url('${parada.imagem}')` }}
                />

                <div className="flex-1 min-w-0">
                  <h3 className="font-label-md text-label-md text-on-surface truncate">
                    {parada.nome}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {parada.horarioInicio} - {parada.horarioFim} · {parada.duracao}
                  </p>
                </div>

                <button
                  aria-label={`Remover ${parada.nome}`}
                  type="button"
                  onClick={() => remover(parada.id)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-outline hover:text-error hover:bg-error-container/40 transition shrink-0"
                >
                  <span className="material-symbols-outlined text-[18px]">delete</span>
                </button>
              </div>

              {index < lista.length - 1 && parada.deslocamentoProximo && (
                <div className="flex items-center gap-1.5 pl-11 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[14px] text-secondary">
                    directions_car
                  </span>
                  <span className="font-body-sm text-body-sm">{parada.deslocamentoProximo}</span>
                </div>
              )}
            </div>
          ))}

          <div className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-space-sm flex items-start gap-space-sm text-on-surface-variant mt-space-xs">
            <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
              info
            </span>
            <p className="font-body-sm text-body-sm leading-relaxed">
              Os horários e deslocamentos são recalculados automaticamente conforme a ordem das
              paradas.
            </p>
          </div>
        </div>

        <div className="p-space-md pb-safe bg-surface/95 backdrop-blur-sm border-t border-outline-variant/30 flex items-center gap-space-sm">
          <button
            type="button"
            onClick={onFechar}
            className="border border-outline-variant text-on-surface-variant py-3 px-4 rounded-xl font-label-md text-label-md hover:bg-surface-container transition active:scale-95"
          >
            Cancelar
          </button>
          <button
            type="button"
            onClick={() => onSalvar(lista)}
            className="flex-1 bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg py-3 px-4 rounded-xl shadow-md transition active:scale-[0.98]"
          >
            Salvar alterações
          </button>
        </div>
      </div>
    </div>
  )
}
