import React, {useState} from 'react'
import {Button, Container, Row, Col, Form} from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import API from "../utils/API.js"

export default function Profile() {
    const history = useHistory()

    const [name, setName] = useState("")
    const [zipcode, setZipcode] = useState("")
    const [birthday, setBirthday] = useState("")
    const [gender, setGender] = useState("")
    const [petType, setPetType] = useState("")
    const [temperment, setTemperment] = useState("")
    const [idealPlaydate, setIdealPlaydate] = useState("")

    const [profileSettings, setProfileSettings] = useState({
        gender: "Female",
        species: "Dog"
    })

    const handleChange = (evt) => {
        console.log("handleChage ", evt.target.name)
        console.log("handleChage ", evt.target.value)

        setProfileSettings({
            ...profileSettings,
            [evt.target.name]: evt.target.value,
            pet_owner: "9"
          })
       
        
        switch (name) {
            case "Name":
                setName(evt.target.value)
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

            case "pet_type":
                setPetType(evt.target.value)
                break;
        
            case "temperment":
                setTemperment(evt.target.value)
                break;
            
            case "ideal_playdate":
                setIdealPlaydate(evt.target.value)
                break;
            default:
                break;
        }
     }     
 
     function handleSubmit(e) {
         e.preventDefault();
         console.log('form submit');
         save();
       }
 
 
     const save = () => { 
         console.log("in save")
         const postData = {
           ...profileSettings          
         }
         console.log("post data", postData);
 
         API.savePet(postData)
           .then(function (response) 
             {
                 console.log("savePet response", response)
                 history.push("/findpetfriends")
             })
           .catch(err => console.log(err))
       }

    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Form className="mt-5 mb-5" onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.File id="exampleFormControlFile1" label="Upload a Profile Picture" />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="pet_name" type="input" placeholder="" onChange={handleChange} />
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
                            <Form.Label>Pet Type</Form.Label>
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

                        <Form.Group controlId="exampleForm.ControlSelect2" >
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
                            <Form.Control name="ideal_playdate" as="textarea" rows={3} onChange={handleChange}/>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>

                    </Form>

                </Col>
            </Row>
        </Container>
    )
}

