import React from 'react'
import { Route } from 'react-router-dom'
import { Container } from 'reactstrap'
import Nav from './components/Nav'
import WelcomePage from './components/WelcomePage'
import CharacterList from './components/CharacterList'
import SearchForm from './components/SearchForm'

export default function App() {
  return (
    <>
      <Nav />
      <Container>
        <Route exact path='/'>
          <WelcomePage />
        </Route>
        <Route exaxt path='/list'>
          <CharacterList />
        </Route>
        <Route exact path='/search'>
          <SearchForm />
        </Route>
      </Container>
    </>
  )
}
