import React, { useState, useEffect } from 'react'
import {Button, Container, Row, Col, Form, Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import PetCard from "./PetCard.js"
import API from "../utils/API.js"

export default function FindPetFriends() {
    const [pets, setPets] = useState([])

    useEffect(() => {
        API.getPetFriends("8")
            .then(function (response) {
                setPets(response.data);
                console.log(response.data);
            })
            .catch(err => console.log(err))
            
        console.log("pet:", pets);
    }, [])

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://freepngimg.com/thumb/dog/11-dog-png-image-thumb.png" />
            <Card.Body>
                <Card.Title>Barky</Card.Title>
                <Card.Text>
                    I enjoy playdates at the park with my friends!
    </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Chicago, IL</ListGroupItem>
                <ListGroupItem>Male</ListGroupItem>
                <ListGroupItem>2 Years Old</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">Remove</Card.Link>
            </Card.Body>
        </Card>
    )
}
