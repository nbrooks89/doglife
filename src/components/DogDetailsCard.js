import React from "react";

import "../components/DogDetailsCard.css";

class DogDetailsCard extends React.Component {
  render() {
    return (
      <div className="container1">
        <img className="dogcard" src={this.props.imgUrl} alt="a dog" />
        {!this.props.showDogs && (<div>{this.props.name}</div>)}
      </div>
    );
  }
}

export default DogDetailsCard;
