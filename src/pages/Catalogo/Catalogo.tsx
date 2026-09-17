import { useCatalogo } from '../../hooks/useCatalogo'
import { Badge } from '../../components/ui/Badge'

export function Catalogo() {
  const { atrativos, negocios, restaurantes, carregando } = useCatalogo()

  if (carregando) {
    return <p className="text-gray-600">Carregando catálogo...</p>
  }

  return (
    <div className="flex flex-col gap-10">
      <section>
        <h2 className="mb-3 text-xl font-medium text-gray-900">Atrativos</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {atrativos.map((atrativo) => (
            <div key={atrativo.id} className="rounded-lg border border-gray-200 p-4">
              <Badge>{atrativo.categoria}</Badge>
              <p className="mt-2 font-medium text-gray-900">{atrativo.nome}</p>
              <p className="text-sm text-gray-600">{atrativo.descricaoCurta}</p>
              <p className="mt-1 text-xs text-gray-500">{atrativo.localizacao.bairro}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-medium text-gray-900">Negócios locais</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {negocios.map((negocio) => (
            <div key={negocio.id} className="rounded-lg border border-gray-200 p-4">
              <Badge>{negocio.categoria}</Badge>
              <p className="mt-2 font-medium text-gray-900">{negocio.nome}</p>
              <p className="text-sm text-gray-600">{negocio.descricaoCurta}</p>
              <p className="mt-1 text-xs text-gray-500">{negocio.localizacao.bairro}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-medium text-gray-900">Gastronomia</h2>
        {restaurantes.length === 0 ? (
          <p className="text-sm text-gray-500">
            Cadastro de restaurantes em andamento — em breve novidades.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {restaurantes.map((restaurante) => (
              <div key={restaurante.id} className="rounded-lg border border-gray-200 p-4">
                <Badge>{restaurante.categoria}</Badge>
                <p className="mt-2 font-medium text-gray-900">{restaurante.nome}</p>
                <p className="text-sm text-gray-600">{restaurante.descricaoCurta}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
