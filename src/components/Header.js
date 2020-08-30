import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" className="color-nav">
        <Navbar.Brand>
          <Link to="/">
            <span className="Nav-Item">DOG LIFE</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/Breeds">
              <span className="Nav-Item">Breeds</span>
            </Nav.Link>
            <Nav.Link href="/Randomize">
              <span className="Nav-Item">Randomize</span>
            </Nav.Link>
            <Nav.Link href="/Favorites">
              <span className="Nav-Item">Favorites</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default Header;
