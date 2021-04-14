import React, {useRef, useState} from 'react'
import {Alert, Button, Container , Row, Col, Form} from 'react-bootstrap'
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"


export default function Login() {
const emailRef = useRef()
const passwordRef = useRef()

const { login } = useAuth()
const [error, setError] = useState('')
const [loading, setLoading] = useState(false)
//logs to page 
const history = useHistory()

async function handleLogin(e) {
    e.preventDefault()

try {
    setError('')
    setLoading(true)
    const peek = await login(emailRef.current.value, passwordRef.current.value)
    console.log(peek.user.uid)
    //now call your server 
    //const serverOK? = await(fetch api)
    history.push("/mypetfriends")
    }catch {
    setError('Failed to sign in')
}
    setLoading(false)
}

    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Form onSubmit={handleLogin}>
                       <h1>Login</h1>
                      
                       {error && <Alert variant="danger">{error}</Alert>}
                        <Form.Group controlId="formBasicEmail"> 
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" ref={emailRef} required  />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" ref={passwordRef} required />
                        </Form.Group>
                        <Button  disabled={loading} variant="primary" type="submit">
                            Submit
                    </Button>
            <div>Need an account?<Link to="/register">Sign Up</Link></div>
                    </Form>
                </Col>
            </Row>
        </Container>
      
)
}