import { createReducer } from '@reduxjs/toolkit'
import { setVisibilityFilter } from './action'

const visibilityFilterReducer = createReducer('all', {
  [setVisibilityFilter]: (_, action) => action.payload,
})

export default visibilityFilterReducer
