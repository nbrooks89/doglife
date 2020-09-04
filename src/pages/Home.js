import React from "react";
import "../components/DogCard.css";
import "../pages/Home.css";
import Dog1 from "../assets/dog1.jpeg";
import Dog2 from "../assets/dog2.jpeg";
import Dog5 from "../assets/dog5.jpeg";
import Dog4 from "../assets/dog4.jpeg";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <div className="dogDiv">
          <img className="dogImg" src={Dog1} alt="Dog one" />
          <img className="dogImg" src={Dog2} alt="Dog two" />
          <img className="dogImg" src={Dog5} alt="Dog five" />
          <img className="dogImg" src={Dog4} alt="Dog four" />
        </div>
      </div>
    );
  }
}

export default Home;
