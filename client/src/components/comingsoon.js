import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Form,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import PetCard from "./PetCard.js";
import API from "../utils/API.js";
import MyCarousel from "./MyCarousel";

export default function ComingSoon() {
  const [pets, setPets] = useState([]);
  const [user_id, setUserId] = React.useState(
    localStorage.getItem("socialpooch-userId") || ""
  );

  useEffect(() => {
    console.log("useEffect mypet friends localstorage: ", user_id);
    fetchPets();
  }, []);

  const fetchPets = () => {
    API.getPetFriends(user_id) //"pRrUI5FL40WS9vuwfqToLOPsJeR2"
      .then(function (response) {
        setPets(response.data);
        console.log("response from get pet friends", response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="findPetFriends">
      {/* {pets.map((pet) =>
        pet.likes.map((like) => (
          <PetCard
            key={like._id}
            {...like}
            showLike={false}
            showDislike={true}
            fetchPets={fetchPets}
          />
        ))
      )} */}

      <MyCarousel
        fetchPets={fetchPets}
        showLike={true}
        showDislike={false}
        pets={pets}
      />

      {/* {pets.map(pet => (
                <PetCard key={pet._id} {...pet } />
            ))} */}
    </div>
  );
}
