import React, { useState, useEffect } from 'react'
import { Button, Container, Row, Col, Form, Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import API from '../utils/API';

function handleClickLike(id) {
    console.log(id);
}

function handleClickDislike(id) {
    console.log("dislike ",id);

    let user_id = localStorage.getItem('socialpooch-userId')
    console.log(user_id)
    //console.log(pets)

    let dislikeData = {
        user_id: user_id,
        id: id
    }
    
    API.dislikePet(dislikeData)
        .then(function (response) {
            console.log("dislike completed", response)            
        })
        .catch(err => console.log(err))
    }

function PetCard(props) {

    const [pets, setPets] = useState([])
    const [user_id, setUserId] = React.useState(
        localStorage.getItem('socialpooch-userId') || ''
      );

      // get the profile of the current user
    // useEffect(() => {
            
    //     API.getPet(user_id)  //"pRrUI5FL40WS9vuwfqToLOPsJeR2"
    //         .then(function (response) {
    //             setPets(response.data);
                
    //         })
    //         .catch(err => console.log(err))
    // }, [])
    
    console.log("user id likes ", user_id)  
    //console.log("your pet profile ",pets);

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