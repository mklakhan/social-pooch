import React, { useState, useEffect } from 'react'
import { Button, Container, Row, Col, Form, Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { useHistory } from "react-router-dom"
import API from '../utils/API';



function PetCard(props) {
    const history = useHistory()
    const [pets, setPets] = useState([])
    
    function handleClickLike(id) {
        console.log(id);
    
        let user_id = localStorage.getItem('socialpooch-userId')
        console.log(user_id)
    
        let likeData = {
            user_id: user_id,
            id: id
        }
            
        API.likePet(likeData)
            .then(function (response) {
                console.log("liked completed", response)                           
            })
            .catch(err => console.log(err))
    }

    function handleClickDislike(id) {
        let user_id = localStorage.getItem('socialpooch-userId')
        console.log(user_id)
    
        let dislikeData = {
            user_id: user_id,
            id: id
        }
        
        API.dislikePet(dislikeData)
            .then(function (response) {
                console.log("dislike completed", response)     
                history.push("/mypetfriends")      
            })
            .catch(err => console.log(err))       
        }
    
    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.petPic} />
            <Card.Body>
                <Card.Title>{props.pet_name}</Card.Title>
                <Card.Text>{props.playdate}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>{props._id}</ListGroupItem>
                <ListGroupItem>{props.zipcode}</ListGroupItem>
                <ListGroupItem>{props.gender}</ListGroupItem>
                <ListGroupItem>{props.birthday}</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link 
                onClick={() => { handleClickDislike( props._id) }}
                href="#">Dislike
                </Card.Link>
                <Card.Link
                    onClick={() => { handleClickLike(props._id) }}
                    href="#">Like
                </Card.Link>
            </Card.Body>

        </Card>
    )
}

export default PetCard