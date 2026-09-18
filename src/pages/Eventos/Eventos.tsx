import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEventos } from '../../hooks/useEventos'
import { EventoCard } from './EventoCard'
import { FiltrosEventosModal, type FiltrosEventos } from './FiltrosEventosModal'

const filtrosVazios: FiltrosEventos = { categorias: [], apenasGratuitos: false }

export function Eventos() {
  const navigate = useNavigate()
  const { eventos, carregando } = useEventos()
  const [busca, setBusca] = useState('')
  const [modalAberto, setModalAberto] = useState(false)
  const [filtros, setFiltros] = useState<FiltrosEventos>(filtrosVazios)

  const eventosFiltrados = useMemo(() => {
    return eventos
      .filter((evento) => evento.nome.toLowerCase().includes(busca.toLowerCase()))
      .filter(
        (evento) =>
          filtros.categorias.length === 0 || filtros.categorias.includes(evento.categoria),
      )
      .filter((evento) => !filtros.apenasGratuitos || evento.gratuito)
  }, [eventos, busca, filtros])

  const filtrosAtivos = filtros.categorias.length + (filtros.apenasGratuitos ? 1 : 0)

  if (carregando) {
    return <p className="px-margin text-on-surface-variant">Carregando eventos...</p>
  }

  return (
    <div className="flex flex-col w-full">
      <div className="px-margin md:max-w-5xl md:mx-auto md:w-full pt-space-sm pb-space-sm flex flex-col gap-space-sm">
        <div className="flex items-center justify-between gap-space-sm">
          <div className="flex items-center gap-space-sm">
            <button
              aria-label="Voltar"
              type="button"
              onClick={() => navigate(-1)}
              className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            </button>
            <div>
              <span className="font-headline-sm text-headline-sm text-on-surface">
                Eventos & Festivais
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Programação cultural, gastronômica e esportiva de Canaã dos Carajás
              </p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-space-xs text-on-surface-variant">
            <span className="material-symbols-outlined text-[16px] text-secondary">info</span>
            <span className="font-body-sm text-body-sm">Eventos de demonstração</span>
          </div>
        </div>

        <div className="flex items-center gap-space-sm">
          <div className="flex-1 flex items-center bg-surface-container-low px-space-md py-space-sm rounded-xl shadow-sm focus-within:bg-surface-container-lowest focus-within:shadow-md transition-all">
            <span className="material-symbols-outlined text-primary text-[22px] mr-space-xs">
              search
            </span>
            <input
              type="text"
              value={busca}
              onChange={(event) => setBusca(event.target.value)}
              placeholder="Buscar eventos..."
              className="w-full bg-transparent border-none outline-none font-body-md text-body-md text-on-surface placeholder:text-outline"
            />
          </div>
          <button
            type="button"
            onClick={() => setModalAberto(true)}
            aria-label="Filtrar eventos"
            className={`relative w-12 h-12 flex items-center justify-center rounded-xl transition-all active:scale-95 shadow-sm ${
              filtrosAtivos > 0
                ? 'bg-secondary-fixed text-on-secondary-fixed'
                : 'bg-surface-container hover:bg-surface-container-high text-on-surface-variant'
            }`}
          >
            <span className="material-symbols-outlined text-[22px]">tune</span>
            {filtrosAtivos > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-on-primary text-[10px] font-bold flex items-center justify-center">
                {filtrosAtivos}
              </span>
            )}
          </button>
        </div>
      </div>

      <section className="mt-space-sm md:max-w-5xl md:mx-auto md:w-full flex flex-col">
        <div className="px-margin flex items-center justify-between mb-space-sm">
          <div>
            <span className="font-title-md text-title-md text-on-surface block">
              {busca || filtrosAtivos > 0 ? 'Resultados' : 'Destaques da Temporada'}
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              {eventosFiltrados.length}{' '}
              {eventosFiltrados.length === 1 ? 'evento encontrado' : 'eventos encontrados'}
            </span>
          </div>
        </div>

        {eventosFiltrados.length === 0 ? (
          <p className="px-margin text-on-surface-variant text-body-sm py-space-lg text-center">
            Nenhum evento encontrado com esses filtros.
          </p>
        ) : (
          <div className="flex gap-space-md overflow-x-auto px-margin pb-space-sm snap-x snap-mandatory no-scrollbar md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:pb-space-lg">
            {eventosFiltrados.map((evento) => (
              <EventoCard key={evento.id} evento={evento} />
            ))}
          </div>
        )}
      </section>

      {modalAberto && (
        <FiltrosEventosModal
          filtros={filtros}
          onFechar={() => setModalAberto(false)}
          onAplicar={(novosFiltros) => {
            setFiltros(novosFiltros)
            setModalAberto(false)
          }}
        />
      )}
    </div>
  )
}
