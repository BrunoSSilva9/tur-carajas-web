import type { Orcamento } from '../../../types'

const opcoes: {
  valor: Orcamento
  sigla: string
  titulo: string
  media: string
  corMedia: string
  descricao: string
  popular?: boolean
}[] = [
  {
    valor: 'baixo',
    sigla: '$',
    titulo: 'Econômico & Gratuito',
    media: 'Média: R$ 0 a R$ 40 / dia',
    corMedia: 'text-primary',
    descricao:
      'Foco em cachoeiras de livre acesso, mirantes públicos, trilhas abertas e passeios independentes na floresta nativa.',
  },
  {
    valor: 'medio',
    sigla: '$$',
    titulo: 'Equilibrado & Confortável',
    media: 'Média: R$ 50 a R$ 120 / dia',
    corMedia: 'text-[#1b5e20]',
    descricao:
      'Atrativos com infraestrutura (balneários e fazendas ecológicas), almoço regional paraense e taxas ambientais.',
    popular: true,
  },
  {
    valor: 'alto',
    sigla: '$$$',
    titulo: 'Experiência Completa',
    media: 'Média: R$ 150+ / dia',
    corMedia: 'text-tertiary',
    descricao:
      'Guias credenciados Cadastur exclusivos, gastronomia nobre com sabores amazônicos e circuitos de ecoturismo 4x4 guiados.',
  },
]

interface EtapaOrcamentoProps {
  valor: Orcamento
  onSelecionar: (valor: Orcamento) => void
}

export function EtapaOrcamento({ valor, onSelecionar }: EtapaOrcamentoProps) {
  return (
    <>
      <div className="flex flex-col gap-space-md" role="radiogroup" aria-label="Orçamento">
        {opcoes.map((opcao) => {
          const selecionado = opcao.valor === valor
          return (
            <div
              key={opcao.valor}
              role="radio"
              aria-checked={selecionado}
              tabIndex={0}
              onClick={() => onSelecionar(opcao.valor)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') onSelecionar(opcao.valor)
              }}
              className={`cursor-pointer relative bg-surface-container-lowest rounded-xl p-space-md transition-all active:scale-[0.99] flex flex-col gap-space-sm ${
                selecionado
                  ? 'shadow-md border-l-4 border-[#1b5e20] bg-[#1b5e20]/[0.04]'
                  : 'shadow-sm hover:shadow-md'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-sm">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center font-title-md text-title-md ${
                      selecionado
                        ? 'bg-secondary-container text-on-primary shadow-sm'
                        : 'bg-[#f3efe6] text-[#4b5563]'
                    }`}
                  >
                    {opcao.sigla}
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      <span className="font-title-md text-title-md text-on-surface">{opcao.titulo}</span>
                      {opcao.popular && (
                        <span className="px-2 py-0.5 rounded-full bg-[#d97706] text-white font-label-sm text-label-sm font-semibold">
                          Popular
                        </span>
                      )}
                    </div>
                    <span className={`font-label-sm text-label-sm font-bold ${opcao.corMedia}`}>
                      {opcao.media}
                    </span>
                  </div>
                </div>
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                    selecionado
                      ? 'bg-primary-container text-on-primary shadow-sm'
                      : 'bg-surface-container-high text-transparent'
                  }`}
                >
                  <span
                    className="material-symbols-outlined text-[16px]"
                    style={selecionado ? { fontVariationSettings: "'FILL' 1" } : undefined}
                  >
                    check
                  </span>
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant pl-11">{opcao.descricao}</p>
            </div>
          )
        })}
      </div>

      <div className="mt-space-lg flex flex-col gap-space-sm">
        <div className="flex items-start gap-space-sm bg-surface-container-low p-space-md rounded-xl shadow-sm">
          <span
            className="material-symbols-outlined text-secondary text-[22px] mt-0.5 shrink-0"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            lightbulb
          </span>
          <div className="flex flex-col gap-0.5">
            <span className="font-label-md text-label-md text-on-surface">Dica do guia local:</span>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Mais de 60% dos atrativos naturais em Canaã dos Carajás contam com entrada franca mantida
              pela preservação municipal.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
