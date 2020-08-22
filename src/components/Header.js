import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import "./Header.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom"
import { LinkContainer } from "react-router-bootstrap";






class Header extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>
                    <Link to="/">DOG LIFE</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">

                        <Nav.Link href="/Breeds">Breeds</Nav.Link>
                        <Nav.Link href="/Randomize">Randomize</Nav.Link>
                        <Nav.Link href="/Favorites">Favorites</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
export default Header;
