import { Link } from 'react-router-dom'
import { useCatalogo } from '../../hooks/useCatalogo'
import { useQuestionarioStore } from '../../store/questionarioStore'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'

export function Roteiro() {
  const { atrativos, carregando } = useCatalogo()
  const { resposta } = useQuestionarioStore()

  if (carregando) {
    return <p className="text-gray-600">Montando seu roteiro...</p>
  }

  const sugestoes =
    resposta.interesses.length === 0
      ? atrativos
      : atrativos.filter((atrativo) => resposta.interesses.includes(atrativo.categoria))

  if (sugestoes.length === 0) {
    return (
      <div className="flex flex-col items-center gap-4 text-center">
        <p className="text-gray-600">
          Nenhum atrativo encontrado para os interesses selecionados ainda.
        </p>
        <Link to="/questionario">
          <Button variant="secondary">Ajustar respostas</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold text-gray-900">Seu roteiro sugerido</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {sugestoes.map((atrativo) => (
          <div key={atrativo.id} className="rounded-lg border border-gray-200 p-4">
            <Badge>{atrativo.categoria}</Badge>
            <p className="mt-2 font-medium text-gray-900">{atrativo.nome}</p>
            <p className="text-sm text-gray-600">{atrativo.descricaoCurta}</p>
            <p className="mt-1 text-xs text-gray-500">{atrativo.localizacao.bairro}</p>
            {atrativo.contatoWhatsapp && (
              <a
                href={`https://wa.me/${atrativo.contatoWhatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block text-sm text-emerald-700 underline"
              >
                Falar no WhatsApp
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
