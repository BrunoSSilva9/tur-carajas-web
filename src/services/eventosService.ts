import eventosData from '../data/eventos.mock.json'
import type { Evento } from '../types'

// Dados fictícios de demonstração — ver aviso em src/data/eventos.mock.json
const eventos = eventosData.eventos as Evento[]

export async function listarEventos(): Promise<Evento[]> {
  return eventos
}

export async function buscarEventoPorId(id: string): Promise<Evento | undefined> {
  return eventos.find((evento) => evento.id === id)
}
