import type { NivelCaminhada, Transporte } from '../../../types'

const opcoesTransporte: {
  valor: Transporte
  icone: string
  tag?: string
  titulo: string
  descricao: string
}[] = [
  {
    valor: 'carro-proprio',
    icone: 'directions_car',
    tag: 'Ideal para Serras & Cachoeiras',
    titulo: 'Carro Próprio ou Alugado (4x4 / Passeio)',
    descricao:
      'Autonomia total para explorar atrações afastadas, mirantes da Serra Sul e balneários rurais com flexibilidade.',
  },
  {
    valor: 'transporte-local',
    icone: 'local_taxi',
    titulo: 'Transporte Local / Aplicativo & Transfer',
    descricao:
      'Foco no centro urbano, praças, polos de gastronomia paraense e atrativos com acesso asfaltado rápido.',
  },
  {
    valor: 'trilha-guiada',
    icone: 'hiking',
    titulo: 'Ritmo Trilha & Ecoturismo Guiado',
    descricao:
      'Caminhadas contemplativas, circuitos de cavernas e expedições pela Floresta Nacional com guia Cadastur.',
  },
]

const opcoesNivel: { valor: NivelCaminhada; icone: string; label: string }[] = [
  { valor: 'leve', icone: 'check', label: 'Leve (Passeio)' },
  { valor: 'moderado', icone: 'hiking', label: 'Moderado (Trilhas)' },
  { valor: 'intenso', icone: 'sprint', label: 'Intenso (Aventura)' },
]

interface EtapaRitmoProps {
  transporte: Transporte
  nivelCaminhada: NivelCaminhada
  onSelecionarTransporte: (valor: Transporte) => void
  onSelecionarNivel: (valor: NivelCaminhada) => void
}

export function EtapaRitmo({
  transporte,
  nivelCaminhada,
  onSelecionarTransporte,
  onSelecionarNivel,
}: EtapaRitmoProps) {
  return (
    <>
      <div
        aria-label="Forma principal de deslocamento"
        role="radiogroup"
        className="flex flex-col gap-space-md mb-space-lg"
      >
        {opcoesTransporte.map((opcao) => {
          const selecionado = opcao.valor === transporte
          return (
            <div
              key={opcao.valor}
              role="radio"
              aria-checked={selecionado}
              tabIndex={0}
              onClick={() => onSelecionarTransporte(opcao.valor)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') onSelecionarTransporte(opcao.valor)
              }}
              className="relative bg-surface-container-lowest rounded-xl p-space-md shadow-sm transition-all duration-200 cursor-pointer overflow-hidden flex flex-col gap-2.5"
            >
              {selecionado && (
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary-container" />
              )}
              <div className={`flex items-center ${opcao.tag ? 'justify-between' : 'justify-end'}`}>
                {opcao.tag && (
                  <span className="inline-flex items-center font-label-sm text-label-sm bg-primary/10 text-primary-container font-semibold px-2.5 py-0.5 rounded-full">
                    {opcao.tag}
                  </span>
                )}
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    selecionado
                      ? 'bg-primary-container text-on-primary'
                      : 'bg-surface-container text-on-surface-variant'
                  }`}
                >
                  {selecionado ? (
                    <span className="material-symbols-outlined text-[16px]">check</span>
                  ) : (
                    <div className="w-2.5 h-2.5 rounded-full bg-surface-dim" />
                  )}
                </div>
              </div>
              <div className="flex items-start gap-space-md">
                <div
                  className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center ${
                    selecionado
                      ? 'bg-primary/10 text-primary-container'
                      : 'bg-surface-container text-on-surface-variant'
                  }`}
                >
                  <span className="material-symbols-outlined text-[26px]">{opcao.icone}</span>
                </div>
                <div className="flex flex-col pr-1">
                  <h2 className="font-title-md text-title-md text-on-surface leading-snug">
                    {opcao.titulo}
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                    {opcao.descricao}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="flex flex-col mb-space-lg">
        <span className="font-label-lg text-label-lg text-on-surface mb-space-sm flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[18px] text-primary-container">footprint</span>
          Nível preferido de caminhada:
        </span>
        <div aria-label="Selecione o nível de caminhada" role="group" className="flex flex-wrap gap-2">
          {opcoesNivel.map((opcao) => {
            const selecionado = opcao.valor === nivelCaminhada
            return (
              <button
                key={opcao.valor}
                type="button"
                onClick={() => onSelecionarNivel(opcao.valor)}
                className={`px-4 py-2 rounded-full font-label-md text-label-md flex items-center gap-1.5 shadow-sm transition-all ${
                  selecionado
                    ? 'bg-primary-container text-on-primary'
                    : 'bg-surface-container text-on-surface hover:bg-surface-variant'
                }`}
              >
                <span
                  className={`material-symbols-outlined text-[16px] ${
                    selecionado ? 'text-on-primary' : 'text-on-surface-variant'
                  }`}
                >
                  {opcao.icone}
                </span>
                <span>{opcao.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="bg-surface-container-low rounded-xl p-space-md flex items-start gap-space-sm mb-space-xl shadow-sm">
        <div className="w-9 h-9 rounded-full bg-secondary/10 flex-shrink-0 flex items-center justify-center text-secondary">
          <span className="material-symbols-outlined text-[20px]">lightbulb</span>
        </div>
        <div className="flex flex-col">
          <span className="font-label-md text-label-md text-on-surface font-semibold">
            Dica de Canaã dos Carajás:
          </span>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 leading-relaxed">
            Algumas cachoeiras nas serras exigem veículos com tração ou trechos curtos a pé. Ajustaremos
            o itinerário para que o retorno ocorra sempre com luz natural e máxima segurança.
          </p>
        </div>
      </div>
    </>
  )
}
