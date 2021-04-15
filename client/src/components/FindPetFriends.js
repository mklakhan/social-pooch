import { SchemaTypeOptions } from 'mongoose'
import React, { useState, useEffect } from 'react'
import { Button, Container, Row, Col, Form, Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import PetCard from "./PetCard.js"
import API from "../utils/API.js"
import './FindPetFriends.css';

// .then(response => setPets(response.data))
export default function FindPetFriends() {

    const [pets, setPets] = useState([])
    const [user_id, setUserId] = React.useState(
        localStorage.getItem('socialpooch-userId') || ''
      );

    console.log("find friends userId: ", user_id);

    useEffect(() => {       

        API.getPets()
            .then(function (response) {
                setPets(response.data);
                console.log(response.data);
            })
            .catch(err => console.log(err))
    }, [])


    return (

        <div className="findPetFriends">
            {pets.map(pet => (

                <PetCard {...pet } />

            ))}
        </div>

    )
}



