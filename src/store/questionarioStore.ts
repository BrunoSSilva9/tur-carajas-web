import { create } from 'zustand'
import type {
  Companhia,
  Duracao,
  InteresseViagem,
  NivelCaminhada,
  Orcamento,
  RespostaQuestionario,
  Transporte,
} from '../types'

interface QuestionarioState {
  resposta: RespostaQuestionario
  roteiroGerado: boolean
  setDuracao: (duracao: Duracao) => void
  setOrcamento: (orcamento: Orcamento) => void
  setCompanhia: (companhia: Companhia) => void
  toggleInteresse: (interesse: InteresseViagem) => void
  limparInteresses: () => void
  setTransporte: (transporte: Transporte) => void
  setNivelCaminhada: (nivel: NivelCaminhada) => void
  marcarRoteiroGerado: () => void
  reset: () => void
}

const estadoInicial: RespostaQuestionario = {
  duracao: '2-3h',
  orcamento: 'medio',
  companhia: 'casal',
  interesses: ['cachoeiras-pocos', 'mirantes-por-do-sol', 'gastronomia-paraense', 'banho-de-rio'],
  transporte: 'carro-proprio',
  nivelCaminhada: 'leve',
}

export const useQuestionarioStore = create<QuestionarioState>((set) => ({
  resposta: estadoInicial,
  roteiroGerado: false,
  setDuracao: (duracao) => set((state) => ({ resposta: { ...state.resposta, duracao } })),
  setOrcamento: (orcamento) => set((state) => ({ resposta: { ...state.resposta, orcamento } })),
  setCompanhia: (companhia) => set((state) => ({ resposta: { ...state.resposta, companhia } })),
  toggleInteresse: (interesse) =>
    set((state) => {
      const jaSelecionado = state.resposta.interesses.includes(interesse)
      return {
        resposta: {
          ...state.resposta,
          interesses: jaSelecionado
            ? state.resposta.interesses.filter((item) => item !== interesse)
            : [...state.resposta.interesses, interesse],
        },
      }
    }),
  limparInteresses: () => set((state) => ({ resposta: { ...state.resposta, interesses: [] } })),
  setTransporte: (transporte) => set((state) => ({ resposta: { ...state.resposta, transporte } })),
  setNivelCaminhada: (nivelCaminhada) =>
    set((state) => ({ resposta: { ...state.resposta, nivelCaminhada } })),
  marcarRoteiroGerado: () => set({ roteiroGerado: true }),
  reset: () => set({ resposta: estadoInicial, roteiroGerado: false }),
}))
