export const TOGGLE_TODO = 'TOGGLE_TODO'
export const ADD_TODO = 'ADD_TODO'

export const toggleTodo = (id) => ({ type: TOGGLE_TODO, payload: id })
export const addTodo = (text) => ({ type: ADD_TODO, payload: text })
