import { useEffect, useState } from 'react'
import type { Atrativo, Hospedagem, Negocio, Restaurante } from '../types'
import { listarAtrativos } from '../services/atrativosService'
import { listarNegocios } from '../services/negociosService'
import { listarRestaurantes } from '../services/restaurantesService'
import { listarHospedagem } from '../services/hospedagemService'

export function useCatalogo() {
  const [atrativos, setAtrativos] = useState<Atrativo[]>([])
  const [negocios, setNegocios] = useState<Negocio[]>([])
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])
  const [hospedagem, setHospedagem] = useState<Hospedagem[]>([])
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    Promise.all([
      listarAtrativos(),
      listarNegocios(),
      listarRestaurantes(),
      listarHospedagem(),
    ]).then(([dadosAtrativos, dadosNegocios, dadosRestaurantes, dadosHospedagem]) => {
      setAtrativos(dadosAtrativos)
      setNegocios(dadosNegocios)
      setRestaurantes(dadosRestaurantes)
      setHospedagem(dadosHospedagem)
      setCarregando(false)
    })
  }, [])

  return { atrativos, negocios, restaurantes, hospedagem, carregando }
}
