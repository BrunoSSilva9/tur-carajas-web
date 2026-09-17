import { useMemo, useState } from 'react'
import { useCatalogo } from '../../hooks/useCatalogo'
import { CardItem } from './CardItem'
import type { Categoria } from '../../types'

type Aba = 'locais' | 'hospedagem' | 'culinaria' | 'experiencias'

const abas: { valor: Aba; label: string }[] = [
  { valor: 'locais', label: 'Locais' },
  { valor: 'hospedagem', label: 'Hospedagem' },
  { valor: 'culinaria', label: 'Culinária' },
  { valor: 'experiencias', label: 'Experiências' },
]

export function Catalogo() {
  const { atrativos, negocios, restaurantes, hospedagem, carregando } = useCatalogo()
  const [aba, setAba] = useState<Aba>('locais')
  const [busca, setBusca] = useState('')
  const [categoriaAtiva, setCategoriaAtiva] = useState<Categoria | 'todos'>('todos')

  const itensLocais = useMemo(() => [...atrativos, ...negocios], [atrativos, negocios])

  const itensDaAba = useMemo(() => {
    if (aba === 'locais') return itensLocais
    if (aba === 'hospedagem') return hospedagem
    if (aba === 'culinaria') return restaurantes
    return []
  }, [aba, itensLocais, hospedagem, restaurantes])

  const categoriasDaAba = useMemo(() => {
    const presentes = new Set(itensDaAba.map((item) => item.categoria))
    return Array.from(presentes)
  }, [itensDaAba])

  const itensFiltrados = itensDaAba
    .filter((item) => categoriaAtiva === 'todos' || item.categoria === categoriaAtiva)
    .filter((item) => item.nome.toLowerCase().includes(busca.toLowerCase()))

  function trocarAba(novaAba: Aba) {
    setAba(novaAba)
    setCategoriaAtiva('todos')
  }

  if (carregando) {
    return <p className="px-margin text-on-surface-variant">Carregando catálogo...</p>
  }

  return (
    <div className="flex flex-col w-full pb-6">
      <div className="px-margin pt-space-md flex flex-col gap-space-sm">
        <div className="flex items-center gap-space-sm">
          <div className="flex-1 flex items-center bg-surface-container-low px-space-md py-space-sm rounded-xl shadow-sm focus-within:bg-surface-container-lowest focus-within:shadow-md transition-all">
            <span className="material-symbols-outlined text-primary text-[22px] mr-space-xs">
              search
            </span>
            <input
              type="text"
              value={busca}
              onChange={(event) => setBusca(event.target.value)}
              placeholder="Buscar atrativos, restaurantes, hotéis..."
              className="w-full bg-transparent border-none outline-none font-body-md text-body-md text-on-surface placeholder:text-outline"
            />
          </div>
        </div>

        <div className="w-full flex items-center gap-1 p-1 rounded-full bg-surface-container">
          {abas.map((item) => (
            <button
              key={item.valor}
              type="button"
              onClick={() => trocarAba(item.valor)}
              className={`flex-1 py-2 px-2 text-center rounded-full text-[12px] font-semibold tracking-tight transition-all ${
                aba === item.valor
                  ? 'bg-primary text-on-primary shadow-sm'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {aba !== 'experiencias' && categoriasDaAba.length > 1 && (
        <div className="w-full overflow-x-auto no-scrollbar py-space-sm mt-space-xs px-margin flex items-center gap-space-xs">
          <button
            type="button"
            onClick={() => setCategoriaAtiva('todos')}
            className={`whitespace-nowrap px-space-md py-space-xs rounded-full font-label-md text-label-md transition-all ${
              categoriaAtiva === 'todos'
                ? 'bg-primary text-on-primary shadow-sm'
                : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
            }`}
          >
            Todos ({itensDaAba.length})
          </button>
          {categoriasDaAba.map((categoria) => {
            const quantidade = itensDaAba.filter((item) => item.categoria === categoria).length
            return (
              <button
                key={categoria}
                type="button"
                onClick={() => setCategoriaAtiva(categoria)}
                className={`whitespace-nowrap px-space-md py-space-xs rounded-full font-label-md text-label-md transition-all ${
                  categoriaAtiva === categoria
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                {categoria === 'praca-parque' ? 'Praças & Parques' : categoria} ({quantidade})
              </button>
            )
          })}
        </div>
      )}

      {aba === 'experiencias' ? (
        <div className="px-margin mt-space-lg flex flex-col items-center text-center gap-space-sm py-space-xl">
          <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-outline mb-space-xs">
            <span className="material-symbols-outlined text-[32px]">travel_explore</span>
          </div>
          <h3 className="font-title-md text-title-md text-on-surface">Em breve</h3>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-[280px]">
            Ainda não existe uma associação formal de guias credenciados em Canaã dos Carajás.
            Assim que houver passeios guiados verificados, eles aparecerão aqui.
          </p>
        </div>
      ) : (
        <div className="px-margin flex flex-col gap-space-md mt-space-sm">
          {itensFiltrados.length === 0 ? (
            <p className="text-on-surface-variant text-body-sm py-space-lg text-center">
              Nenhum item encontrado.
            </p>
          ) : (
            itensFiltrados.map((item) => (
              <CardItem
                key={item.id}
                nome={item.nome}
                categoria={item.categoria}
                descricaoCurta={item.descricaoCurta}
                bairro={item.localizacao.bairro}
                imagem={item.imagem}
                nota={item.nota}
                avaliacoes={item.avaliacoes}
                linkPara={item.categoria === 'comercio' ? `/negocio/${item.id}` : undefined}
              />
            ))
          )}
        </div>
      )}
    </div>
  )
}
