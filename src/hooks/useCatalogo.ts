import { useEffect, useState } from 'react'
import type { Atrativo, Negocio, Restaurante } from '../types'
import { listarAtrativos } from '../services/atrativosService'
import { listarNegocios } from '../services/negociosService'
import { listarRestaurantes } from '../services/restaurantesService'

export function useCatalogo() {
  const [atrativos, setAtrativos] = useState<Atrativo[]>([])
  const [negocios, setNegocios] = useState<Negocio[]>([])
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    Promise.all([listarAtrativos(), listarNegocios(), listarRestaurantes()]).then(
      ([dadosAtrativos, dadosNegocios, dadosRestaurantes]) => {
        setAtrativos(dadosAtrativos)
        setNegocios(dadosNegocios)
        setRestaurantes(dadosRestaurantes)
        setCarregando(false)
      },
    )
  }, [])

  return { atrativos, negocios, restaurantes, carregando }
}
