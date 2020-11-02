import React from "react";

import "../components/DogDetailsCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

class DogDetailsCard extends React.Component {
  render() {
    let button;
    this.props.addfavorite ?
        button = <div className="button2" id={this.props.id} onClick={this.props.Clicked}> <FontAwesomeIcon icon={faHeart} size="2x" />  </div> :

        button = <div className="button2" id={this.props.id} onClick={this.props.Clicked}><FontAwesomeIcon icon={faHeart} size="2x" color="red" /></div>

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
