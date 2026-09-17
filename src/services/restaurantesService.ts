import restaurantesData from '../data/restaurantes.json'
import type { Restaurante } from '../types'

const restaurantes = restaurantesData as Restaurante[]

export async function listarRestaurantes(): Promise<Restaurante[]> {
  return restaurantes
}

export async function buscarRestaurantePorId(id: string): Promise<Restaurante | undefined> {
  return restaurantes.find((restaurante) => restaurante.id === id)
}
