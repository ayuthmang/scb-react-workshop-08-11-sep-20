import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PokemonDetail from './PokemonDetail'

function PokemonList() {
  const [pokemons, setPokemons] = useState(null)

  // componentDidMount
  useEffect(() => {
    async function fetchPokemons() {
      try {
        const res = await axios.get(
          'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'
        )
        const data = res.data
        setPokemons(data.results)

        // const res = await fetch(
        //   'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'
        // )
        // const data = await res.json()
        // setPokemons(data.results)

        // fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
        //   .then((res) => {
        //     // console.log(res)
        //     return res.json()
        //   })
        //   .then((data) => {
        //     console.log(data)
        //     setPokemons(data.results)
        //   }) /*.catch()*/
      } catch (err) {
        console.error(err)
      }
    }
    fetchPokemons()
  }, [])

  return (
    <div>
      <h1>Pokemon List</h1>
      {pokemons?.map((pokemon) => (
        <PokemonDetail key={pokemon.name} {...pokemon} />
      ))}
    </div>
  )
}

export default PokemonList
