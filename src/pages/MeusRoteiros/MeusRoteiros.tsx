import { useState } from 'react'
import { Link } from 'react-router-dom'

type Filtro = 'todos' | 'andamento' | 'concluidos'

const roteiros = [
  {
    id: 'r1',
    categoria: 'andamento' as Filtro,
    status: 'Em andamento • Hoje',
    titulo: 'Fim de Semana Ecoturístico em Canaã',
    tag: 'Ecoturismo & Aventura',
    imagem:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB5PW40pJrbqSbFU32r71MRMe1He6wltGc7IqUBwhZzT0gd_rY78MFzxnW_YV5l7ZEsAitSlqTjHQSXs2HOlAKr4Ux3YfDFzO86UBJDkh9BfvAQ2nYBRctS4tce6cYX0FG3rLCbrVWrtE_gFjNATwxZG5LQmb5oRQlSIPsufzrkVQBqahIm3wHMB53T6x8wDa7IzXIpElOCx2XK0J-70bXvYYkzOj6TOjH9n1VaiiBlo2VS0xUfjwGB',
    metricas: [
      { icone: 'schedule', label: '2 Dias' },
      { icone: 'pin_drop', label: '6 Paradas' },
      { icone: 'directions_car', label: '24 km' },
      { icone: 'payments', label: '~R$ 120' },
    ],
    criadoEm: 'Criado em 14 Set',
  },
  {
    id: 'r2',
    categoria: 'andamento' as Filtro,
    status: 'Planejado',
    titulo: 'Circuito Rápido: Gastronomia & Pôr do Sol',
    metricas: [
      { icone: 'timer', label: '5h30' },
      { icone: 'pin_drop', label: '3 Paradas' },
      { icone: 'near_me', label: '14 km' },
      { icone: 'payments', label: '~R$ 80' },
    ],
    criadoEm: 'Para o próximo sábado',
  },
  {
    id: 'r3',
    categoria: 'concluidos' as Filtro,
    status: 'Concluído • Ago 2024',
    titulo: 'Trilhas & Balneários de Verão',
    metricas: [
      { icone: 'schedule', label: '1 Dia' },
      { icone: 'place', label: '4 Paradas' },
      { icone: 'done_all', label: '100% percorrido' },
    ],
    criadoEm: 'Avaliado em 5.0 estrelas',
  },
]

const filtros: { valor: Filtro; label: string }[] = [
  { valor: 'todos', label: 'Todos' },
  { valor: 'andamento', label: 'Em andamento' },
  { valor: 'concluidos', label: 'Concluídos' },
]

export function MeusRoteiros() {
  const [filtro, setFiltro] = useState<Filtro>('todos')

  const roteirosFiltrados =
    filtro === 'todos' ? roteiros : roteiros.filter((roteiro) => roteiro.categoria === filtro)

  return (
    <div className="flex flex-col w-full">
      <section className="px-margin pt-space-md pb-space-sm flex flex-col gap-space-xs">
        <div className="flex items-center justify-between gap-space-sm">
          <h1 className="font-headline-md text-headline-md text-on-surface tracking-tight">
            Meus Roteiros
          </h1>
          <Link
            to="/questionario"
            className="h-9 px-space-md bg-primary hover:bg-primary-container text-on-primary rounded-full flex items-center justify-center gap-space-xs font-label-md text-label-md transition-all active:scale-95 shadow-sm"
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
            <span>Criar novo</span>
          </Link>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Gerencie seus passeios salvos e históricos em Canaã
        </p>
      </section>

      <section className="px-margin py-space-sm">
        <div className="flex items-center gap-space-sm overflow-x-auto no-scrollbar py-space-xs">
          {filtros.map((opcao) => {
            const quantidade =
              opcao.valor === 'todos'
                ? roteiros.length
                : roteiros.filter((roteiro) => roteiro.categoria === opcao.valor).length
            const ativo = filtro === opcao.valor
            return (
              <button
                key={opcao.valor}
                type="button"
                onClick={() => setFiltro(opcao.valor)}
                className={`flex items-center gap-space-xs px-space-md py-space-xs rounded-full font-label-md text-label-md transition-all whitespace-nowrap ${
                  ativo
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'bg-surface-container text-on-surface-variant hover:bg-surface-variant'
                }`}
              >
                <span>{opcao.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    ativo ? 'bg-primary-container/60 text-on-primary' : 'bg-surface-variant text-on-surface-variant'
                  }`}
                >
                  {quantidade}
                </span>
              </button>
            )
          })}
        </div>
      </section>

      <section className="px-margin py-space-sm flex flex-col gap-space-md">
        {roteirosFiltrados.length === 0 ? (
          <div className="py-space-xl flex flex-col items-center text-center gap-space-sm">
            <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-outline mb-space-xs">
              <span className="material-symbols-outlined text-[32px]">travel_explore</span>
            </div>
            <h3 className="font-title-md text-title-md text-on-surface">Nenhum roteiro encontrado</h3>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-[260px]">
              Você ainda não tem roteiros nesta categoria. Crie um novo sob medida!
            </p>
            <Link
              to="/questionario"
              className="mt-space-sm px-space-lg py-2 bg-primary text-on-primary rounded-full font-label-md text-label-md"
            >
              Criar Roteiro
            </Link>
          </div>
        ) : (
          roteirosFiltrados.map((roteiro) =>
            roteiro.imagem ? (
              <article
                key={roteiro.id}
                className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col transition-all hover:shadow-md"
              >
                <div className="relative w-full h-44 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${roteiro.imagem}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />
                  <div className="absolute top-space-sm left-space-sm flex items-center gap-1.5 bg-secondary-container text-on-secondary-container px-2.5 py-1 rounded-full shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                    <span className="font-label-sm text-label-sm uppercase tracking-wider">
                      {roteiro.status}
                    </span>
                  </div>
                  <div className="absolute bottom-space-sm left-space-md right-space-md text-white">
                    <span className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-wider">
                      {roteiro.tag}
                    </span>
                    <h2 className="font-title-md text-title-md text-white tracking-tight leading-snug drop-shadow-sm">
                      {roteiro.titulo}
                    </h2>
                  </div>
                </div>
                <div className="p-space-md flex flex-col gap-space-md">
                  <div className="grid grid-cols-4 gap-space-xs bg-surface-container-low rounded-lg p-space-sm text-on-surface font-label-sm text-label-sm">
                    {roteiro.metricas.map((metrica) => (
                      <div
                        key={metrica.icone}
                        className="flex flex-col items-center justify-center text-center gap-0.5"
                      >
                        <span className="material-symbols-outlined text-[16px] text-primary">
                          {metrica.icone}
                        </span>
                        <span className="font-label-md text-label-md">{metrica.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-space-xs flex items-center justify-between">
                    <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                      {roteiro.criadoEm}
                    </span>
                    <Link
                      to="/roteiro"
                      className="px-space-md py-space-xs bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md rounded-lg flex items-center gap-space-xs transition-all shadow-sm active:scale-95"
                    >
                      <span>Ver Roteiro</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </article>
            ) : (
              <article
                key={roteiro.id}
                className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md flex flex-col gap-space-md transition-all hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-space-sm">
                  <div className="flex flex-col gap-1">
                    <div
                      className={`self-start px-2 py-0.5 rounded font-label-sm text-label-sm uppercase tracking-wider ${
                        roteiro.categoria === 'concluidos'
                          ? 'bg-surface-container text-on-surface-variant flex items-center gap-1'
                          : 'bg-primary-fixed text-on-primary-fixed'
                      }`}
                    >
                      {roteiro.categoria === 'concluidos' && (
                        <span className="material-symbols-outlined text-[14px] text-primary">
                          check_circle
                        </span>
                      )}
                      {roteiro.status}
                    </div>
                    <h2 className="font-headline-sm text-headline-sm text-on-surface tracking-tight mt-1">
                      {roteiro.titulo}
                    </h2>
                  </div>
                </div>
                <div className="flex items-center gap-space-md flex-wrap bg-surface-container-low rounded-lg px-space-md py-space-xs font-label-sm text-label-sm text-on-surface-variant">
                  {roteiro.metricas.map((metrica) => (
                    <span key={metrica.icone} className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[15px] text-primary">
                        {metrica.icone}
                      </span>
                      {metrica.label}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-0.5">
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    {roteiro.criadoEm}
                  </span>
                  <Link
                    to="/roteiro"
                    className="px-space-md py-1.5 bg-surface-container text-primary hover:bg-primary hover:text-on-primary rounded-lg font-label-md text-label-md flex items-center gap-1 transition-all active:scale-95"
                  >
                    <span>{roteiro.categoria === 'concluidos' ? 'Refazer' : 'Ver Roteiro'}</span>
                    <span className="material-symbols-outlined text-[16px]">
                      {roteiro.categoria === 'concluidos' ? 'restart_alt' : 'play_arrow'}
                    </span>
                  </Link>
                </div>
              </article>
            ),
          )
        )}
      </section>
    </div>
  )
}
