import { createReducer } from '@reduxjs/toolkit'
import { toggleTodo, addTodo } from './action'

let id = 0
const initialState = [
  { id: id++, text: 'Learn Vue', completed: false },
  { id: id++, text: "Don't learn React", completed: true },
]

const todosReducer = createReducer(initialState, {
  [toggleTodo]: (state, action) => {
    state.forEach((todo) => {
      if (todo.id === action.payload) {
        todo.completed = !todo.completed
      }
    })
  },
  [addTodo]: (state, action) => {
    state.push({ id: id++, text: action.payload, completed: false })
  },
})

export default todosReducer
