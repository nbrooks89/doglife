import React from "react";
import { Nav, Navbar} from "react-bootstrap";

import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink } from "react-router-dom";
import DropDown from "../components/DropDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

class Header extends React.Component {
  render() {
    return (
      <Navbar navbar-expand className="color-nav">
        <Navbar.Brand>
          <Link to="/">
            <span className="Nav-Item "><FontAwesomeIcon icon={faPaw} size="2x" color="black" /></span>
          </Link>
        </Navbar.Brand>
       
        <Nav className="ml-auto">
         
            
          <DropDown
            data={this.props.data}
            setData={this.props.setData}
            showDogs={this.props.showDogs}
            setShowDogs={this.props.setShowDogs}
          />
      
            <NavLink to="/Randomize" activeClassName="active">
              <span className="Nav-Item">Randomize</span>
            </NavLink>
           
          
        </Nav>
      </Navbar>
    );
  }
}
export default Header;
