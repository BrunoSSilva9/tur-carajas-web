import { Link } from 'react-router-dom'
import { Button } from '../../components/ui/Button'

export function Home() {
  return (
    <div className="flex flex-col gap-8">
      <section className="text-center">
        <h1 className="text-3xl font-semibold text-gray-900">
          Descubra Canaã dos Carajás
        </h1>
        <p className="mt-2 text-gray-600">
          Roteiros personalizados, negócios locais e a cultura da cidade em um só lugar.
        </p>
        <Link to="/questionario" className="mt-6 inline-block">
          <Button>Montar meu roteiro</Button>
        </Link>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-medium text-gray-900">Explore</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Link
            to="/catalogo"
            className="rounded-lg border border-gray-200 p-4 hover:border-emerald-700"
          >
            <p className="font-medium text-gray-900">Catálogo completo</p>
            <p className="text-sm text-gray-600">Atrativos, gastronomia e negócios locais</p>
          </Link>
        </div>
      </section>
    </div>
  )
}
