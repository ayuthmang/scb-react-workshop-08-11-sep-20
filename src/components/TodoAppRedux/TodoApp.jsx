import React from 'react'
import VisibleTodoList from './VisibleTodoList'
import AddTodo from './AddTodo'
import Footer from './Footer'
import { Provider } from 'react-redux'
import store from './store'

function TodoApp() {
  return (
    <Provider store={store}>
      <div>
        <VisibleTodoList />
        <AddTodo />
        <Footer
        /*
        visibilityFilter={visibilityFilter}
        onFilterClick={onFilterClick}
        */
        />
      </div>
    </Provider>
  )
}

export default TodoApp
