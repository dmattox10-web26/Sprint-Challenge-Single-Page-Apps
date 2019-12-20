import React, { useEffect, useState } from 'react'
import axios from 'axios'

import CharacterCard from './CharacterCard'

export default function CharacterList() {
  const [characters, updateCharacters] = useState([])

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        updateCharacters(res.data.results)
      })
  }, [])
  console.log(characters)
  return (
    <section className='character-list'>
      {characters.map(character => 
        <CharacterCard character={ character } />  
      )}
    </section>
  )
}
