import React from "react";

import "../components/DogCard.css";

class DogCard extends React.Component {
  render() {
    return (
      <div className="container3">
        <img className="dogCardRandom" src={this.props.imgUrl} />
        <div clasName="dogName">{this.props.name}</div>
      </div>
    );
  }
}

export default DogCard;
