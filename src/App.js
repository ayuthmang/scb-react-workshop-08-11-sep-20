import React from 'react'
import SwitchButton from './components/SwitchButton'
import Counter from './components/Counter'
import RegisterForm from './components/form/RegisterForm'
import RegisterFormFormik from './components/form/RegisterFormFormik'
import SwitchButtonHooks from './components/SwitchButtonHooks'
import CounterHooks from './components/CounterHooks'
import ImageCarousel from './components/ImageCarousel'
import PokemonList from './components/api-calls/PokemonList'
import RouterApp from './components/router/App'

function App() {
  return (
    <div>
      {/* <SwitchButton isOn /> */}
      {/* <Counter /> */}
      {/* <RegisterFormFormik /> */}
      {/* <SwitchButtonHooks /> */}
      {/* <CounterHooks /> */}
      {/* <ImageCarousel /> */}
      {/* <PokemonList /> */}
      <RouterApp />
    </div>
  )
}

export default App
