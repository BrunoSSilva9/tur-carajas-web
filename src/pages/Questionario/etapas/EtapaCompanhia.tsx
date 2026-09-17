import type { Companhia } from '../../../types'

const opcoes: {
  valor: Companhia
  icone: string
  iconePreenchido?: boolean
  tag: string
  titulo: string
  descricao: string
  dica: string
}[] = [
  {
    valor: 'sozinho',
    icone: 'hiking',
    tag: 'Paz & Aventura',
    titulo: 'Sozinho',
    descricao: 'Trilhas de contemplação e autodescoberta na floresta.',
    dica: 'Para quem viaja só, as trilhas da Floresta Nacional oferecem guias nativos experientes e pontos de pura meditação junto às nascentes.',
  },
  {
    valor: 'casal',
    icone: 'favorite',
    iconePreenchido: true,
    tag: 'Romântico',
    titulo: 'Em Casal',
    descricao: 'Mirantes para pôr do sol e gastronomia intimista.',
    dica: 'Para casais, o entardecer no Mirante do Vale dos Carajás com vista para a Serra Sul é uma das paradas mais inesquecíveis da região.',
  },
  {
    valor: 'familia',
    icone: 'family_restroom',
    tag: 'Acessível',
    titulo: 'Família',
    descricao: 'Balneários seguros com água calma e fácil acesso.',
    dica: 'Com a família, o Lago Municipal e o Balneário da Fazendinha possuem áreas rasas, quiosques com sombra e estrutura de socorro.',
  },
  {
    valor: 'amigos',
    icone: 'groups',
    tag: 'Social & Ação',
    titulo: 'Amigos',
    descricao: 'Cachoeiras com poços profundos e vivências em grupo.',
    dica: 'Para a turma reunida, a Trilha das Três Quedas e a Cachoeira de Canaã garantem piscinas naturais fundas perfeitas para nado e saltos com segurança.',
  },
]

interface EtapaCompanhiaProps {
  valor: Companhia
  onSelecionar: (valor: Companhia) => void
}

export function EtapaCompanhia({ valor, onSelecionar }: EtapaCompanhiaProps) {
  const selecionada = opcoes.find((opcao) => opcao.valor === valor) ?? opcoes[1]

  return (
    <>
      <div
        aria-label="Selecione com quem vai viajar"
        role="radiogroup"
        className="grid grid-cols-2 gap-space-sm mb-space-lg"
      >
        {opcoes.map((opcao) => {
          const selecionado = opcao.valor === valor
          return (
            <button
              key={opcao.valor}
              type="button"
              role="radio"
              aria-checked={selecionado}
              onClick={() => onSelecionar(opcao.valor)}
              className={`relative flex flex-col text-left p-space-md rounded-xl transition-all duration-200 active:scale-[0.98] ${
                selecionado
                  ? 'bg-[#1B5E20]/[0.06] border-2 border-primary shadow-sm'
                  : 'bg-surface-container-lowest border border-transparent shadow-sm hover:shadow-md'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-space-sm">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    selecionado ? 'bg-[#F3EFE6] text-primary shadow-sm' : 'bg-surface-container text-primary'
                  }`}
                >
                  <span
                    className="material-symbols-outlined text-[22px]"
                    style={
                      selecionado && opcao.iconePreenchido
                        ? { fontVariationSettings: "'FILL' 1" }
                        : undefined
                    }
                  >
                    {opcao.icone}
                  </span>
                </div>
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                    selecionado
                      ? 'bg-primary text-on-primary shadow-sm'
                      : 'border-2 border-[#D1D5DB] bg-transparent'
                  }`}
                >
                  <span
                    className={`material-symbols-outlined text-[16px] ${
                      selecionado ? 'text-on-primary' : 'text-transparent'
                    }`}
                  >
                    check
                  </span>
                </div>
              </div>
              <span className="inline-block self-start font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-[#F3EFE6] text-[#4B5563] mb-1.5 font-medium">
                {opcao.tag}
              </span>
              <h2 className="font-title-md text-title-md text-on-surface mb-1">{opcao.titulo}</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-snug">
                {opcao.descricao}
              </p>
            </button>
          )
        })}
      </div>

      <div className="flex items-start gap-space-sm p-space-md rounded-xl bg-surface-container-low mb-space-xl">
        <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-primary shrink-0 mt-0.5">
          <span className="material-symbols-outlined text-[18px]">wb_sunny</span>
        </div>
        <div className="flex flex-col min-w-0">
          <span className="font-label-md text-label-md text-on-surface font-semibold">
            Dica de Canaã dos Carajás
          </span>
          <p className="font-body-sm text-body-sm text-on-surface-variant">{selecionada.dica}</p>
        </div>
      </div>
    </>
  )
}
