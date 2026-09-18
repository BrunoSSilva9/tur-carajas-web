import { useState } from 'react'
import type { CategoriaEvento } from '../../types'

const categorias: { valor: CategoriaEvento; label: string }[] = [
  { valor: 'cultura', label: 'Cultura' },
  { valor: 'gastronomia', label: 'Gastronomia' },
  { valor: 'natureza-aventura', label: 'Natureza & Aventura' },
  { valor: 'esporte', label: 'Esporte' },
]

export interface FiltrosEventos {
  categorias: CategoriaEvento[]
  apenasGratuitos: boolean
}

interface FiltrosEventosModalProps {
  filtros: FiltrosEventos
  onAplicar: (filtros: FiltrosEventos) => void
  onFechar: () => void
}

export function FiltrosEventosModal({ filtros, onAplicar, onFechar }: FiltrosEventosModalProps) {
  const [categoriasSelecionadas, setCategoriasSelecionadas] = useState(filtros.categorias)
  const [apenasGratuitos, setApenasGratuitos] = useState(filtros.apenasGratuitos)

  function alternarCategoria(categoria: CategoriaEvento) {
    setCategoriasSelecionadas((atual) =>
      atual.includes(categoria)
        ? atual.filter((item) => item !== categoria)
        : [...atual, categoria],
    )
  }

  function limpar() {
    setCategoriasSelecionadas([])
    setApenasGratuitos(false)
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center">
      <div className="absolute inset-0 bg-on-surface/60 backdrop-blur-[2px]" onClick={onFechar} />

      <div className="relative w-full max-w-[480px] max-h-[85%] bg-surface rounded-t-[32px] shadow-2xl flex flex-col">
        <div className="w-full flex justify-center pt-3 pb-1.5">
          <div className="w-12 h-1.5 rounded-full bg-surface-container-highest" />
        </div>

        <div className="px-margin pt-1.5 pb-3 flex items-start justify-between border-b border-outline-variant/40">
          <h2 className="font-title-md text-title-md text-on-surface tracking-tight">
            Filtrar eventos
          </h2>
          <button
            aria-label="Fechar"
            type="button"
            onClick={onFechar}
            className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high active:scale-95 transition"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-margin py-space-md flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-sm">
            <h3 className="font-label-lg text-label-lg text-on-surface">Categoria</h3>
            <div className="flex flex-wrap gap-2">
              {categorias.map((categoria) => {
                const selecionada = categoriasSelecionadas.includes(categoria.valor)
                return (
                  <button
                    key={categoria.valor}
                    type="button"
                    onClick={() => alternarCategoria(categoria.valor)}
                    className={`px-space-md py-space-xs rounded-full font-label-md text-label-md transition-all ${
                      selecionada
                        ? 'bg-primary text-on-primary shadow-sm'
                        : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                    }`}
                  >
                    {categoria.label}
                  </button>
                )
              })}
            </div>
          </div>

          <label className="flex items-center justify-between p-space-md rounded-xl bg-surface-container-low cursor-pointer">
            <span className="font-label-md text-label-md text-on-surface">
              Mostrar somente eventos gratuitos
            </span>
            <input
              type="checkbox"
              checked={apenasGratuitos}
              onChange={(event) => setApenasGratuitos(event.target.checked)}
              className="w-5 h-5 accent-primary"
            />
          </label>
        </div>

        <div className="p-space-md pb-safe bg-surface/95 backdrop-blur-sm border-t border-outline-variant/30 flex items-center gap-space-sm">
          <button
            type="button"
            onClick={limpar}
            className="border border-outline-variant text-on-surface-variant py-3 px-4 rounded-xl font-label-md text-label-md hover:bg-surface-container transition active:scale-95"
          >
            Limpar
          </button>
          <button
            type="button"
            onClick={() =>
              onAplicar({ categorias: categoriasSelecionadas, apenasGratuitos })
            }
            className="flex-1 bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg py-3 px-4 rounded-xl shadow-md transition active:scale-[0.98]"
          >
            Aplicar filtros
          </button>
        </div>
      </div>
    </div>
  )
}
