import { Link } from 'react-router-dom'

const categorias = [
  {
    nome: 'Cachoeiras & Balneários',
    exemplo: 'Águas Claras, Fumaça',
    badge: '8 Locais',
    icone: 'water_drop',
    badgeClass: 'bg-primary/90 text-on-primary',
    imagem:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAHP8yZnOqevgDXIJGEh0tcTaZr5Za8Xh3if96cGvUnvaOvpYNO0uiwE082ogGQjKeV1D7Rok0j0Jz4MmZ7c1_AV5MicZWcy22piMRP4cuVew-qQzHDpDZ18oajnFsOia2l45vlwk6TMqgHc1LxLIfgroIfs4oKn3at0E39FoaSe2zbvtsiTdiUwzaWRKfzk5fjDWu4SGIsGTSgv5Xq6ITXfMeO3z8sqnpXC1VbvhE0umURYyoEbVeS',
  },
  {
    nome: 'Trilhas & Ecoturismo',
    exemplo: 'Mirante, Trilha do Lago',
    badge: '12 Trilhas',
    icone: 'hiking',
    badgeClass: 'bg-secondary/90 text-on-secondary',
    imagem:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCQiBHIA4XDQ-a4b5_CWbrgpPj0C52X7t6L69n9eWP7XNnxojAOsyHAjafHTv0Z0RtaGDB-kmpBxpep23haokhejVZZWtW4_Rk9LTtsjlkS02XvMdym5pd-Hlqn8xT6NNmnLflpyMRn8HTgbb_P7eftXxpy0y2SLorssSLohwOVNuuRk_v5fnQis0mJUs0ohUO4Em58aPaXFqDAFKBBOYsyXFzs3g5_w8pdx5XOg_Ksfs77F6a6UnS6',
  },
  {
    nome: 'Sabores da Amazônia',
    exemplo: 'Peixarias, Açaí puro',
    badge: '15 Espaços',
    icone: 'restaurant',
    badgeClass: 'bg-primary-container text-on-primary-container',
    imagem:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAAQXQmFpuHsjW7Ow1xWBZOnXTYu6dqcPhDvlv2qzguAxRPf4mZmrJBoiiO5utO8k68mhjERfP-2uiNuLVQDcu3MNCN90ScSbp9IxWUKOvMRreLU1BSNUQlWiPjKA1_vXMNjlV4w-LWXT3RSTKRCWxdYYrWGUfKHD27wHD6mdzPz3bRx9CeRXsQulz63Jxk8LxwnjPZCZWTkYdawXKge8J05ap_Dgz2WlnB6ugGMckxVVRSllfUqjO9',
  },
  {
    nome: 'Cultura & Eventos',
    exemplo: 'Feiras de artesanato',
    badge: '6 Eventos',
    icone: 'festival',
    badgeClass: 'bg-tertiary-container text-on-tertiary-container',
    imagem:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBZ98CtEHcNNJyydAA061dUsgjBtGMH_6-zpqrTogqLmADLmL7fbCW85xmAhVeuw2IYedveC0EBHXnNzxIhjPFQpKDdbWvMJaM2TNa83QFMDXaz3OhxfZ3Jkg0gWS1NIz_xP5UE0vKJJQxXYRtQ_KY3fhQOHhObCZvn9Zckv8DxwnJq25kkYbXm1BYZ5ZEdr_rJG0Xo7GSJyPaTW8N-yWUtR33QEkGGSscydqO2ezx7CV2t3N7tjK5z',
  },
]

const populares = [
  {
    nome: 'Cachoeira da Fumaça',
    descricao: 'Piscina natural e quedas para banho relaxante',
    nota: '4.9',
    avaliacoes: '128',
    tag: 'Fácil Acesso',
    tagClass: 'bg-primary-container/90 text-on-primary-container',
    tempo: '3h a 4h de visita',
    distancia: '18 km do Centro',
    imagem:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAEWqZFbYpuEbCvSuj2E6zZPkmteDVE4O0sc-IXeR9hF6mOln5LqoKx4ZpczBiTNS_N-G6W3EsqAcJWroKmeAWLE5Gk3OiaN47widjtzzruglcOr_g5Ltvcs2st3LX4lFEbxNMQfzH6lHkd9Q7dfdZYY1UFLxV3CMYaAQfhh4udPwLf1FsTtmof9l-pSVgLfenUT2DH_4ecRpx25JusxJMbZoXFPJtfbrP0cigWVXcfvkW-rMYUz2RI',
  },
  {
    nome: 'Mirante das Torres',
    descricao: 'Ponto mais alto com pôr do sol inesquecível da Serra',
    nota: '4.9',
    avaliacoes: '96',
    tag: 'Ecoturismo • Trilha Moderada',
    tagClass: 'bg-secondary-container/90 text-on-secondary-container',
    tempo: '2h de visita',
    distancia: '12 km do Centro',
    imagem:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBWfO5D65RiI_XV869CAfP6pv3X0R3LWKV2QmUGVJkyX1_lxFC8GSBjutR16tpCj-INEIgXdi4yV3fboVGvZuuhHUSkCCWQi57WL1hL6rDhK2PY2UOcqL9bkB0P_850WpBvIlME2_TB1gM14nTBz6Ei4tmXzU-dk59uSoTfO1Rws5tg8dt6UaXQBi19bK0qdFownS3j7D7VNCj7W8CImXMu01CsdM0SY5nSbajrIl831vM5WtMR7RtL',
  },
]

export function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Barra de localização */}
      <section className="px-margin pt-space-md pb-space-sm">
        <button
          type="button"
          className="flex items-center gap-space-xs bg-surface-container-high px-space-md py-space-xs rounded-full text-on-surface shadow-sm active:scale-95 transition-transform"
        >
          <span
            className="material-symbols-outlined text-[16px] text-secondary"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            location_on
          </span>
          <span className="font-label-md text-label-md">Canaã dos Carajás, PA</span>
          <span className="material-symbols-outlined text-[16px] text-outline">expand_more</span>
        </button>
      </section>

      {/* Banner hero */}
      <section className="px-margin py-space-sm">
        <div className="relative w-full rounded-xl overflow-hidden shadow-md bg-surface-container-highest flex flex-col justify-end min-h-[360px]">
          <div
            className="absolute inset-0 bg-cover bg-center w-full h-full"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAqvmZIS4QgMqLZd6x28-QM6sQtGM9p6wbt2mHvIbTz1QJwM2Wugth4886wVHxDpbssnFisjMqM3hEFb2I5o9zbUSfDZ--SduVEJiYQ0yfolcDhyE4zXnssvdWUl3mWxUCqolyhhVEqdtbGSyxeHbwc1yJC1EhrOFuySXXzKWvM2ZBKhofKVPaFEB--JlYueAtchH0OqsMURDriE9B5e6Pk977CI8aHnX4n9DOxuOxjDXNEItz1I6l4')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent" />
          <div className="relative z-10 p-space-md sm:p-space-lg flex flex-col gap-space-sm text-on-primary">
            <div className="inline-flex items-center gap-space-xs bg-surface-bright/20 backdrop-blur-md px-space-md py-space-xs rounded-full w-max">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-surface-bright">
                Descubra o coração do Pará
              </span>
            </div>
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-surface-bright tracking-tight leading-tight">
              Descubra Canaã dos Carajás do seu jeito
            </h1>
            <p className="font-body-sm text-body-sm text-surface-variant line-clamp-2">
              Roteiros inteligentes e sob medida de acordo com seu tempo livre, orçamento e
              atrações favoritas.
            </p>
            <div className="flex flex-col sm:flex-row gap-space-sm pt-space-xs mt-space-xs">
              <Link
                to="/questionario"
                className="w-full flex items-center justify-center gap-space-xs bg-secondary-container hover:bg-secondary text-on-secondary-fixed font-label-lg text-label-lg py-space-md px-space-lg rounded-lg shadow-md transition-all active:scale-[0.98]"
              >
                <span
                  className="material-symbols-outlined text-[20px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  auto_awesome
                </span>
                <span>Quero um roteiro</span>
              </Link>
              <Link
                to="/catalogo"
                className="w-full flex items-center justify-center gap-space-xs bg-surface-bright/15 backdrop-blur-md hover:bg-surface-bright/25 text-surface-bright font-label-lg text-label-lg py-space-md px-space-lg rounded-lg transition-all active:scale-[0.98]"
              >
                <span className="material-symbols-outlined text-[20px]">explore</span>
                <span>Quero explorar</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Faixa de clima */}
      <section className="px-margin py-space-xs">
        <div className="flex items-center justify-between p-space-md bg-surface-container-low rounded-lg shadow-sm">
          <div className="flex items-center gap-space-sm">
            <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed">
              <span className="material-symbols-outlined text-[18px]">wb_sunny</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-md text-label-md text-on-surface">29°C Ensolarado</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Clima ideal para cachoeiras
              </span>
            </div>
          </div>
          <div className="flex items-center gap-space-xs text-secondary font-label-md text-label-md">
            <span>Guia Offline</span>
            <span className="material-symbols-outlined text-[16px]">cloud_done</span>
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section className="py-space-md flex flex-col gap-space-sm">
        <div className="px-margin flex items-center justify-between">
          <div className="flex items-center gap-space-xs">
            <span className="w-2 h-5 bg-primary rounded-full" />
            <h2 className="font-headline-sm text-headline-sm text-on-surface">
              Categorias em Destaque
            </h2>
          </div>
          <Link
            to="/catalogo"
            className="font-label-md text-label-md text-secondary flex items-center gap-0.5 hover:underline"
          >
            Ver todas
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </div>
        <div className="flex gap-space-md overflow-x-auto px-margin py-space-xs no-scrollbar snap-x snap-mandatory">
          {categorias.map((categoria) => (
            <div
              key={categoria.nome}
              className="flex-none w-48 snap-start rounded-lg bg-surface-container-lowest shadow-sm overflow-hidden cursor-pointer active:scale-98 transition-transform"
            >
              <div className="relative h-28 w-full bg-surface-container">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${categoria.imagem}')` }}
                />
                <span
                  className={`absolute top-2 left-2 px-space-xs py-0.5 rounded-full font-label-sm text-label-sm flex items-center gap-1 ${categoria.badgeClass}`}
                >
                  <span className="material-symbols-outlined text-[12px]">{categoria.icone}</span>
                  {categoria.badge}
                </span>
              </div>
              <div className="p-space-sm flex flex-col">
                <span className="font-title-md text-title-md text-on-surface truncate">
                  {categoria.nome}
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
                  {categoria.exemplo}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Assistente inteligente */}
      <section className="px-margin py-space-xs">
        <div className="p-space-md rounded-xl bg-primary text-on-primary shadow-sm flex items-center justify-between gap-space-md">
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-space-xs">
              <span
                className="material-symbols-outlined text-[18px] text-primary-fixed"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                psychology
              </span>
              <span className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-wider">
                Assistente Inteligente
              </span>
            </div>
            <span className="font-title-md text-title-md leading-tight text-surface-bright">
              Tem só 3 horas livres hoje?
            </span>
            <span className="font-body-sm text-body-sm text-surface-variant">
              Montamos um mini-circuito rápido com pôr do sol.
            </span>
          </div>
          <Link
            to="/questionario"
            aria-label="Gerar circuito rápido"
            className="shrink-0 bg-surface-bright text-on-primary-fixed p-space-sm rounded-full shadow-sm hover:scale-105 active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined text-[20px] text-primary">
              arrow_forward
            </span>
          </Link>
        </div>
      </section>

      {/* Populares */}
      <section className="px-margin pt-space-lg pb-space-xl flex flex-col gap-space-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-space-xs">
            <span className="w-2 h-5 bg-secondary rounded-full" />
            <h2 className="font-headline-sm text-headline-sm text-on-surface">
              Mais Populares da Semana
            </h2>
          </div>
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
            Top escolhas
          </span>
        </div>
        <div className="flex flex-col gap-space-md">
          {populares.map((item) => (
            <article
              key={item.nome}
              className="w-full rounded-lg bg-surface-container-lowest shadow-sm overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-44 bg-surface-container">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${item.imagem}')` }}
                />
                <div className="absolute top-3 left-3 bg-surface-bright/95 backdrop-blur-sm px-space-sm py-space-xs rounded-full flex items-center gap-1 shadow-sm text-on-surface">
                  <span
                    className="material-symbols-outlined text-[16px] text-secondary-container"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span className="font-label-md text-label-md">{item.nota}</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    ({item.avaliacoes})
                  </span>
                </div>
                <button
                  aria-label="Salvar nos favoritos"
                  type="button"
                  className="absolute top-3 right-3 w-9 h-9 rounded-full bg-surface-bright/90 backdrop-blur-sm flex items-center justify-center text-on-surface-variant hover:text-primary shadow-sm active:scale-90 transition-transform"
                >
                  <span className="material-symbols-outlined text-[18px]">bookmark_border</span>
                </button>
                <div
                  className={`absolute bottom-3 left-3 px-space-sm py-0.5 rounded-full font-label-sm text-label-sm ${item.tagClass}`}
                >
                  {item.tag}
                </div>
              </div>
              <div className="p-space-md flex flex-col gap-space-xs">
                <div className="flex items-start justify-between gap-space-sm">
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">
                      {item.nome}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {item.descricao}
                    </p>
                  </div>
                  <span className="font-title-md text-title-md text-primary font-bold">
                    Gratuito
                  </span>
                </div>
                <div className="flex items-center gap-space-md pt-space-xs mt-space-xs text-on-surface-variant">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[16px] text-secondary">
                      schedule
                    </span>
                    <span className="font-body-sm text-body-sm">{item.tempo}</span>
                  </div>
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[16px] text-secondary">
                      near_me
                    </span>
                    <span className="font-body-sm text-body-sm">{item.distancia}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
