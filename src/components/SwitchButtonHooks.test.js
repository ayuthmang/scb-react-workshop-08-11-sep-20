import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import SwitchButton from './SwitchButtonHooks'

describe('SwitchButton', () => {
  it('should turn on when clicked', () => {
    const { getByText } = render(<SwitchButton />)
    const btn = getByText('TURN ON')

    fireEvent.click(btn)
    expect(btn).toHaveTextContent('TURN OFF')

    fireEvent.click(btn)
    expect(btn).toHaveTextContent('TURN ON')
  })
})
