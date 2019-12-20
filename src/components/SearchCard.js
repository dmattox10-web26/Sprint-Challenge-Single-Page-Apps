import React from 'react'

import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap'

const SearchCard = (props) => {
    const { name, species } = props.character
    return (
    <Card>
        <CardBody>
          <CardTitle>{ name }</CardTitle>
          <CardSubtitle>{ species }</CardSubtitle>
        </CardBody>
    </Card>
    )
}

export default SearchCard