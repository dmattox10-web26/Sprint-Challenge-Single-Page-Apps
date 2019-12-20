import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText } from 'reactstrap'

export default function CharacterCard(props) {
  const { name, gender, image, species, status } = props.character
  return (
    <Card>
      <CardImg top width="100%" src={ image } alt={`depiction of ${name}`} />
        <CardBody>
          <CardTitle>{ name }</CardTitle>
          <CardSubtitle>{ species }</CardSubtitle>
          <CardText>{ `A ${gender}, status ${status}.`}</CardText>
        </CardBody>
    </Card>
  )
}
