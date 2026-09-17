import type { Duracao } from '../../../types'

const opcoes: {
  valor: Duracao
  icone: string
  titulo: string
  badge: string
  descricao: string
  destaque?: string
}[] = [
  {
    valor: '2-3h',
    icone: 'bolt',
    titulo: '2 a 3 horas',
    badge: 'Ideal p/ hoje',
    descricao: 'Circuito rápido com parada revigorante e mirante panorâmico.',
    destaque: 'ideal',
  },
  {
    valor: 'meio-dia',
    icone: 'wb_sunny',
    titulo: 'Meio período',
    badge: '4 a 5h',
    descricao: 'Manhã ou tarde com direito a almoço regional e cachoeira.',
  },
  {
    valor: 'dia-inteiro',
    icone: 'forest',
    titulo: 'Dia inteiro',
    badge: '8h+',
    descricao: 'Imersão completa com trilha, banho de rio e pôr do sol inesquecível.',
  },
  {
    valor: 'fim-de-semana',
    icone: 'hiking',
    titulo: 'Final de semana',
    badge: '2 dias',
    descricao: 'A rota completa de ecoturismo, cavernas misteriosas e culinária típica.',
  },
]

interface EtapaTempoProps {
  valor: Duracao
  onSelecionar: (valor: Duracao) => void
}

export function EtapaTempo({ valor, onSelecionar }: EtapaTempoProps) {
  return (
    <>
      <div aria-label="Tempo disponível" role="radiogroup" className="flex flex-col gap-space-sm mt-space-xs">
        {opcoes.map((opcao) => {
          const selecionado = opcao.valor === valor
          return (
            <label
              key={opcao.valor}
              className={`group relative flex items-start gap-space-md p-space-md rounded-xl bg-surface-container-lowest cursor-pointer transition-all active:scale-[0.99] overflow-hidden ${
                selecionado ? 'shadow-md' : 'shadow-sm hover:shadow-md'
              }`}
            >
              {selecionado && (
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary-container" />
              )}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                  selecionado
                    ? 'bg-primary-fixed text-primary shadow-sm'
                    : 'bg-surface-container-high text-on-surface-variant group-hover:text-primary transition-colors'
                }`}
              >
                <span className="material-symbols-outlined text-[24px]">{opcao.icone}</span>
              </div>
              <div className="flex flex-col flex-1 min-w-0 pr-6">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-title-md text-title-md text-on-surface">{opcao.titulo}</span>
                  <span
                    className={`font-label-sm text-label-sm px-2 py-0.5 rounded-full ${
                      opcao.destaque
                        ? 'text-[#D97706] font-semibold bg-[#D97706]/15'
                        : 'text-on-surface-variant bg-surface-container'
                    }`}
                  >
                    {opcao.badge}
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-snug">
                  {opcao.descricao}
                </p>
              </div>
              <div
                className={`absolute top-4 right-4 ${
                  selecionado ? 'text-primary-container' : 'text-outline-variant group-hover:text-outline'
                }`}
              >
                <span
                  className="material-symbols-outlined text-[24px]"
                  style={selecionado ? { fontVariationSettings: "'FILL' 1" } : undefined}
                >
                  {selecionado ? 'check_circle' : 'radio_button_unchecked'}
                </span>
              </div>
              <input
                type="radio"
                name="duration"
                value={opcao.valor}
                checked={selecionado}
                onChange={() => onSelecionar(opcao.valor)}
                className="sr-only"
              />
            </label>
          )
        })}
      </div>

      <div className="flex items-center gap-space-sm p-space-sm bg-surface-container-low rounded-lg mt-space-md text-on-surface-variant">
        <span className="material-symbols-outlined text-secondary text-[18px]">verified</span>
        <span className="font-body-sm text-body-sm">
          Os roteiros contam com estimativas reais de deslocamento nas serras de Carajás.
        </span>
      </div>
    </>
  )
}
