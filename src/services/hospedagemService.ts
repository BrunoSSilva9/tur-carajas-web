import hospedagemData from '../data/hospedagem.json'
import type { Hospedagem } from '../types'

// Ver aviso sobre campos placeholder (amenidades/quartos/preços) em src/data/hospedagem.json
const hospedagem = hospedagemData.hospedagem as Hospedagem[]

export async function listarHospedagem(): Promise<Hospedagem[]> {
  return hospedagem
}

export async function buscarHospedagemPorId(id: string): Promise<Hospedagem | undefined> {
  return hospedagem.find((item) => item.id === id)
}
