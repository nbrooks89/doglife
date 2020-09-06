import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../components/DogCard.css";

class FavoritesCard extends React.Component {
  render() {
    return (
      <div className="container4">
        <img className="dogCardRandom" src={this.props.imgUrl} />
        <div clasName="dogName">{this.props.name}</div>
        <div
          className="deleteButton"
          id={this.props.id}
          onClick={this.props.delete}
        >
          X
        </div>
      </div>
    );
  }
}

export default FavoritesCard;
