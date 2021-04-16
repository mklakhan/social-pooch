import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Form,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";

function handleClick(id) {
  console.log(id);
}

function PetCard(props) {
  console.log(props);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.petPic} />
      <Card.Body>
        <Card.Title onClick={handleClick}>{props.pet_name}</Card.Title>
        <Card.Text>{props.playdate}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>{props.zipcode}</ListGroupItem>
        <ListGroupItem>{props.gender}</ListGroupItem>
        <ListGroupItem>{props.birthday}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link>Dislike</Card.Link>
        <Card.Link
          onClick={() => {
            handleClick(props._id);
          }}
          href="#"
        >
          Like
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default PetCard;
