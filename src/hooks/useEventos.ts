import { useEffect, useState } from 'react'
import type { Evento } from '../types'
import { listarEventos } from '../services/eventosService'

export function useEventos() {
  const [eventos, setEventos] = useState<Evento[]>([])
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    listarEventos().then((dados) => {
      setEventos(dados)
      setCarregando(false)
    })
  }, [])

  return { eventos, carregando }
}
