import { create } from 'zustand'
import type { Categoria, Duracao, Orcamento, RespostaQuestionario } from '../types'

interface QuestionarioState {
  resposta: RespostaQuestionario
  setInteresses: (interesses: Categoria[]) => void
  setOrcamento: (orcamento: Orcamento) => void
  setDuracao: (duracao: Duracao) => void
  reset: () => void
}

const estadoInicial: RespostaQuestionario = {
  interesses: [],
  orcamento: 'medio',
  duracao: 'dia-inteiro',
}

export const useQuestionarioStore = create<QuestionarioState>((set) => ({
  resposta: estadoInicial,
  setInteresses: (interesses) =>
    set((state) => ({ resposta: { ...state.resposta, interesses } })),
  setOrcamento: (orcamento) =>
    set((state) => ({ resposta: { ...state.resposta, orcamento } })),
  setDuracao: (duracao) =>
    set((state) => ({ resposta: { ...state.resposta, duracao } })),
  reset: () => set({ resposta: estadoInicial }),
}))
