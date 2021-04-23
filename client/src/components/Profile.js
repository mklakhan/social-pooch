import React, { useState, useEffect} from 'react'
import { Button, Container, Row, Col, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import API from "../utils/API.js"
import "./Profile.css"


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
            setPet_Name(results.pet_name)
            setZipcode(results.zipcode)
            setBirthday(results.birthday)
            setGender(results.gender)
            setSpecies(results.species)
            setTemperment(results.temperment)
            setPlaydate(results.playdate)
            setPetPic(results.petPic)
            setShowImg(false)
        }) 
        .catch((err) => {
          console.log(err)  
        })
    }  
}, [])




    // const handleSubmit = (evt) => {
    //     evt.preventDefault()
    //     let profile = {
    //         pet_name,
    //         zipcode,
    //         birthday,
    //         gender,
    //         species,
    //         temperment,
    //         playdate,
    //         petPic
    //     }

    //     fetch('http://localhost:3001/api/pet', {
    //         method: 'POST',
    //         headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    //         body: JSON.stringify(profile)
    //     })
    //         .then(response => {
    //             // network failure, request prevented
    //             if (response.status >= 200 && response.status < 300) {
    //                 return Promise.resolve(response);
    //             }


    //             return Promise.reject(new Error(response.statusText));
    //         })
    //         .then(response => response.json())
    //         .then(result => {
    //             console.log(result)
    //         })
    //         .catch(error => {
    //             // common error
    //             return null;
    //         });

    //     console.log('profile: ', profile);
    // }

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
                                <Form.Control name="pet_name" value={pet_name}type="input" placeholder="" onChange={handleChange} />
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