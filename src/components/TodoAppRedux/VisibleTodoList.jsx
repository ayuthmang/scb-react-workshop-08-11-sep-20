import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toggleTodo } from './store/todos/action'

function getVisibleTodos(todos, visibilityFilter) {
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

function VisibleTodoList({ todos, onClick }) {
  return (
    <div>
      <ul>
        {todos?.map(({ id, text, completed }) => (
          <li
            key={id}
            style={{
              textDecoration: completed ? 'line-through' : 'none',
            }}
            onClick={() => onClick(id)}
          >
            {text}
          </li>
        ))}
      </ul>
    </div>
  )
}

VisibleTodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
})
const mapDispatchToProps = (dispatch) => ({
  onClick: (id) => dispatch(toggleTodo(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(VisibleTodoList)
