import React from 'react'
import {Button, Container, Row, Col, Form} from 'react-bootstrap'

export default function Profile() {
    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="input" placeholder="" />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlInput2">
                            <Form.Label>Zipcode</Form.Label>
                            <Form.Control type="input" placeholder="" />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlInput3">
                            <Form.Label>Birthday</Form.Label>
                            <Form.Control type="input" placeholder="" />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Gender</Form.Label>
                            <Form.Control as="select">
                                <option>Female</option>
                                <option>Male</option>
                                <option>Unknown</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlSelect2">
                            <Form.Label>Pet Type</Form.Label>
                            <Form.Control as="select">
                                <option>Bird</option>
                                <option>Cat</option>
                                <option>Dog</option>
                                <option>Fish</option>
                                <option>Goat</option>
                                <option>Guinea Pig</option>
                                <option>Hamster</option>
                                <option>Mouse</option>
                                <option>Rabbit</option>
                                <option>Snake</option>
                                <option>Turtle</option>
                                <option>Other</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlSelect2">
                            <Form.Label>Temperment</Form.Label>
                            <Form.Control as="select" multiple>
                                <option>Playful</option>
                                <option>Shy</option>
                                <option>Energetic</option>
                                <option>Friendly</option>
                                <option>Aggressive</option>
                                <option>Neutral</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Ideal Playdate</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>

                        <Form.Group>
                            <Form.File id="exampleFormControlFile1" label="Upload a Profile Picture" />
                        </Form.Group>

                    </Form>

                    <Button variant="primary" type="submit">
                            Submit
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}



