import { useState } from 'react'
import { Link } from 'react-router-dom'

const filtros = ['Tudo', 'Cachoeiras', 'Mirantes & Serras', 'Trilhas', 'Gastronomia']

const destaques = [
  {
    nome: 'Lago da Prefeitura',
    descricao: 'Ponto turístico urbano mais avaliado da cidade.',
    nota: 4.7,
    avaliacoes: 1021,
    icone: 'water_drop',
  },
  {
    nome: 'Lago dos Buritis',
    descricao: 'Atrativo natural urbano, aberto 24h.',
    nota: 4.6,
    avaliacoes: 933,
    icone: 'forest',
  },
]

export function Home() {
  const [filtroAtivo, setFiltroAtivo] = useState('Tudo')

  return (
    <div className="flex flex-col w-full max-w-2xl mx-auto px-margin pt-space-md pb-space-xl gap-space-lg">
      {/* Localização + clima */}
      <div className="flex items-center justify-between text-on-surface-variant text-body-sm">
        <div className="flex items-center gap-1">
          <span className="material-symbols-outlined text-[16px] text-primary">location_on</span>
          <span className="font-label-md text-label-md text-on-surface">Canaã dos Carajás, PA</span>
        </div>
        <div className="flex items-center gap-1 font-body-sm text-outline">
          <span className="material-symbols-outlined text-[16px] text-secondary">wb_sunny</span>
          <span>29°C</span>
        </div>
      </div>

      {/* Hero minimalista */}
      <section className="relative rounded-xl overflow-hidden min-h-[360px] flex flex-col justify-end p-space-lg bg-surface-container">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/atrativos/atr-toten-canaa-carajas.png')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent" />
        <div className="relative z-10 flex flex-col gap-space-sm text-surface-bright">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed">
            Ecoturismo & Natureza
          </span>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-surface-bright tracking-tight leading-tight">
            Viva a essência de Canaã dos Carajás
          </h1>
          <p className="font-body-sm text-body-sm text-surface-variant/90">
            Roteiros sob medida para vivenciar o melhor da Amazônia paraense com serenidade e
            autenticidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-space-sm pt-space-xs">
            <Link
              to="/questionario"
              className="w-full flex items-center justify-center gap-space-xs bg-primary-fixed hover:bg-primary-fixed-dim text-on-primary-fixed font-label-lg text-label-lg py-space-md px-space-lg rounded-lg shadow-sm transition-all active:scale-[0.98]"
            >
              <span className="material-symbols-outlined text-[20px]">auto_awesome</span>
              <span>Criar meu roteiro</span>
            </Link>
            <Link
              to="/catalogo"
              className="w-full flex items-center justify-center gap-space-xs bg-surface-bright/20 hover:bg-surface-bright/30 backdrop-blur-md text-surface-bright font-label-lg text-label-lg py-space-md px-space-lg rounded-lg transition-all active:scale-[0.98]"
            >
              <span>Explorar atrativos</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Acesso rápido: Calendário de Eventos */}
      <Link
        to="/eventos"
        className="w-full flex items-center justify-between p-space-md bg-surface-container-lowest hover:bg-surface-container-low border border-outline-variant/40 rounded-xl shadow-sm transition-all active:scale-[0.98]"
      >
        <div className="flex items-center gap-space-md">
          <span className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
            <span className="material-symbols-outlined text-[22px]">calendar_month</span>
          </span>
          <div className="flex flex-col items-start text-left">
            <span className="font-headline-sm text-title-md text-on-surface leading-tight">
              Calendário de Eventos
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant leading-tight mt-0.5">
              Confira a programação cultural & esportiva
            </span>
          </div>
        </div>
        <span className="material-symbols-outlined text-[22px] text-primary">chevron_right</span>
      </Link>

      {/* Filtros de categoria */}
      <section className="flex flex-col gap-space-sm">
        <div className="flex gap-space-xs overflow-x-auto no-scrollbar py-1">
          {filtros.map((filtro) => (
            <button
              key={filtro}
              type="button"
              onClick={() => setFiltroAtivo(filtro)}
              className={`px-space-md py-space-xs rounded-full font-label-md text-label-md shrink-0 transition-colors ${
                filtroAtivo === filtro
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface-container-high hover:bg-surface-container-highest text-on-surface'
              }`}
            >
              {filtro}
            </button>
          ))}
        </div>
      </section>

      {/* Destaques selecionados */}
      <section className="flex flex-col gap-space-md">
        <div className="flex items-center justify-between">
          <h2 className="font-headline-sm text-headline-sm text-on-surface tracking-tight">
            Destaques Selecionados
          </h2>
          <Link
            to="/catalogo"
            className="font-label-md text-label-md text-secondary hover:underline flex items-center gap-0.5"
          >
            Ver todos
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </div>
        <div className="flex flex-col gap-space-md">
          {destaques.map((item) => (
            <Link
              to="/catalogo"
              key={item.nome}
              className="group rounded-xl overflow-hidden bg-surface-container-lowest shadow-sm flex flex-col"
            >
              <div className="relative w-full h-44 bg-gradient-to-br from-primary/70 to-primary-container/70 flex items-center justify-center">
                <span className="material-symbols-outlined text-[40px] text-on-primary">
                  {item.icone}
                </span>
                <span className="absolute top-3 left-3 bg-surface-bright/90 backdrop-blur-md px-space-sm py-0.5 rounded-full font-label-sm text-label-sm text-on-surface flex items-center gap-1">
                  <span
                    className="material-symbols-outlined text-[14px] text-secondary-container"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  {item.nota}
                  <span className="text-on-surface-variant">({item.avaliacoes})</span>
                </span>
              </div>
              <div className="p-space-md flex flex-col gap-1">
                <h3 className="font-title-md text-title-md text-on-surface">{item.nome}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {item.descricao}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
