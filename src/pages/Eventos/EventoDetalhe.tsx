import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import type { Evento } from '../../types'
import { buscarEventoPorId } from '../../services/eventosService'
import { categoriaEventoInfo } from './categoriaEventoInfo'

export function EventoDetalhe() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [evento, setEvento] = useState<Evento | undefined>(undefined)
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    if (!id) return
    buscarEventoPorId(id).then((resultado) => {
      setEvento(resultado)
      setCarregando(false)
    })
  }, [id])

  if (carregando) {
    return <p className="px-margin text-on-surface-variant">Carregando evento...</p>
  }

  if (!evento) {
    return (
      <div className="px-margin flex flex-col gap-space-md items-center text-center py-space-xl">
        <p className="text-on-surface-variant">Evento não encontrado.</p>
        <Link to="/eventos" className="text-primary underline">
          Voltar para Eventos
        </Link>
      </div>
    )
  }

  const info = categoriaEventoInfo[evento.categoria]

  return (
    <div className="flex flex-col w-full md:max-w-3xl md:mx-auto">
      <div className="px-margin pt-space-sm pb-space-sm flex items-center gap-space-sm">
        <button
          aria-label="Voltar"
          type="button"
          onClick={() => navigate(-1)}
          className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
        </button>
        <span className="font-headline-sm text-headline-sm text-on-surface">Detalhes do evento</span>
      </div>

      <div className="px-margin flex flex-col gap-space-md pb-space-xl">
        <div
          className={`relative h-48 w-full rounded-xl bg-gradient-to-br ${info.classePlaceholder} flex items-center justify-center`}
        >
          <span className="material-symbols-outlined text-[56px] text-on-primary">
            {evento.icone}
          </span>
          <span
            className={`absolute top-3 left-3 font-label-sm text-label-sm px-space-sm py-space-xs rounded-full shadow-sm ${info.classeBadge}`}
          >
            {info.label}
          </span>
        </div>

        <div className="flex flex-col gap-space-xs">
          <h1 className="font-headline-md text-headline-md text-on-surface">{evento.nome}</h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            {evento.descricaoCurta}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-space-sm">
          <div className="flex items-center gap-space-sm p-space-md bg-surface-container-low rounded-xl">
            <span className="material-symbols-outlined text-[20px] text-secondary">
              calendar_month
            </span>
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm text-on-surface-variant">Quando</span>
              <span className="font-label-md text-label-md text-on-surface">{evento.dataLabel}</span>
            </div>
          </div>
          <div className="flex items-center gap-space-sm p-space-md bg-surface-container-low rounded-xl">
            <span className="material-symbols-outlined text-[20px] text-primary">location_on</span>
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm text-on-surface-variant">Onde</span>
              <span className="font-label-md text-label-md text-on-surface">{evento.local}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-space-sm p-space-md bg-surface-container-low rounded-xl">
          <span className="material-symbols-outlined text-[20px] text-primary">
            {evento.gratuito ? 'check_circle' : 'payments'}
          </span>
          <span className="font-label-md text-label-md text-on-surface">
            {evento.gratuito ? 'Entrada gratuita' : 'Entrada paga (valor a definir)'}
          </span>
        </div>

        {evento.programacao.length > 0 && (
          <section className="flex flex-col mt-space-md">
            <div className="flex items-center gap-space-xs mb-space-sm">
              <span className="material-symbols-outlined text-[20px] text-primary">
                event_available
              </span>
              <h2 className="font-title-md text-title-md text-on-surface">
                Programação (exemplo)
              </h2>
            </div>
            <div className="relative pl-6 space-y-space-md">
              <div className="absolute left-2.5 top-3 bottom-3 w-0.5 bg-surface-variant" />
              {evento.programacao.map((item) => (
                <div key={item.horario + item.titulo} className="relative flex flex-col gap-space-xs">
                  <div className="absolute -left-6 top-1.5 w-5 h-5 rounded-full bg-surface-container-lowest flex items-center justify-center shadow-sm">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                  </div>
                  <div className="flex items-center gap-space-xs">
                    <span className="font-headline-sm text-headline-sm text-primary font-bold">
                      {item.horario}
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-space-xs py-0.5 rounded">
                      {item.periodo}
                    </span>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
                    <div className="flex items-center gap-space-xs">
                      <span className="bg-primary-container text-on-primary font-label-sm text-label-sm px-space-xs py-0.5 rounded">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-on-surface">{item.titulo}</h3>
                    <div className="flex items-center gap-space-xs text-on-surface-variant">
                      <span className="material-symbols-outlined text-[16px] text-secondary">
                        place
                      </span>
                      <span className="font-body-sm text-body-sm">{item.local}</span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {item.descricao}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
