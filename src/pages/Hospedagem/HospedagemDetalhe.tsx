import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import type { Hospedagem } from '../../types'
import { buscarHospedagemPorId } from '../../services/hospedagemService'

export function HospedagemDetalhe() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [hospedagem, setHospedagem] = useState<Hospedagem | undefined>(undefined)
  const [carregando, setCarregando] = useState(true)
  const [quartoSelecionado, setQuartoSelecionado] = useState<string | null>(null)
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')

  useEffect(() => {
    if (!id) return
    buscarHospedagemPorId(id).then((resultado) => {
      setHospedagem(resultado)
      setCarregando(false)
    })
  }, [id])

  if (carregando) {
    return <p className="px-margin text-on-surface-variant">Carregando hospedagem...</p>
  }

  if (!hospedagem) {
    return (
      <div className="px-margin flex flex-col gap-space-md items-center text-center py-space-xl">
        <p className="text-on-surface-variant">Hospedagem não encontrada.</p>
        <button type="button" onClick={() => navigate('/catalogo')} className="text-primary underline">
          Voltar ao catálogo
        </button>
      </div>
    )
  }

  const quarto = hospedagem.quartos?.find((item) => item.id === quartoSelecionado)
  const datasPreenchidas = Boolean(checkIn && checkOut)
  const pronto = Boolean(quarto) && datasPreenchidas

  return (
    <div className="flex flex-col w-full md:max-w-2xl md:mx-auto pb-32">
      <div className="px-margin pt-space-sm pb-space-sm flex items-center gap-space-sm">
        <button
          aria-label="Voltar"
          type="button"
          onClick={() => navigate(-1)}
          className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
        </button>
        <span className="font-title-md text-title-md text-on-surface">Detalhe da hospedagem</span>
      </div>

      <div className="px-margin flex flex-col gap-space-lg">
        {/* Identificação */}
        <div className="flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-sm flex-wrap">
            {hospedagem.nota !== undefined && (
              <div className="flex items-center gap-1 bg-surface-container-high text-on-surface px-2.5 py-0.5 rounded-full font-label-md text-label-md">
                <span
                  className="material-symbols-outlined text-[16px] text-secondary-container"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span className="font-bold">{hospedagem.nota}</span>
                {hospedagem.avaliacoes !== undefined && (
                  <span className="text-on-surface-variant font-normal">
                    ({hospedagem.avaliacoes} avaliações)
                  </span>
                )}
              </div>
            )}
          </div>
          <h1 className="font-headline-sm text-headline-sm text-on-surface">{hospedagem.nome}</h1>
          <div className="flex items-center gap-1 text-on-surface-variant">
            <span className="material-symbols-outlined text-[18px] text-primary">location_on</span>
            <span className="font-body-md text-body-md">{hospedagem.localizacao.bairro}</span>
          </div>
        </div>

        {/* Sobre */}
        {hospedagem.descricaoCompleta && (
          <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm">
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {hospedagem.descricaoCompleta}
            </p>
          </div>
        )}

        {/* Comodidades */}
        {hospedagem.amenidades && hospedagem.amenidades.length > 0 && (
          <div className="flex flex-col gap-space-sm">
            <div className="flex items-center justify-between">
              <h3 className="font-title-md text-title-md text-on-surface">Comodidades</h3>
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                exemplos comuns — a confirmar
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {hospedagem.amenidades.map((amenidade) => (
                <div
                  key={amenidade}
                  className="bg-surface-container-lowest p-3 rounded-xl shadow-sm flex items-center gap-2.5"
                >
                  <span className="material-symbols-outlined text-primary text-[20px]">check</span>
                  <span className="font-body-sm text-body-sm text-on-surface font-medium">
                    {amenidade}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quartos */}
        {hospedagem.quartos && hospedagem.quartos.length > 0 && (
          <div className="flex flex-col gap-space-sm">
            <div>
              <h3 className="font-title-md text-title-md text-on-surface">Escolha sua acomodação</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Toque para selecionar o quarto desejado — preços de exemplo, a confirmar
              </p>
            </div>
            <div className="flex flex-col gap-space-sm">
              {hospedagem.quartos.map((item) => {
                const selecionado = item.id === quartoSelecionado
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setQuartoSelecionado(selecionado ? null : item.id)}
                    className={`text-left rounded-2xl p-space-md shadow-sm transition-all ${
                      selecionado
                        ? 'bg-surface-container-high ring-2 ring-primary'
                        : 'bg-surface-container-lowest hover:bg-surface-container-low'
                    }`}
                  >
                    <div className="flex justify-between items-start gap-space-sm">
                      <div>
                        <h4 className="font-title-md text-title-md text-on-surface leading-tight">
                          {item.nome}
                        </h4>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          {item.capacidade}
                          {item.tamanhoM2 && ` · ${item.tamanhoM2} m²`}
                        </span>
                      </div>
                      <span
                        className={`shrink-0 px-4 py-2 rounded-xl font-label-md text-label-md transition-all ${
                          selecionado
                            ? 'bg-primary text-on-primary'
                            : 'bg-surface-container text-primary'
                        }`}
                      >
                        {selecionado ? 'Selecionado ✓' : 'Selecionar'}
                      </span>
                    </div>
                    <div className="mt-space-sm pt-space-sm border-t border-outline-variant/30">
                      <span className="font-body-sm text-body-sm text-on-surface-variant block">
                        Diária (exemplo)
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                          R$ {item.precoNoite}
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">/ noite</span>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {/* Datas */}
        <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col gap-space-sm">
          <h3 className="font-title-md text-title-md text-on-surface">Datas da estadia</h3>
          <div className="grid grid-cols-2 gap-space-sm">
            <label className="flex flex-col gap-1">
              <span className="font-label-sm text-label-sm text-on-surface-variant">Check-in</span>
              <input
                type="date"
                value={checkIn}
                onChange={(event) => setCheckIn(event.target.value)}
                className="bg-surface-container-low rounded-lg px-space-sm py-space-xs font-body-sm text-body-sm text-on-surface outline-none"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="font-label-sm text-label-sm text-on-surface-variant">Check-out</span>
              <input
                type="date"
                value={checkOut}
                onChange={(event) => setCheckOut(event.target.value)}
                className="bg-surface-container-low rounded-lg px-space-sm py-space-xs font-body-sm text-body-sm text-on-surface outline-none"
              />
            </label>
          </div>
        </div>
      </div>

      {/* Barra de ação fixa */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_-4px_20px_rgba(0,0,0,0.06)] pb-safe">
        <div className="px-margin py-3 flex items-center justify-between max-w-lg mx-auto gap-space-sm">
          <div className="flex flex-col min-w-0">
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              {quarto ? 'Valor selecionado' : 'A partir de'}
            </span>
            <div className="flex items-baseline gap-1">
              <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                R${' '}
                {quarto
                  ? quarto.precoNoite
                  : Math.min(...(hospedagem.quartos?.map((q) => q.precoNoite) ?? [0]))}
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">/ noite</span>
            </div>
            <span className="font-label-sm text-label-sm text-secondary font-semibold">
              {pronto ? 'Contato via WhatsApp em breve' : 'Selecione datas e quarto'}
            </span>
          </div>
          <button
            type="button"
            disabled
            title="Contato via WhatsApp ainda não disponível para esta hospedagem"
            className="shrink-0 bg-surface-variant text-on-surface-variant/50 cursor-not-allowed font-label-lg text-label-lg font-bold px-6 py-3 rounded-xl flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[18px]">
              {pronto ? 'chat' : 'lock'}
            </span>
            <span>{pronto ? 'Reservar (em breve)' : 'Reservar'}</span>
          </button>
        </div>
      </div>
    </div>
  )
}
