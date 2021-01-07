import { useState } from 'react'

export function useToggle() {
  const [value, setValue] = useState(false)

  function toggle() {
    setValue(!value)
  }

  return {
    value,
    toggle,
  }
}
