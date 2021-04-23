import React, { useState, useEffect} from 'react'
import { Button, Container, Row, Col, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import API from "../utils/API.js"
import "./Profile.css"
import Cat from "../animalSounds/cat.wav"
import Dog from "../animalSounds/dog.wav"
import Fish from "../animalSounds/fish.wav"
import Goat from "../animalSounds/Goat.mp3"
import GuineaPig from "../animalSounds/guineapig.wav"
import Mouse from "../animalSounds/mouse.mp3"
import Snake from "../animalSounds/snakehiss.mp3"
import Bird from "../animalSounds/bird.wav"
import Rabbit from "../animalSounds/rabbit.mp3"


export default function Profile() {
    const history = useHistory()

    const [pet_name, setPet_Name] = useState("")
    const [zipcode, setZipcode] = useState("")
    const [birthday, setBirthday] = useState("")
    const [gender, setGender] = useState("Female")
    const [species, setSpecies] = useState("Dog")
    const [temperment, setTemperment] = useState("")
    const [playdate, setPlaydate] = useState("")
    const [petPic, setPetPic] = useState("")
    const [showImg, setShowImg] = useState(false)

    //do we need this here?//
    const [profileSettings, setProfileSettings] = useState({
        gender: "Female",
        species: "Dog"
    })
    const [user_id, setUserId] = React.useState(
        localStorage.getItem('socialpooch-userId') || ''
    );

    const playAnmlSound = function(anmlSound) {
        // var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');

        console.log("in play sound",anmlSound);        
        var audio = "";
        if (anmlSound === "Cat") audio = new Audio(Cat);
        if (anmlSound === "Dog") audio = new Audio(Dog);
        if (anmlSound === "Fish") audio = new Audio(Fish);
        if (anmlSound === "Guinea Pig") audio = new Audio(GuineaPig);
        if (anmlSound === "Hamster") audio = new Audio(GuineaPig);
        if (anmlSound === "Goat") audio = new Audio(Goat);
        if (anmlSound === "Mouse") audio = new Audio(Mouse);
        if (anmlSound === "Snake") audio = new Audio(Snake);
        if (anmlSound === "Fish") audio = new Audio(Fish); 
        if (anmlSound === "Bird") audio = new Audio(Bird); 
        if (anmlSound === "Rabbit") audio = new Audio(Rabbit);         
        if (audio != "") audio.play();
      }

    //for profile image upload//
    const imgToBase64 = function (img) {
        console.log("i'm in img base")
        let fileReader = new FileReader();
        let base64;

        fileReader.readAsDataURL(img)

        fileReader.onloadend = function () {
            // base64 = fileReader.result.replace(/^data:.+;base64,/, '');
            base64 = fileReader.result;
            console.log(base64);

            setPetPic(base64)
            setProfileSettings({ ...profileSettings, petPic: base64 })

            setShowImg(true)

        }
    }

    console.log("profile after set pic", profileSettings);
    console.log("profile userId : ", user_id);

    const handleChange = (evt) => {

        setProfileSettings({
            ...profileSettings,
            [evt.target.name]: evt.target.value,
            user_id: user_id,
            petPic: petPic
        })


        switch (evt.target.name) {
            case "pet_name":
                setPet_Name(evt.target.value)
                break;

            case "zipcode":
                setZipcode(evt.target.value)
                break;

            case "birthday":
                setBirthday(evt.target.value)
                break;

            case "gender":
                setGender(evt.target.value)
                break;

            case "species":
                setSpecies(evt.target.value)
                break;

            case "temperment":
                setTemperment(evt.target.value)
                break;

            case "playdate":
                setPlaydate(evt.target.value)
                break;

            case "file-upload-label":
                console.log({ type: evt.target.files[0] });
                let imgText = imgToBase64(evt.target.files[0]);
                console.log('imgText: ', imgText);
                break;

            default:
                break;
        }

        playAnmlSound(evt.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log('form submit');
        save();
    }


    const save = () => {
        console.log("in save")

        let profile = {
            pet_name,
            zipcode,
            birthday,
            gender,
            species,
            temperment,
            playdate,
            petPic
        }
        setProfileSettings(profile)

        const postData = {
            ...profileSettings
        }
        console.log("post data", postData);

        API.savePet(postData)
            .then(function (response) {
                console.log("savePet response", response)
                history.push("/findpetfriends")
            })
            .catch(err => console.log(err))
    }

useEffect(() => {
    if (user_id !== null) {
        API.getPetA(user_id)
        .then((results) => {
            console.log(results)
            // setPet_Name(results.pet_name)
            // setZipcode(results.zipcode)
            // setBirthday(results.birthday)
            // setGender(results.gender)
            // setSpecies(results.species)
            // setTemperment(results.temperment)
            // setPlaydate(results.playdate)
            // setPetPic(results.petPic)
            // setShowImg(false)
        }) 
        .catch((err) => {
          console.log(err)  
        })
    }  
}, [])



    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Form className="mt-5 mb-5">

                        {/* <Form.Group id="profilePic">
                            <Form.Label id="file-upload-label">Upload Profile Picture</Form.Label>
                            <Form.File  name="file-upload-label" id="file-upload" onChange={handleChange}/>
                        </Form.Group> */}

                        <Form.Group custom="false" style={{ backgroundImage: "url(" + petPic + ")", color: "red" }} id="profilePic">
                            <Form.Label
                                id="file-upload-label">Upload a Profile Picture </Form.Label>
                            <Form.File
                                name="file-upload-label"
                                //name="petPic" 
                                id="file-upload"
                                onChange={handleChange} />
                        </Form.Group>

                        <div className="petData">
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Pet Name</Form.Label>
                                <Form.Control name="pet_name" value={pet_name} type="input" placeholder="" onChange={handleChange} />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlInput2">
                                <Form.Label>Zipcode</Form.Label>
                                <Form.Control name="zipcode" type="number" placeholder="" onChange={handleChange} />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlInput3">
                                <Form.Label>Birthday</Form.Label>
                                <Form.Control name="birthday" type="date" placeholder="" onChange={handleChange} />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Gender</Form.Label>
                                <Form.Control name="gender" as="select" onChange={handleChange} value={profileSettings.gender}>
                                    <option>Female</option>
                                    <option>Male</option>
                                    <option>Unknown</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlSelect2">
                                <Form.Label>Species</Form.Label>
                                <Form.Control name="species" as="select" onChange={handleChange} value={profileSettings.species}>
                                    <option>Bird</option>
                                    <option>Cat</option>
                                    <option>Dog</option>
                                    <option>Fish</option>
                                    <option>Goat</option>
                                    <option>Guinea Pig</option>
                                    <option>Hamster</option>
                                    <option>Mouse</option>
                                    <option>Rabbit</option>
                                    <option>Snake</option>
                                    <option>Turtle</option>
                                    <option>Other</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlSelect3" >
                                <Form.Label>Temperment</Form.Label>
                                <Form.Control name="temperment" as="select" multiple onChange={handleChange}>
                                    <option>Playful</option>
                                    <option>Shy</option>
                                    <option>Energetic</option>
                                    <option>Friendly</option>
                                    <option>Aggressive</option>
                                    <option>Neutral</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Ideal Playdate</Form.Label>
                                <Form.Control name="playdate" as="textarea" rows={3} onChange={handleChange} />
                            </Form.Group>

                            <Button variant="primary" type="submit" onClick={handleSubmit}>
                                Submit
                        </Button>
                        </div>

                    </Form>

                </Col>
            </Row>
        </Container>
    )
}