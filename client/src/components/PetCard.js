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
  Jumbotron,
} from "react-bootstrap";
import { IoHeartHalf, IoHeartDislike } from "react-icons/io5";
import API from "../utils/API";
import "./Petcard.css";

function PetCard(props) {
  const [pets, setPets] = useState([]);

  console.log("petcard: ", props);

  function handleClickLike(id) {
    console.log(id);

    let user_id = localStorage.getItem("socialpooch-userId");
    console.log(user_id);

    let likeData = {
      user_id: user_id,
      id: id,
    };

    API.likePet(likeData)
      .then(function (response) {
        console.log("liked completed", response);
        props.fetchPets();
      })
      .catch((err) => console.log(err));
  }

  function handleClickDislike(id) {
    let user_id = localStorage.getItem("socialpooch-userId");
    console.log(user_id);

    let dislikeData = {
      user_id: user_id,
      id: id,
    };

    API.dislikePet(dislikeData)
      .then(function (response) {
        console.log("dislike completed", response);
        //history.push("/mypetfriends")
        // document.location.reload();

        props.fetchPets();
      })
      .catch((err) => console.log(err));
  }

  return (
    <Jumbotron style={{ backgroundColor: "lightblue" }} fluid className="p-5">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.petPic} />
        <Card.Body style={{ backgroundColor: "lightblue" }}>
          <Card.Title>{props.pet_name}</Card.Title>
          <Card.Text>{props.playdate}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          {/* <ListGroupItem>{props._id}</ListGroupItem> */}
          <ListGroupItem style={{ backgroundColor: "pink" }}>
            {props.zipcode}
          </ListGroupItem>
          <ListGroupItem style={{ backgroundColor: "pink" }}>
            {props.gender}
          </ListGroupItem>
          <ListGroupItem style={{ backgroundColor: "pink" }}>
            {props.birthday}
          </ListGroupItem>
        </ListGroup>
        <Card.Body style={{ backgroundColor: "lightblue" }}>
          {props.showDislike && (
            <Card.Link
              onClick={() => {
                handleClickDislike(props._id);
              }}
              href="#"
            >
              Dislike <IoHeartDislike />
            </Card.Link>
          )}
          {props.showLike && (
            <Card.Link
              onClick={() => {
                handleClickLike(props._id);
              }}
              href="#"
            >
              Like <IoHeartHalf />
            </Card.Link>
          )}
        </Card.Body>
      </Card>
    </Jumbotron>
  );
}

export default PetCard;
