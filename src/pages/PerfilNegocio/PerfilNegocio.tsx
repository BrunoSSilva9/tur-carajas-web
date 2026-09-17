import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import type { Negocio } from '../../types'
import { buscarNegocioPorId } from '../../services/negociosService'
import { Badge } from '../../components/ui/Badge'

export function PerfilNegocio() {
  const { id } = useParams<{ id: string }>()
  const [negocio, setNegocio] = useState<Negocio | undefined>(undefined)
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    if (!id) return
    buscarNegocioPorId(id).then((resultado) => {
      setNegocio(resultado)
      setCarregando(false)
    })
  }, [id])

  if (carregando) {
    return <p className="text-gray-600">Carregando...</p>
  }

  if (!negocio) {
    return (
      <div className="flex flex-col gap-4">
        <p className="text-gray-600">Negócio não encontrado.</p>
        <Link to="/catalogo" className="text-emerald-700 underline">
          Voltar ao catálogo
        </Link>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-3">
      <Badge>{negocio.categoria}</Badge>
      <h1 className="text-2xl font-semibold text-gray-900">{negocio.nome}</h1>
      <p className="text-gray-600">{negocio.descricaoCurta}</p>
      <p className="text-sm text-gray-500">{negocio.localizacao.bairro}</p>
      {negocio.contatoWhatsapp && (
        <a
          href={`https://wa.me/${negocio.contatoWhatsapp}`}
          target="_blank"
          rel="noreferrer"
          className="inline-block w-fit rounded-md bg-emerald-700 px-4 py-2 text-sm text-white"
        >
          Falar no WhatsApp
        </a>
      )}
    </div>
  )
}
