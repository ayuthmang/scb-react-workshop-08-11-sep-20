import { applyMiddleware, createStore, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import todosReducer from './todos/reducer'
import visibilityFilterReducer from './visibilityFilter/reducer'

const store = createStore(
  combineReducers({
    todos: todosReducer,
    visibilityFilter: visibilityFilterReducer,
  }),
  composeWithDevTools(applyMiddleware(createLogger()))
)

export default store
