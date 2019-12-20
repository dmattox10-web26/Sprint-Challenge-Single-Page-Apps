import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap'

import CharacterCard from './CharacterCard'

const SearchResult = (props) => {
    const [character, setCharacter] = useState({})
    const params = useParams()
    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${params.id}`)
        .then(res => {
            setCharacter(res.data)
        })
    }, [])

    return (
        <CharacterCard character={ character }/>
    )
}

export default SearchResult