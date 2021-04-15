import { SchemaTypeOptions } from 'mongoose'
import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import { Button, Container, Row, Col, Form, Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import PetCard from "./PetCard.js"
import API from "../utils/API.js"

// .then(response => setPets(response.data))
export default function FindPetFriends() {
    const location = useLocation();

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

        <div>
            {pets.map(pet => (

                <PetCard {...pet } />

            ))}
        </div>

    )
}



