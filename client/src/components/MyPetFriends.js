import React, { useState, useEffect } from 'react'
import {Button, Container, Row, Col, Form, Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import PetCard from "./PetCard.js"
import API from "../utils/API.js"

export default function FindPetFriends() {

    const [pets, setPets] = useState([])
    const [user_id, setUserId] = React.useState(
        localStorage.getItem('socialpooch-userId') || ''
      );


    useEffect(() => {
        
        console.log("useEffect mypet friends localstorage: ", user_id);        
        
        API.getPetFriends(user_id)  //"pRrUI5FL40WS9vuwfqToLOPsJeR2"
            .then(function (response) {
                setPets(response.data);
                console.log("response from get pet friends",response.data);
            })
            .catch(err => console.log(err))
    }, [])

    // return (
        
    //     <Card style={{ width: '18rem' }}>
    //         <Card.Img variant="top" src="https://freepngimg.com/thumb/dog/11-dog-png-image-thumb.png" />
    //         <Card.Body>
    //             <Card.Title>Barky</Card.Title>
    //             <Card.Text>
    //                 I enjoy playdates at the park with my friends!
    // </Card.Text>
    //         </Card.Body>
    //         <ListGroup className="list-group-flush">
    //             <ListGroupItem>Chicago, IL</ListGroupItem>
    //             <ListGroupItem>Male</ListGroupItem>
    //             <ListGroupItem>2 Years Old</ListGroupItem>
    //         </ListGroup>
    //         <Card.Body>
    //             <Card.Link href="#">Remove</Card.Link>
    //         </Card.Body>            
    //     </Card>
    // )

    return (

        <div className="findPetFriends">
            {pets.map(pet => pet.likes.map(like => (            
                 <PetCard key={like._id} {...like } />
            )))}

            {/* {pets.map(pet => (

                <PetCard key={pet._id} {...pet } />

            ))} */}
        </div>

    )

}
