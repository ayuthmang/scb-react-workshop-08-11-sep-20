import todosReducer from './reducer'
import { toggleTodo, addTodo } from './action'

describe('todos reducer', () => {
  it('should toggle todo by id', () => {
    const initialState = [
      { id: 1, text: 'Learn Vue', completed: false },
      { id: 2, text: 'Learn React', completed: false },
    ]

    const actual = todosReducer(initialState, toggleTodo(1))

    expect(actual).toEqual([
      { id: 1, text: 'Learn Vue', completed: true },
      { id: 2, text: 'Learn React', completed: false },
    ])
  })

  xit('should add todo', () => {
    let initialState = []

    let actual = todosReducer(initialState, addTodo('Learn React'))
    expect(actual).toEqual([{ id: 0, text: 'Learn React', completed: false }])

    initialState = [{ id: 0, text: 'Learn React', completed: false }]
    actual = todosReducer(initialState, addTodo('Learn Vue'))
    expect(actual).toEqual([
      ...initialState,
      { id: 1, text: 'Learn Vue', completed: false },
    ])
  })
})
