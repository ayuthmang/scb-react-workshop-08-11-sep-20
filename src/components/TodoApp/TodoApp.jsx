import React, { useState, useRef } from 'react'
import VisibleTodoList from './VisibleTodoList'
import AddTodo from './AddTodo'
import Footer from './Footer'

function getVisibilityFilter(todos, visibilityFilter) {
  return todos.filter((todo) => {
    switch (visibilityFilter) {
      case 'all':
        return true
      case 'completed':
        return todo.completed
      case 'active':
        return !todo.completed
      default:
        throw new Error('Invalid filter')
    }
  })
}

let id = 0
function TodoApp() {
  const [todos, setTodos] = useState([
    { id: id++, text: 'Learn Vue', completed: false },
    { id: id++, text: "Don't learn React", completed: true },
  ])
  const [visibilityFilter, setVisibilityFilter] = useState('all')

  function onTodoClick(id) {
    setTodos(
      todos.map((targetTodo) => {
        if (targetTodo.id !== id) {
          return targetTodo
        }

        return {
          ...targetTodo,
          completed: !targetTodo.completed,
        }
      })
    )
  }
  function onFormSubmit(text) {
    setTodos([...todos, { id: id++, text: text, completed: false }])
  }
  function onFilterClick(filter) {
    setVisibilityFilter(filter)
  }

  return (
    <div>
      <VisibleTodoList
        todos={getVisibilityFilter(todos, visibilityFilter)}
        onClick={onTodoClick}
      />
      <AddTodo onSubmit={onFormSubmit} />
      <Footer visibilityFilter={visibilityFilter} onFilterClick={onFilterClick} />
    </div>
  )
}

export default TodoApp
