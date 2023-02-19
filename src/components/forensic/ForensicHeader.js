import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container, Image, Button } from 'react-bootstrap';

const ForensicHeader = () => {

    const logout = () => {
        /* localStorage.removeItem('loggedUser');
        window.location.href = '/user/login'; */
    }

    return (
        <Navbar expand="lg" variant="light" bg="light">
            <Container>
                <Link to="/">
                    <Image src={require('../../images/logo.png')} width="150" height="60" className="d-inline-block align-top" alt=""></Image>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/forensic/dashboard">Home</Nav.Link>
                        <Nav.Link as={Link} to="/forensic/evidence">Upload Evidence</Nav.Link>
                        <Nav.Link as={Link} to="/forensic/complaints">View Assigned Cases</Nav.Link>
                        <Button variant="outline-danger" onClick={logout}>Logout</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default ForensicHeader;
