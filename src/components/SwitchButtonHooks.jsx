import React, { useState } from 'react'

function SwitchButtonHooks(props) {
  const [isOn, setIsOn] = useState(props.isOn || false)

  const handleClick = () => {
    setIsOn(!isOn)
  }

  return <button onClick={handleClick}>TURN {isOn ? 'OFF' : 'ON'}</button>
}

export default SwitchButtonHooks
