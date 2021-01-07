import { renderHook, act } from '@testing-library/react-hooks'
import { useToggle } from '../useToggle'

it('should toggle value', () => {
  const { result } = renderHook(() => useToggle())

  act(() => {
    result.current.toggle()
  })

  expect(result.current.value).toBeTruthy()
})
