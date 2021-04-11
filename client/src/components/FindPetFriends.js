import { SchemaTypeOptions } from 'mongoose'
import React, { useState, useEffect } from 'react'
import { Button, Container, Row, Col, Form, Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import API from "../utils/API.js"

// .then(response => setPets(response.data))
export default function FindPetFriends() {

    const[pets, setPets] = useState([])

    useEffect(() => {
        API.getPets()            
            .then(function(response) {
                setPets(...response.data);
                console.log(response.data);
                console.log(pets);
            })
            .catch(err => console.log(err))
    }, [])


    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://freepngimg.com/thumb/dog/1-2-dog-png-10-thumb.png" />
            <Card.Body>
                <Card.Title>Rufus</Card.Title>
                <Card.Text>
                    I enjoy playdates at the park with my friends!
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Chicago, IL</ListGroupItem>
                <ListGroupItem>Male</ListGroupItem>
                <ListGroupItem>2 Yers</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">Dislike</Card.Link>
                <Card.Link href="#">Like</Card.Link>
            </Card.Body>
        </Card>


    )
}



