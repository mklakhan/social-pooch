import React, { useState, useEffect } from 'react'
import { Button, Container, Row, Col, Form, Card, ListGroup, ListGroupItem } from 'react-bootstrap'

function PetCard( props) {
    console.log(props)
return (

    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://freepngimg.com/thumb/dog/1-2-dog-png-10-thumb.png" />
        <Card.Body>
            <Card.Title>{props.pet_name}</Card.Title>
            <Card.Text>{props.playdate}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroupItem>Chicago, IL {props.zipcode}</ListGroupItem>
            <ListGroupItem>{props.gender}</ListGroupItem>
            <ListGroupItem>2 Yers</ListGroupItem>
        </ListGroup>
        <Card.Body>
            <Card.Link href="#">Dislike</Card.Link>
            <Card.Link href="#">Like</Card.Link>
        </Card.Body>
        
    </Card>
)
}

export default PetCard