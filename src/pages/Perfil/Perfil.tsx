import { useNavigate } from 'react-router-dom'
import { useQuestionarioStore } from '../../store/questionarioStore'
import { opcoesInteresses } from '../../constants/interesses'
import type { Companhia, Duracao, Orcamento, Transporte } from '../../types'

const labelDuracao: Record<Duracao, string> = {
  '2-3h': '2 a 3 horas',
  'meio-dia': 'Meio período (4 a 5h)',
  'dia-inteiro': 'Dia inteiro (8h+)',
  'fim-de-semana': 'Final de semana (2 dias)',
}

const labelOrcamento: Record<Orcamento, string> = {
  baixo: 'Econômico & Gratuito',
  medio: 'Equilibrado & Confortável',
  alto: 'Experiência Completa',
}

const labelCompanhia: Record<Companhia, string> = {
  sozinho: 'Sozinho(a)',
  casal: 'Em casal',
  familia: 'Em família',
  amigos: 'Com amigos',
}

const labelTransporte: Record<Transporte, string> = {
  'carro-proprio': 'Carro próprio',
  'transporte-local': 'Transporte local / App',
  'trilha-guiada': 'Trilha guiada a pé',
}

export function Perfil() {
  const navigate = useNavigate()
  const { resposta, roteiroGerado } = useQuestionarioStore()

  const interessesSelecionados = opcoesInteresses.filter((opcao) =>
    resposta.interesses.includes(opcao.valor),
  )

  const preferencias = [
    { icone: 'schedule', label: 'Tempo preferido', valor: labelDuracao[resposta.duracao] },
    { icone: 'payments', label: 'Orçamento', valor: labelOrcamento[resposta.orcamento] },
    { icone: 'favorite', label: 'Costuma viajar', valor: labelCompanhia[resposta.companhia] },
    { icone: 'directions_car', label: 'Transporte', valor: labelTransporte[resposta.transporte] },
  ]

  const atividades = [
    {
      icone: 'map',
      cor: 'text-primary',
      label: 'Meus roteiros salvos',
      contagem: roteiroGerado ? '1 roteiro ativo' : 'Nenhum ainda',
      onClick: () => navigate('/meus-roteiros'),
    },
    {
      icone: 'bookmark',
      cor: 'text-secondary',
      label: 'Lugares favoritos',
      contagem: undefined,
      onClick: () => navigate('/catalogo'),
    },
  ]

  const ajustes = [
    { icone: 'notifications_active', label: 'Notificações e alertas de trilhas' },
    { icone: 'language', label: 'Idioma do aplicativo', valor: 'Português (BR)' },
    { icone: 'security', label: 'Privacidade e proteção de dados' },
    { icone: 'help_outline', label: 'Central de ajuda & Dicas locais' },
  ]

  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center justify-between px-margin py-space-sm">
        <div className="flex items-center gap-space-xs">
          <button
            aria-label="Voltar"
            type="button"
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-low text-tertiary active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          </button>
          <h1 className="font-headline-sm text-headline-sm text-tertiary">Perfil</h1>
        </div>
      </div>

      <div className="flex flex-col gap-space-lg px-margin pb-space-xl">
        {/* Identificação */}
        <div className="flex flex-col items-center text-center pt-space-xs">
          <div className="relative mb-space-sm">
            <div className="w-[88px] h-[88px] rounded-full bg-primary-container flex items-center justify-center shadow-md">
              <span className="font-headline-md text-headline-md text-on-primary-container">
                TC
              </span>
            </div>
          </div>
          <h2 className="font-headline-sm text-headline-sm text-tertiary">Visitante Tur Carajás</h2>
          <div className="flex items-center justify-center gap-space-xs text-on-surface-variant mt-0.5 mb-space-sm">
            <span className="material-symbols-outlined text-[15px] text-secondary">
              flight_takeoff
            </span>
            <span className="font-body-sm text-body-sm">Visitante</span>
          </div>
        </div>

        {/* Gamificação & Fidelidade */}
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary-container to-primary text-on-primary p-space-md shadow-md">
          <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-on-primary/5 pointer-events-none" />
          <div className="flex items-center justify-between mb-space-sm">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm shadow-sm">
              <span
                className="material-symbols-outlined text-[14px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                stars
              </span>
              <span>Nível 1 • Explorador(a) Iniciante</span>
            </div>
            <span className="material-symbols-outlined text-primary-fixed text-[24px]">eco</span>
          </div>
          <div className="flex items-baseline gap-space-xs mb-space-sm">
            <span className="font-display-lg-mobile text-display-lg-mobile tracking-tight">50</span>
            <span className="font-label-md text-label-md text-primary-fixed font-medium">
              pontos Carajás
            </span>
          </div>
          <div className="flex flex-col gap-1.5 mb-space-md">
            <div className="flex justify-between font-label-sm text-label-sm text-primary-fixed/90">
              <span>Próxima conquista</span>
              <span>50 / 100 pts</span>
            </div>
            <div className="w-full h-2 rounded-full bg-on-primary/20 overflow-hidden">
              <div className="h-full rounded-full bg-primary-fixed transition-all duration-700" style={{ width: '0%' }} />
            </div>
            <div className="flex items-center gap-1 font-body-sm text-[11px] text-primary-fixed/80">
              <span className="material-symbols-outlined text-[13px]">military_tech</span>
              <span>
                Ganhe pontos completando roteiros e avaliando lugares que você visitar
              </span>
            </div>
          </div>
          <button
            type="button"
            className="w-full pt-space-xs flex items-center justify-between font-label-md text-label-md text-on-primary hover:text-primary-fixed transition-colors"
          >
            <span>Resgatar benefícios & descontos</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>

        {/* Meus interesses */}
        <div className="flex flex-col gap-space-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-[20px] text-primary">
                local_florist
              </span>
              <h3 className="font-title-md text-title-md text-tertiary">Meus interesses</h3>
            </div>
            <button
              type="button"
              onClick={() => navigate('/questionario')}
              className="font-label-md text-label-md text-primary hover:underline"
            >
              Editar
            </button>
          </div>
          {interessesSelecionados.length === 0 ? (
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Nenhum interesse selecionado ainda. Responda o questionário para personalizar.
            </p>
          ) : (
            <div className="flex flex-wrap gap-2 pt-0.5">
              {interessesSelecionados.map((interesse) => (
                <span
                  key={interesse.valor}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm shadow-sm"
                >
                  <span className="material-symbols-outlined text-[15px]">{interesse.icone}</span>
                  <span>{interesse.label}</span>
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Preferências de viagem */}
        <div className="flex flex-col gap-space-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-[20px] text-primary">tune</span>
              <h3 className="font-title-md text-title-md text-tertiary">Preferências de viagem</h3>
            </div>
            <button
              type="button"
              onClick={() => navigate('/questionario')}
              className="font-label-md text-label-md text-primary hover:underline"
            >
              Ajustar
            </button>
          </div>
          <div className="rounded-xl bg-surface-container-lowest shadow-sm overflow-hidden">
            {preferencias.map((item, index) => (
              <div key={item.label}>
                {index > 0 && <div className="h-[1px] w-full bg-surface-container" />}
                <div className="flex items-center justify-between p-space-md">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant">
                      <span className="material-symbols-outlined text-[20px]">{item.icone}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        {item.label}
                      </span>
                      <span className="font-label-md text-label-md text-tertiary">{item.valor}</span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-[18px] text-outline-variant">
                    check_circle
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Atividade */}
        <div className="flex flex-col gap-space-sm">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-[20px] text-primary">analytics</span>
            <h3 className="font-title-md text-title-md text-tertiary">Atividade</h3>
          </div>
          <div className="rounded-xl bg-surface-container-lowest shadow-sm overflow-hidden">
            {atividades.map((item, index) => (
              <div key={item.label}>
                {index > 0 && <div className="h-[1px] w-full bg-surface-container" />}
                <button
                  type="button"
                  onClick={item.onClick}
                  className="w-full flex items-center justify-between p-space-md text-left hover:bg-surface-container-low transition-colors"
                >
                  <div className="flex items-center gap-space-sm">
                    <div
                      className={`w-9 h-9 rounded-full bg-surface-container flex items-center justify-center ${item.cor}`}
                    >
                      <span className="material-symbols-outlined text-[20px]">{item.icone}</span>
                    </div>
                    <span className="font-label-md text-label-md text-tertiary">{item.label}</span>
                  </div>
                  <div className="flex items-center gap-space-xs">
                    {item.contagem && (
                      <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                        {item.contagem}
                      </span>
                    )}
                    <span className="material-symbols-outlined text-[18px] text-outline">
                      chevron_right
                    </span>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Conta & Ajustes */}
        <div className="flex flex-col gap-space-sm">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-[20px] text-primary">
              manage_accounts
            </span>
            <h3 className="font-title-md text-title-md text-tertiary">Conta & Ajustes</h3>
          </div>
          <div className="rounded-xl bg-surface-container-lowest shadow-sm overflow-hidden">
            {ajustes.map((item, index) => (
              <div key={item.label}>
                {index > 0 && <div className="h-[1px] w-full bg-surface-container" />}
                <button
                  type="button"
                  className="w-full flex items-center justify-between p-space-md text-left hover:bg-surface-container-low transition-colors"
                >
                  <div className="flex items-center gap-space-sm">
                    <div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant">
                      <span className="material-symbols-outlined text-[20px]">{item.icone}</span>
                    </div>
                    <span className="font-label-md text-label-md text-tertiary">{item.label}</span>
                  </div>
                  <div className="flex items-center gap-space-xs">
                    {item.valor && (
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        {item.valor}
                      </span>
                    )}
                    <span className="material-symbols-outlined text-[18px] text-outline">
                      chevron_right
                    </span>
                  </div>
                </button>
              </div>
            ))}
            <div className="h-[1px] w-full bg-surface-container" />
            <button
              type="button"
              className="w-full flex items-center justify-between p-space-md text-left hover:bg-surface-container-low transition-colors"
            >
              <div className="flex items-center gap-space-sm">
                <div className="w-9 h-9 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed">
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md text-tertiary">
                    Falar com o suporte regional
                  </span>
                  <span className="font-body-sm text-[11px] text-on-surface-variant">
                    Atendimento via WhatsApp (em breve)
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-space-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-primary-container" />
                <span className="material-symbols-outlined text-[18px] text-outline">
                  chevron_right
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Sair da conta */}
        <div className="flex flex-col items-center justify-center gap-space-xs pt-space-md">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="font-label-lg text-label-lg text-error hover:opacity-80 active:scale-95 transition-all flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[18px]">logout</span>
            <span>Sair da conta</span>
          </button>
        </div>

        <div className="flex flex-col items-center justify-center gap-space-xs">
          <div className="flex flex-col items-center text-center mt-space-sm text-on-surface-variant font-body-sm text-[11px]">
            <span>Tur Carajás v1.0.0</span>
            <span className="text-outline">Feito com carinho por Canaã dos Carajás • PA</span>
          </div>
        </div>
      </div>
    </div>
  )
}
