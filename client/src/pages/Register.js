import React, {useRef, useState} from 'react'
import {Alert, Button, Container , Row, Col, Form} from 'react-bootstrap'
import API from '../utils/API'

import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"


export default function Register() {
const emailRef = useRef()
const passwordRef = useRef()
const passwordConfirmRef = useRef()
const { register} = useAuth()
const [error, setError] = useState('')
const [loading, setLoading] = useState(false)
//const [userId, setUserId] = useState('')
//logs to page 
const history = useHistory()

async function handleSubmit(e) {
    e.preventDefault()
if (passwordRef.current.value !== passwordConfirmRef.current.value) {
    return setError('Passwords do not match')
}
try {
    setError('')
    setLoading(true)
   const peek = await register(emailRef.current.value, passwordRef.current.value)
    console.log(peek.user.uid)
    //setUserId(peek.user.uid)
    const userId = peek.user.uid;
    localStorage.setItem('socialpooch-userId', userId);
    //now call your server 
    const serverOK = await API.createUser(peek.user.uid)

    history.push("/profile")

} catch {
    setError('Failed to create account')
}
    setLoading(false)
}

    return (
        
    <Container>
        <Row>
         <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
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
            <Form.Group controlId="formBasicPasswordConfirmation">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Password Confirmation" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button  disabled={loading} variant="primary" type="submit">Submit</Button>
            <div>Already have account?<Link to="/login">Login</Link></div>
           </Form>
        </Col>
      </Row>
    </Container>
      
)
}
