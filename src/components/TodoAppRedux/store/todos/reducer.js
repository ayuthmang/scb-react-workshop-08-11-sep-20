import { TOGGLE_TODO, ADD_TODO } from './action'

let id = 0
const initialState = [
  { id: id++, text: 'Learn Vue', completed: false },
  { id: id++, text: "Don't learn React", completed: true },
]
function todosReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo
        }

        return {
          ...todo,
          completed: !todo.completed,
        }
      })

    case ADD_TODO:
      return [...state, { id: id++, text: action.payload, completed: false }]

    default:
      return state
  }
}

export default todosReducer
