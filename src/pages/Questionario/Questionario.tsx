import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuestionarioStore } from '../../store/questionarioStore'
import { CabecalhoEtapa } from './CabecalhoEtapa'
import { AcaoEtapa } from './AcaoEtapa'
import { EtapaTempo } from './etapas/EtapaTempo'
import { EtapaOrcamento } from './etapas/EtapaOrcamento'
import { EtapaCompanhia } from './etapas/EtapaCompanhia'
import { EtapaInteresses } from './etapas/EtapaInteresses'
import { EtapaRitmo } from './etapas/EtapaRitmo'

const metadados = [
  {
    kickerIcone: 'schedule',
    kickerTexto: 'Planejamento Inteligente',
    titulo: 'Quanto tempo você tem disponível para viver Canaã?',
    descricao: 'Ajustamos as melhores atrações e pausas para o seu ritmo, sem correria.',
  },
  {
    kickerIcone: 'account_balance_wallet',
    kickerTexto: 'Planejamento sob medida',
    titulo: 'Qual seu orçamento planejado para essa experiência?',
    descricao:
      'Sem valores exatos — apenas para calibrar atrações gratuitas, taxas de preservação e gastronomia local em Canaã dos Carajás.',
  },
  {
    kickerIcone: 'groups',
    kickerTexto: 'Companhia da trilha',
    titulo: 'Com quem você vai viver essa jornada?',
    descricao:
      'Personalizamos o nível de segurança da trilha e o tipo de estrutura ideal para o seu grupo em Canaã.',
  },
  {
    kickerIcone: 'travel_explore',
    kickerTexto: 'Curadoria personalizada',
    titulo: 'Quais experiências fazem seus olhos brilharem?',
    descricao:
      'Escolha quantas opções quiser — vamos conectar cada cantinho incrível no mesmo trajeto por Canaã dos Carajás!',
  },
  {
    kickerIcone: 'explore',
    kickerTexto: 'Logística & Ritmo de Viagem',
    titulo: 'Como você vai se locomover e qual o seu ritmo ideal?',
    descricao:
      'Ajustamos as distâncias, os tempos de parada e o nível de esforço das trilhas em Canaã dos Carajás.',
  },
]

export function Questionario() {
  const navigate = useNavigate()
  const [etapa, setEtapa] = useState(1)
  const {
    resposta,
    setDuracao,
    setOrcamento,
    setCompanhia,
    toggleInteresse,
    limparInteresses,
    setTransporte,
    setNivelCaminhada,
    marcarRoteiroGerado,
  } = useQuestionarioStore()

  const dadosEtapa = metadados[etapa - 1]

  function voltar() {
    if (etapa === 1) {
      navigate('/')
      return
    }
    setEtapa((atual) => atual - 1)
  }

  function avancar() {
    if (etapa === 5) {
      marcarRoteiroGerado()
      navigate('/roteiro')
      return
    }
    setEtapa((atual) => atual + 1)
  }

  return (
    <div className="flex flex-col w-full px-margin pb-10">
      <CabecalhoEtapa etapa={etapa} onVoltar={voltar} {...dadosEtapa} />

      {etapa === 1 && <EtapaTempo valor={resposta.duracao} onSelecionar={setDuracao} />}
      {etapa === 2 && <EtapaOrcamento valor={resposta.orcamento} onSelecionar={setOrcamento} />}
      {etapa === 3 && <EtapaCompanhia valor={resposta.companhia} onSelecionar={setCompanhia} />}
      {etapa === 4 && (
        <EtapaInteresses
          valores={resposta.interesses}
          onAlternar={toggleInteresse}
          onLimpar={limparInteresses}
        />
      )}
      {etapa === 5 && (
        <EtapaRitmo
          transporte={resposta.transporte}
          nivelCaminhada={resposta.nivelCaminhada}
          onSelecionarTransporte={setTransporte}
          onSelecionarNivel={setNivelCaminhada}
        />
      )}

      <AcaoEtapa
        texto={etapa === 5 ? 'Gerar meu Roteiro Ideal' : 'Próximo passo'}
        icone={etapa === 5 ? 'auto_awesome' : 'arrow_forward'}
        onClick={avancar}
        desabilitado={etapa === 4 && resposta.interesses.length === 0}
      />
    </div>
  )
}
