import React from "react";

import "../components/DogDetailsCard.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class DogDetailsCard extends React.Component {
  render() {
    let button;
<<<<<<< HEAD
    this.props.addfavorite ?
        button = <div className="button2" id={this.props.id} onClick={this.props.Clicked}> <FontAwesomeIcon icon={faHeart} size="2x" />  </div> :

        button = <div className="button2" id={this.props.id} onClick={this.props.Clicked}><FontAwesomeIcon icon={faHeart} size="2x" color="red" /></div>
=======
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
>>>>>>> 654f91b91deec5604d43c22e650bd8e14e7be400

    return (
      <div className="container1">
        <img className="dogcard" src={this.props.imgUrl} />
        {!this.props.showDogs && (<div>{this.props.name}</div>)}
                <button onClick={this.props.Clicked}>Favorite</button>
        {button}
      </div>
    );
  }
}

export default DogDetailsCard;
