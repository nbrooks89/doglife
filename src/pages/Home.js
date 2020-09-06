import React, { useEffect, useState } from "react";
import "../components/DogCard.css";
import "../pages/Home.css";
import Dog1 from "../assets/dog1.jpeg";
import Dog2 from "../assets/dog2.jpeg";
import Dog5 from "../assets/dog5.jpeg";
import Dog4 from "../assets/dog4.jpeg";
import { Container, Row, Col } from "reactstrap";

function Home() {
  const dogImgArray = [Dog1, Dog2, Dog4, Dog5];

  const [dogImg, setDogImg] = useState("");
  // setDogImg(dogImgArray[Math.floor(Math.random() * dogImgArray.length - 1)]);

  useEffect(() => {
    setDogImg(dogImgArray[Math.floor(Math.random() * dogImgArray.length)]);
  }, []);
  //   console.log(Math.floor(Math.random() * dogImgArray.length));
  //   dogImg = dogImgArray[Math.floor(Math.random() * dogImgArray.length)];
  //   // let dogPicIndex = Math.floor(Math.random() * dogImgArray.length);
  //   // dogImg = dogImgArray[dogPicIndex];
  //   // return dogImg;
  //   console.log(dogImg);

  return (
    <div className="homeContainer">
      <h1> Dog Life</h1>
      <h5>Learn all about our furry friends!</h5>
      <div className="dogContainer">
        <img className="dogImg" src={dogImg} alt="Dog one" />
      </div>
    </div>
  );
}

export default Home;
