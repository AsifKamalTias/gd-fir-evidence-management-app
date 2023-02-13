import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container, Image } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar expand="lg" variant="light" bg="light">
            <Container>
                <Link to="/">
                    <Image src={require('../images/logo.png')} width="150" height="60" className="d-inline-block align-top" alt=""></Image>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/user/registration">Register</Nav.Link>
                        <NavDropdown title="Log In" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/user/login">User</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/police/login">Police Officer</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/forensic/login">Forensic Officer</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
