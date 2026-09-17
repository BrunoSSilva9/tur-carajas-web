import negociosData from '../data/negocios.json'
import type { Negocio } from '../types'

const negocios = negociosData as Negocio[]

export async function listarNegocios(): Promise<Negocio[]> {
  return negocios
}

export async function buscarNegocioPorId(id: string): Promise<Negocio | undefined> {
  return negocios.find((negocio) => negocio.id === id)
}
