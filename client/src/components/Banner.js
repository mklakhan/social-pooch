import React from 'react'
import { Jumbotron, Container, Image } from 'react-bootstrap'
import socialpoochimg from "../Assets/socialpoochimg.png"


export default function Banner() {
    return (
        <div>      
            <Container fluid style={{ backgroundImage: `url(${socialpoochimg})`, height: "100%", width: "100%"}}>
                <Image style={{height: "10%", width: "100%"}} src={socialpoochimg} fluid />
                {/* <div style={{minHeight: "75%", minWidth: "75%"}}></div> */}
            </Container>
        </div>
    )
}
