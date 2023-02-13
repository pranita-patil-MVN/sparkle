//Navbar section

import React from 'react'
import { Container, Navbar,Nav} from "react-bootstrap";
import '../css/components.css'
import notificationImg from '../assets/Images/notificationImg.png'
import Profile from '../assets/Images/profile.png'

function NavBar() {
  return (
    <div>
        
      <Navbar expand="lg" >
        <Container>
          <Navbar.Brand href="#"><h4 className='navTitle'>Financial Year 2022-2023</h4></Navbar.Brand>
          <Nav className=''>
          
            <Nav.Link href="#features"><img src={notificationImg} alt='notificationImg'></img></Nav.Link>
            <Nav.Link href="#pricing"><img src={Profile} alt='profile'></img></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
    </div>
  )
}

export default NavBar