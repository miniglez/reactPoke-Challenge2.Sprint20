import { useState, useEffect } from 'react'
import Form from './components/Form.jsx'

import './App.css'


function App() {
  const [findPokemon, setFindPokemon] = useState("")
  const [pokemon, setPokemon] = useState("")

  useEffect(() => {

      fetch(`https://pokeapi.co/api/v2/pokemon/${findPokemon}`)
        .then(res => {
          if(!res.ok){
            setPokemon("Pokemon no encontrado")
            //throw new Error("Error 404")
          }
          return res.json()
        }).then(data => {
          setPokemon(
            <>
              <h2>{data.name}</h2>
              <img src={data.sprites.front_default} />
            </>
          )
        }) 
  
  }, [findPokemon])


  return (
    <>
      <form id="pokemonForm">
        <label htmlFor='pokemonName'>Nombre pokemon: </label>
        <input
          id="pokemonName"
          name='pokemonName'
          value={findPokemon}
          onChange={(e) => setFindPokemon(e.target.value)}
        ></input>
      </form>
      <div>{pokemon}</div>
    </>
  )
}

export default App
