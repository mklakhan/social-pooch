import React from 'react'
import {Button, Container, Row, Col, Form, Card, ListGroup, ListGroupItem} from 'react-bootstrap'

export default function FindPetFriends() {
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
