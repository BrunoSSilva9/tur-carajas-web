import atrativosData from '../data/atrativos.json'
import type { Atrativo } from '../types'

const atrativos = atrativosData as Atrativo[]

export async function listarAtrativos(): Promise<Atrativo[]> {
  return atrativos
}

export async function buscarAtrativoPorId(id: string): Promise<Atrativo | undefined> {
  return atrativos.find((atrativo) => atrativo.id === id)
}
