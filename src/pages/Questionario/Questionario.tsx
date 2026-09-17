import { useNavigate } from 'react-router-dom'
import { useQuestionarioStore } from '../../store/questionarioStore'
import { Button } from '../../components/ui/Button'
import type { Categoria, Duracao, Orcamento } from '../../types'

const opcoesInteresses: { valor: Categoria; label: string }[] = [
  { valor: 'natureza', label: 'Natureza' },
  { valor: 'praca-parque', label: 'Praças e parques' },
  { valor: 'gastronomia', label: 'Gastronomia' },
  { valor: 'cultura', label: 'Cultura' },
  { valor: 'artesanato', label: 'Artesanato' },
]

const opcoesOrcamento: { valor: Orcamento; label: string }[] = [
  { valor: 'baixo', label: 'Baixo' },
  { valor: 'medio', label: 'Médio' },
  { valor: 'alto', label: 'Alto' },
]

const opcoesDuracao: { valor: Duracao; label: string }[] = [
  { valor: 'meio-dia', label: 'Meio dia' },
  { valor: 'dia-inteiro', label: 'Dia inteiro' },
  { valor: 'fim-de-semana', label: 'Fim de semana' },
]

export function Questionario() {
  const navigate = useNavigate()
  const { resposta, setInteresses, setOrcamento, setDuracao } = useQuestionarioStore()

  function alternarInteresse(valor: Categoria) {
    const jaSelecionado = resposta.interesses.includes(valor)
    setInteresses(
      jaSelecionado
        ? resposta.interesses.filter((item) => item !== valor)
        : [...resposta.interesses, valor],
    )
  }

  return (
    <div className="mx-auto flex max-w-md flex-col gap-8">
      <h1 className="text-2xl font-semibold text-gray-900">Monte seu roteiro</h1>

      <fieldset>
        <legend className="mb-2 font-medium text-gray-900">O que te interessa?</legend>
        <div className="flex flex-wrap gap-2">
          {opcoesInteresses.map((opcao) => (
            <button
              key={opcao.valor}
              type="button"
              onClick={() => alternarInteresse(opcao.valor)}
              className={`rounded-full border px-3 py-1.5 text-sm ${
                resposta.interesses.includes(opcao.valor)
                  ? 'border-emerald-700 bg-emerald-700 text-white'
                  : 'border-gray-300 text-gray-700'
              }`}
            >
              {opcao.label}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="mb-2 font-medium text-gray-900">Orçamento</legend>
        <div className="flex gap-2">
          {opcoesOrcamento.map((opcao) => (
            <button
              key={opcao.valor}
              type="button"
              onClick={() => setOrcamento(opcao.valor)}
              className={`rounded-full border px-3 py-1.5 text-sm ${
                resposta.orcamento === opcao.valor
                  ? 'border-emerald-700 bg-emerald-700 text-white'
                  : 'border-gray-300 text-gray-700'
              }`}
            >
              {opcao.label}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="mb-2 font-medium text-gray-900">Tempo disponível</legend>
        <div className="flex flex-wrap gap-2">
          {opcoesDuracao.map((opcao) => (
            <button
              key={opcao.valor}
              type="button"
              onClick={() => setDuracao(opcao.valor)}
              className={`rounded-full border px-3 py-1.5 text-sm ${
                resposta.duracao === opcao.valor
                  ? 'border-emerald-700 bg-emerald-700 text-white'
                  : 'border-gray-300 text-gray-700'
              }`}
            >
              {opcao.label}
            </button>
          ))}
        </div>
      </fieldset>

      <Button onClick={() => navigate('/roteiro')} disabled={resposta.interesses.length === 0}>
        Ver meu roteiro
      </Button>
    </div>
  )
}
