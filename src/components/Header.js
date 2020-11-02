import React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";

import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink } from "react-router-dom";
import DropDown from "../components/DropDown";

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="sm" className="color-nav">
        <Navbar.Brand>
          <Link to="/">
            <span className="Nav-Item ">DOG LIFE</span>
          </Link>
        </Navbar.Brand>
        <NavItem>
          <DropDown
            data={this.props.data}
            setData={this.props.setData}
            showDogs={this.props.showDogs}
            setShowDogs={this.props.setShowDogs}
          />
        </NavItem>
        <Nav className="ml-auto">
          <Navbar.Toggle aria-controls="responsive-navbar-nav " />

          <Navbar.Collapse
            id="responsive-navbar-nav "
            className="justify-content-end"
          >
            <NavLink to="/Randomize" activeClassName="active">
              <span className="Nav-Item">Randomize</span>
            </NavLink>
            <NavLink to="/Favorites" activeClassName="active">
              <span className="Nav-Item">Favorites</span>
            </NavLink>
          </Navbar.Collapse>
        </Nav>
      </Navbar>
    );
  }
}
export default Header;
