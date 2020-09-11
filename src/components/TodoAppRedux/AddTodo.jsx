import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addTodo } from './store/todos/action'

function AddTodo({ onSubmit }) {
  let inputRef = useRef()

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          const value = inputRef.current.value
          if (value.length > 0) {
            inputRef.current.value = ''
            onSubmit(value)
          }
        }}
      >
        <input ref={inputRef} type="text" />
        <button>Add todo</button>
      </form>
    </div>
  )
}
AddTodo.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (text) => dispatch(addTodo(text)),
})

export default connect(null, mapDispatchToProps)(AddTodo)
