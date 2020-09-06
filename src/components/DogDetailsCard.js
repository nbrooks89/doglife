import React from "react";

import "../components/DogDetailsCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

class DogDetailsCard extends React.Component {
  render() {
    let button;
    !this.props.heart
      ? (button = (
          <div
            className="button2"
            id={this.props.id}
            onClick={this.props.Clicked}
          >
            <FontAwesomeIcon className="button2" icon={faHeart} size="3x" />{" "}
          </div>
        ))
      : (button = (
          <div
            className="button2"
            id={this.props.id}
            onClick={this.props.Clicked}
          >
            <FontAwesomeIcon icon={faHeart} size="3x" color="red" />
          </div>
        ));

    return (
      <div className="container1">
        <div>
          <img className="dogcard" src={this.props.imgUrl} />

          {button}
        </div>
      </div>
    );
  }
}

export default DogDetailsCard;
