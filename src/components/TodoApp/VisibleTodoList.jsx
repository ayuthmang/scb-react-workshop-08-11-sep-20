import React from 'react'
import PropTypes from 'prop-types'

function VisibleTodoList({ todos, onClick }) {
  return (
    <div>
      <ul>
        {todos.map(({ id, text, completed }) => (
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
  onClick: PropTypes.func.isRequired
}

export default VisibleTodoList
