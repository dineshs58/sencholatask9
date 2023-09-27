import React from 'react'
import img from '../logo.png'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './home.css';
const Home = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-dark">
                <Container>
                    <Navbar.Brand href="#">
                        <img
                            alt=""
                            src={img}
                            width="40"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}Ganit</Navbar.Brand>

                    <Navbar.Toggle className='toggle' aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className=''>
                        <Nav className="ms-auto ">
                            <Nav.Link as={Link} to='/' className='me-4'>Create</Nav.Link>
                            <Nav.Link as={Link} to='/read' className='me-4'>Viewdetails</Nav.Link>
                            <Nav.Link as={Link} to='/update' className='me-4'>Modify</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Home