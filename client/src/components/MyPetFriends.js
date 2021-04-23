import React, { useState, useEffect } from 'react'
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
 
    return (

        <div className="findPetFriends">
            {pets.map(pet => pet.likes.map(like => (            
                 <PetCard key={like._id} {...like } showLike={false} showDislike={true} />
            )))}           
        </div>

    )

}
