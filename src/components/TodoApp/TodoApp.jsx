import React, { useState, useRef } from 'react'
import Link from './Link'
import VisibleTodoList from './VisibleTodoList'
import AddTodo from './AddTodo'

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

  return (
    <div>
      <VisibleTodoList
        todos={getVisibilityFilter(todos, visibilityFilter)}
        onClick={(id) => {
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
        }}
      />

      <AddTodo
        onSubmit={(text) => {
          setTodos([...todos, { id: id++, text: text, completed: false }])
        }}
      />

      <div>
        <p>
          Show:{' '}
          <Link
            active={visibilityFilter === 'all'}
            onClick={() => setVisibilityFilter('all')}
          >
            All
          </Link>{' '}
          |{' '}
          <Link
            active={visibilityFilter === 'completed'}
            onClick={() => setVisibilityFilter('completed')}
          >
            Completed
          </Link>{' '}
          |{' '}
          <Link
            active={visibilityFilter === 'acitve'}
            onClick={() => setVisibilityFilter('active')}
          >
            Active
          </Link>
        </p>
      </div>
    </div>
  )
}

export default TodoApp
