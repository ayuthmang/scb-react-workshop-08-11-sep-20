import React, { useRef } from 'react'
import PropTypes from 'prop-types'

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

export default AddTodo
