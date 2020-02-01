import React from "react";
import {Card, CardTitle, CardSubtitle, CardText, CardImg} from 'reactstrap'

export default function CharacterCard(props) {
  return (
    <Card>
      <CardTitle>{props.character.name}</CardTitle>
      <CardImg src={props.character.image} alt={props.character.name} />
      <CardSubtitle>{props.character.species}</CardSubtitle>
      <CardText>{props.character.gender}</CardText>
      <CardText>{props.character.type}</CardText>
      <CardText>{props.character.status}</CardText>
    </Card>
  )
}