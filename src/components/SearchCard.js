import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'

const SearchCard = (props) => {
    const { name, species, id } = props.character
    return (
    <Card>
        <CardBody>
          <CardTitle>{ name }</CardTitle>
          <CardSubtitle>{ species }</CardSubtitle>
          <CardText><Link to={`/character/${id}`}>Learn More?</Link></CardText>
        </CardBody>
    </Card>
    )
}

export default SearchCard