import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

function PokemonDetail(props) {
  const [pokemonDetail, setPokemonDetail] = useState(null)

  useEffect(() => {
    // ทำเอง
    fetch(props.url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setPokemonDetail(data)
      })
  }, [props.url])

  return (
    <>
      <li>{props.name}</li>
      <img src={pokemonDetail?.sprites?.front_default} alt="pokemon" />
    </>
  )
}
PokemonDetail.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default PokemonDetail;