import React from "react";

import "../components/DogDetailsCard.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class DogDetailsCard extends React.Component {
  render() {
    let button;
    !this.props.heart
      ? (button = (
          <div
            className="button1"
            id={this.props.id}
            onClick={this.props.Clicked}
          >
            <FontAwesomeIcon icon={["far", "heart"]} color="white" size="3x" />{" "}
          </div>
        ))
      : (button = (
          <div
            className="button1"
            id={this.props.id}
            onClick={this.props.Clicked}
          >
            <FontAwesomeIcon icon="heart" size="3x" color="red" />
          </div>
        ));

    return (
      <div className="container1">
        <img className="dogcard" src={this.props.imgUrl} />

        {button}
      </div>
    );
  }
}

export default DogDetailsCard;
