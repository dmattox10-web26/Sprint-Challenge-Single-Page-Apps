import React, { useState, useEffect } from "react";
import { Row, Col, Form, FormGroup, Label, Input } from 'reactstrap'
import axios from 'axios'

import SearchCard from './SearchCard'
import { useInput } from '../hooks/input-hook'

export default function SearchForm() {
  const { value:term, bind:bindTerm } = useInput('')
  const [characters, updateCharacters] = useState([])
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        for (let i = 1; i <= res.data.info.pages; i++ ) {
          axios.get(`https://rickandmortyapi.com/api/character/?page=${i}`)
          .then(res => {
            console.log(res)
            updateCharacters(exisitingCharacters => [...exisitingCharacters, ...res.data.results])
          })
        }
      })
  }, [])

  useEffect(() => {
    console.log(characters)
    const results = characters.filter(character =>
      character.name.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(results);
  }, [term, characters]);

  return (
    <section className="search-form">
      <Form>
        <FormGroup>
            <Label for='term'>Search</Label>
            <Input type='text'
                    {...bindTerm}
            />
        </FormGroup>
      </Form>
      {searchResults.map(result => 
        <SearchCard character={ result } />
      )}
    </section>
  );
}
