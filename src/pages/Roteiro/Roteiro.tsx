import { useState } from 'react'
import { useQuestionarioStore } from '../../store/questionarioStore'
import { EstadoVazio } from './EstadoVazio'
import { AjustarParadasModal } from './AjustarParadasModal'
import { paradasIniciais } from './tipos'

export function Roteiro() {
  const { roteiroGerado, marcarRoteiroGerado } = useQuestionarioStore()
  const [paradas, setParadas] = useState(paradasIniciais)
  const [modalAberto, setModalAberto] = useState(false)
  const [salvo, setSalvo] = useState(false)

  if (!roteiroGerado) {
    return <EstadoVazio onUsarSugestao={marcarRoteiroGerado} />
  }

  return (
    <div className="flex flex-col w-full px-margin pb-10 space-y-space-lg">
      <section className="bg-surface-container-lowest rounded-xl p-space-md shadow-md space-y-space-md relative overflow-hidden">
        <div className="absolute -right-8 -top-8 w-28 h-28 rounded-full bg-primary-fixed/20 pointer-events-none blur-xl" />
        <div className="flex items-start justify-between gap-space-sm relative z-10">
          <div className="flex-1 min-w-0">
            <span className="inline-flex items-center gap-1 text-secondary font-label-sm text-label-sm uppercase tracking-wider mb-1">
              <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
              Gerado com Inteligência EcoTur
            </span>
            <h1 className="font-headline-sm text-headline-sm text-on-surface leading-tight">
              Seu Roteiro Perfeito: Um Dia em Canaã 🌿
            </h1>
          </div>
          <div className="flex items-center gap-space-xs shrink-0">
            <button
              aria-label="Compartilhar roteiro"
              type="button"
              className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-transform active:scale-95"
            >
              <span className="material-symbols-outlined text-[20px]">share</span>
            </button>
            <button
              aria-label={salvo ? 'Remover dos favoritos' : 'Salvar nos favoritos'}
              type="button"
              onClick={() => setSalvo((atual) => !atual)}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform active:scale-95 ${
                salvo
                  ? 'bg-primary-fixed text-on-primary-fixed'
                  : 'bg-surface-container text-secondary hover:bg-surface-container-high'
              }`}
            >
              <span
                className="material-symbols-outlined text-[20px]"
                style={salvo ? { fontVariationSettings: "'FILL' 1" } : undefined}
              >
                {salvo ? 'bookmark' : 'bookmark_border'}
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-space-xs pt-space-xs">
          <div className="bg-surface-container-low rounded-lg p-space-xs flex flex-col items-center text-center">
            <span className="text-[14px]">⏱️</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Duração</span>
            <span className="font-label-md text-label-md text-on-surface font-semibold">6h30</span>
          </div>
          <div className="bg-surface-container-low rounded-lg p-space-xs flex flex-col items-center text-center">
            <span className="text-[14px]">💰</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Custo est.</span>
            <span className="font-label-md text-label-md text-secondary font-semibold">R$ 85</span>
          </div>
          <div className="bg-surface-container-low rounded-lg p-space-xs flex flex-col items-center text-center">
            <span className="text-[14px]">🚗</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">
              Deslocamento
            </span>
            <span className="font-label-md text-label-md text-on-surface font-semibold">18 km</span>
          </div>
        </div>

        <div className="flex items-center gap-space-sm bg-primary-fixed/25 rounded-lg p-space-sm text-on-primary-fixed">
          <span className="material-symbols-outlined text-[20px] text-primary shrink-0">wb_sunny</span>
          <p className="font-body-sm text-body-sm leading-snug">
            Melhor período de sol até 15h. Leve protetor solar biodegradável e água fresca.
          </p>
        </div>
      </section>

      <section className="relative w-full">
        <div className="absolute left-[19px] top-6 bottom-8 w-[2px] bg-outline-variant/60" />
        <div className="space-y-space-md relative">
          {paradas.map((parada, index) => (
            <div key={parada.id}>
              <div className="relative flex items-start gap-space-md">
                <div className="relative z-10 w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-headline-sm text-[16px] shadow-sm shrink-0 ring-4 ring-surface">
                  {index + 1}
                </div>
                <div className="flex-1 bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-sm">
                  <div className="flex items-center justify-between gap-space-xs">
                    <span className="inline-flex items-center gap-1 font-label-md text-label-md text-primary font-semibold">
                      <span className="material-symbols-outlined text-[16px]">schedule</span>{' '}
                      {parada.horarioInicio} - {parada.horarioFim}
                    </span>
                    <div className="flex items-center gap-1">
                      <span
                        className={`px-2 py-0.5 rounded-full font-label-sm text-label-sm font-semibold ${parada.categoriaCor}`}
                      >
                        {parada.categoria}
                      </span>
                      <button
                        aria-label={`Ajustar parada ${index + 1}`}
                        type="button"
                        onClick={() => setModalAberto(true)}
                        className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container"
                      >
                        <span className="material-symbols-outlined text-[18px]">more_vert</span>
                      </button>
                    </div>
                  </div>
                  <h2 className="font-title-md text-title-md text-on-surface">{parada.nome}</h2>
                  <div className="w-full h-36 rounded-lg overflow-hidden relative">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url('${parada.imagem}')` }}
                    />
                    <div className="absolute bottom-2 left-2 bg-inverse-surface/80 backdrop-blur-sm text-inverse-on-surface px-2 py-1 rounded-md text-[11px] font-body-sm flex items-center gap-1">
                      <span className="material-symbols-outlined text-[13px] text-primary-fixed">
                        timer
                      </span>{' '}
                      {parada.duracao} de estadia
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-on-surface-variant pt-1 text-[13px] font-body-sm">
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-secondary">
                        payments
                      </span>
                      <span>{parada.infoExtra}</span>
                    </div>
                  </div>
                </div>
              </div>

              {parada.deslocamentoProximo && (
                <div className="ml-10 pl-space-md py-1">
                  <div className="inline-flex items-center gap-2 bg-surface-container-high px-3 py-1.5 rounded-full text-on-surface-variant font-label-sm text-label-sm shadow-sm">
                    <span className="material-symbols-outlined text-[16px] text-secondary">
                      directions_car
                    </span>
                    <span>{parada.deslocamentoProximo}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">route</span>
            <span className="font-title-md text-title-md text-on-surface">
              Visão Geral do Percurso
            </span>
          </div>
          <span className="font-label-sm text-label-sm text-on-surface-variant">
            PA-160 e acessos
          </span>
        </div>
        <div className="w-full h-40 bg-surface-container rounded-lg relative overflow-hidden shadow-inner flex items-end p-space-sm">
          <div className="bg-surface-container-lowest/90 backdrop-blur-md rounded-lg p-space-xs px-space-sm flex items-center gap-2 text-on-surface shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping" />
            <span className="font-label-sm text-label-sm">{paradas.length} paradas sequenciais otimizadas</span>
          </div>
        </div>
      </section>

      <div className="sticky bottom-20 z-40 pt-2">
        <div className="bg-surface-container-lowest/95 backdrop-blur-md p-space-sm rounded-2xl shadow-xl space-y-2">
          <button
            type="button"
            className="w-full h-12 rounded-lg bg-primary hover:bg-primary-container text-on-primary flex items-center justify-center gap-2 font-label-lg text-label-lg transition-transform active:scale-[0.98] shadow-md"
          >
            <span className="material-symbols-outlined text-[20px]">map</span>
            Ver rota completa no GPS / Mapa
          </button>
          <div className="flex items-center justify-between gap-space-sm">
            <button
              type="button"
              onClick={() => setModalAberto(true)}
              className="flex-1 h-10 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center justify-center gap-1.5 transition-colors"
            >
              <span className="material-symbols-outlined text-[18px] text-secondary">tune</span>
              Ajustar paradas
            </button>
            <button
              type="button"
              title="Salvar Offline"
              className="h-10 px-4 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant font-label-md text-label-md flex items-center justify-center gap-1 transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">download_for_offline</span>
              Offline
            </button>
          </div>
        </div>
      </div>

      {modalAberto && (
        <AjustarParadasModal
          paradas={paradas}
          onFechar={() => setModalAberto(false)}
          onSalvar={(novasParadas) => {
            setParadas(novasParadas)
            setModalAberto(false)
          }}
        />
      )}
    </div>
  )
}
