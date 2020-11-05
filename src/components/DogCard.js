import React from "react";

import "../components/DogCard.css";

class DogCard extends React.Component {
  render() {
    return (
      <div className="container3">
        <img className="dogCardRandom" src={this.props.imgUrl} alt="specific type of dog"/>
        <div clasName="dogName">{this.props.name}</div>
      </div>
    );
  }
}

export default DogCard;
