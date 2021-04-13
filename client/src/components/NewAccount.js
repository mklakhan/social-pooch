//moved this to the profile.js - Remove from navigation//

import React from 'react'
import {Button, Container, Row, Col, Form} from 'react-bootstrap'


export default function NewAccount() {
   
    
    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Form >
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                        </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        
                        <Button variant="primary">
                            Submit
                    </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
