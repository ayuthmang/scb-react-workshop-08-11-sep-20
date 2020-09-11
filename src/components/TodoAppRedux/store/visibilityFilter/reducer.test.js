import visibilityFilterReducer from './reducer'
import { setVisibilityFilter } from "./action";

describe('visibilityFilter reducer', () => {
  it("should set visibilityFilter from 'all' to 'completed'", () => {
    const initialState = 'all'

    const actual = visibilityFilterReducer(initialState, setVisibilityFilter('completed'))

    expect(actual).toBe('completed')
  })

  it("should set visibilityFilter from 'completed' to 'active'", () => {
    const initialState = 'completed'

    const actual = visibilityFilterReducer(initialState, setVisibilityFilter('active'))

    expect(actual).toBe('active')
  })
})
