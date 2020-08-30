import React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";

import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import DropDown from "../components/DropDown";

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
          <NavItem className="ml-auto drop">
            <span>
              <DropDown
                data={this.props.data}
                setData={this.props.setData}
                showDogs={this.props.showDogs}
                setShowDogs={this.props.setShowDogs}
              />
            </span>
          </NavItem>
          <Nav className="ml-auto">
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
