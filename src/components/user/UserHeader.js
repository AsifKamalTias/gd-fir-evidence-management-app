import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container, Image } from 'react-bootstrap';

const UserHeader = () => {
    return (
        <Navbar expand="lg" variant="light" bg="light">
            <Container>
                <Link to="/">
                    <Image src={require('../../images/logo.png')} width="150" height="60" className="d-inline-block align-top" alt=""></Image>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/user/dashboard">Home</Nav.Link>
                        <Nav.Link as={Link} to="/user/evidence">Upload Evidence</Nav.Link>
                        <Nav.Link as={Link} to="/user/track/fir">Track Complaint</Nav.Link>
                        <NavDropdown title="Register Complaints" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/user/gd">GD</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/user/fir">FIR</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/user/login">Log Out</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default UserHeader;
