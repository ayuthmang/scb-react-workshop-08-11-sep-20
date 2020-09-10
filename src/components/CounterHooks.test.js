import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import Counter from './CounterHooks'

describe('Counter', () => {
  it('should increment, decrement, and reset', () => {
    const { getByText, debug } = render(<Counter />)
    const incrementBtn = getByText('+1')
    const decrementBtn = getByText('-1')
    const resetBtn = getByText('reset')

    fireEvent.click(incrementBtn)
    fireEvent.click(incrementBtn)
    expect(getByText('Count: 2')).toBeInTheDocument()

    fireEvent.click(decrementBtn)
    fireEvent.click(decrementBtn)
    fireEvent.click(decrementBtn)
    expect(getByText('Count: -1')).toBeInTheDocument()

    fireEvent.click(resetBtn)
    expect(getByText('Count: 0')).toBeInTheDocument()
  })
})
