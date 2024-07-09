import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      titulo: 'Estudar JavaScript',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE,
      descricao: 'Rever aula 2 da EBAC'
    },
    {
      id: 2,
      titulo: 'Estudar C#',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.CONCLUIDO,
      descricao: 'Rever aula 7 do Balta.io'
    },
    {
      id: 3,
      titulo: 'Estudar Python',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.PENDENTE,
      descricao: 'Rever aula 8 da EBAC'
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,

  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Tarefa>) => {
      const tarefaJaExiste = state.itens.find(
        (tarefa) =>
          tarefa.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      )

      if (tarefaJaExiste) {
        alert('Já existe uma tarefa com esse nome!')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { remover, editar, cadastrar } = tarefasSlice.actions
export default tarefasSlice.reducer
