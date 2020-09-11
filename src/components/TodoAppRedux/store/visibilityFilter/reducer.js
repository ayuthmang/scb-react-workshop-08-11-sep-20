import { SET_VISIBILITY_FILTER } from './action'

function visibilityFilterReducer(state = 'all', action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload
    default:
      return state
  }
}

export default visibilityFilterReducer
