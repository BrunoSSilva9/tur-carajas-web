import { Link } from 'react-router-dom'

interface SugestaoRapida {
  nome: string
  descricao: string
  tempo: string
  preco: string
  categoria: string
  categoriaClasse: string
  precoClasse: string
  icone: string
  imagem: string
}

const sugestoes: SugestaoRapida[] = [
  {
    nome: 'Circuito Ecoturismo Express',
    descricao: 'Cachoeiras e banhos naturais perto da cidade',
    tempo: '3h',
    preco: 'Gratuito',
    categoria: 'Ecoturismo',
    categoriaClasse: 'bg-secondary text-on-secondary',
    precoClasse: 'text-primary',
    icone: 'water_drop',
    imagem:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCDS1HaCBJ4eiE_PcmGOoCtEEFFoVDeFd2bP69MlaJFciPmnyRglTJulARcH3Aa0JFL_LHQwMjuBxT8AwLQn6ti7ljmXS6oK77iJ1Y0Uc5OqFw860AB0MnQcLwH9GDlOVtLB4B38HiMm1I-q08u87Fc0kq5SAa97f7t7Gk9t8aI5Jzbl8DQFdswZ3L-6TzrbrUfPhPGAHVmqdszSy6qV1RAbvcyRQoV1by40L8X342UXOHaR_KRBgwN',
  },
  {
    nome: 'Pôr do Sol & Gastronomia',
    descricao: 'Mirante da Serra e culinária típica paraense',
    tempo: '4h',
    preco: 'R$ 60',
    categoria: 'Gastronomia & Vista',
    categoriaClasse: 'bg-secondary-container text-on-secondary-container',
    precoClasse: 'text-secondary',
    icone: 'restaurant',
    imagem:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCoHUDIBIB5R6CFpJG9RxJgUalT_YFocTwyJd0KmhA4IWmFhX6i4SQZJg9DUVpF1HZVnIC0_Xe6UdZ2RAQ6tsU_Lk49XLSeJxmpFwjst3OUYAn8AVJ8rpinjzKZS5ubKPZsq7CoIz9ofcmWUN-ge4xWvdOEtfQ_IzGdjnsxgjq6WcLGxGA_pj2BMzfReTOgEzcAKC_w_0PuY1lOwtyi32rajMkp1PGvjeuv8y2tIWyacps6cvSfZab7',
  },
]

interface EstadoVazioProps {
  onUsarSugestao: () => void
}

export function EstadoVazio({ onUsarSugestao }: EstadoVazioProps) {
  return (
    <div className="flex flex-col w-full px-margin pb-space-lg">
      <section className="flex flex-col gap-space-xs mt-space-sm mb-space-md">
        <div className="inline-flex items-center gap-1.5 self-start px-2.5 py-1 rounded-full bg-surface-container text-primary">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="font-label-sm text-label-sm tracking-wider uppercase font-bold">
            Planejamento Inteligente
          </span>
        </div>
        <h1 className="font-headline-md text-headline-md text-on-surface">Seu Roteiro</h1>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Planeje o dia perfeito em Canaã dos Carajás
        </p>
      </section>

      <section className="w-full bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col items-center text-center">
        <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-surface-container-low mb-space-md">
          <span
            className="material-symbols-outlined text-[36px] text-primary"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            explore
          </span>
          <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-secondary-container flex items-center justify-center shadow-sm">
            <span
              className="material-symbols-outlined text-[16px] text-on-secondary-container"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              auto_awesome
            </span>
          </div>
        </div>
        <h2 className="font-title-md text-title-md text-on-surface mb-space-xs">
          Você ainda não tem um roteiro para hoje
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-[290px] mb-space-md">
          Responda a 5 perguntas rápidas e nosso assistente vai montar o itinerário ideal para o
          seu tempo, orçamento e ritmo de viagem.
        </p>
        <div className="w-full flex flex-col gap-space-xs bg-surface-container-low/70 rounded-lg p-space-sm mb-space-md text-left">
          <div className="flex items-center gap-space-sm">
            <span
              className="material-symbols-outlined text-primary text-[18px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              check_circle
            </span>
            <span className="font-body-sm text-body-sm text-on-surface">
              100% personalizado para seu ritmo
            </span>
          </div>
          <div className="flex items-center gap-space-sm">
            <span
              className="material-symbols-outlined text-primary text-[18px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              route
            </span>
            <span className="font-body-sm text-body-sm text-on-surface">
              Atrações calibradas com cálculo de trajeto
            </span>
          </div>
        </div>
        <Link
          to="/questionario"
          className="w-full h-[52px] bg-primary hover:bg-primary-container active:scale-[0.98] transition-all rounded-lg flex items-center justify-center gap-2 text-on-primary shadow-sm"
        >
          <span className="font-label-lg text-label-lg tracking-wide">Criar meu Roteiro Ideal</span>
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </Link>
        <span className="font-label-sm text-label-sm text-on-surface-variant mt-space-xs">
          Leva apenas 2 minutinhos • Totalmente gratuito
        </span>
      </section>

      <section className="mt-space-lg flex flex-col gap-space-md">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h3 className="font-title-md text-title-md text-on-surface">Roteiros populares em Canaã</h3>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Inspirações selecionadas por guias locais
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-space-md">
          {sugestoes.map((sugestao) => (
            <article
              key={sugestao.nome}
              className="w-full bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col transition-transform active:scale-[0.99]"
            >
              <div className="relative w-full h-40">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${sugestao.imagem}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md shadow-sm">
                  <span className="material-symbols-outlined text-primary text-[14px]">schedule</span>
                  <span className="font-label-sm text-label-sm text-on-surface">{sugestao.tempo}</span>
                  <span className="w-1 h-1 rounded-full bg-outline-variant" />
                  <span className={`font-label-sm text-label-sm font-bold ${sugestao.precoClasse}`}>
                    {sugestao.preco}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-on-primary">
                  <div>
                    <span
                      className={`inline-block px-2 py-0.5 rounded font-label-sm text-label-sm mb-1 uppercase tracking-wider ${sugestao.categoriaClasse}`}
                    >
                      {sugestao.categoria}
                    </span>
                    <h4 className="font-title-md text-title-md leading-snug drop-shadow-sm">
                      {sugestao.nome}
                    </h4>
                  </div>
                </div>
              </div>
              <div className="p-space-md flex items-center justify-between">
                <div className="flex items-center gap-space-xs text-on-surface-variant min-w-0 pr-space-xs">
                  <span className="material-symbols-outlined text-[16px] text-secondary flex-shrink-0">
                    {sugestao.icone}
                  </span>
                  <p className="font-body-sm text-body-sm truncate">{sugestao.descricao}</p>
                </div>
                <button
                  aria-label={`Adicionar ${sugestao.nome} ao meu roteiro`}
                  type="button"
                  onClick={onUsarSugestao}
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">add</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-space-lg p-space-md rounded-xl bg-surface-container flex items-center gap-space-sm text-on-surface">
        <div className="w-9 h-9 rounded-full bg-surface-container-lowest flex items-center justify-center flex-shrink-0 text-primary">
          <span className="material-symbols-outlined text-[20px]">lightbulb</span>
        </div>
        <div className="flex flex-col min-w-0">
          <span className="font-label-sm text-label-sm uppercase tracking-wide text-primary">
            Dica de Canaã
          </span>
          <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
            Prefira visitar as cachoeiras pela manhã para aproveitar as águas mais cristalinas e a
            melhor luz solar.
          </p>
        </div>
      </section>
    </div>
  )
}
