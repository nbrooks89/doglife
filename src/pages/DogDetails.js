import React from "react";
import DogDetailsCard from "../components/DogDetailsCard";
import "../pages/DogDetails.css";
import { Container, Row, Col } from "reactstrap";

import DogCarousel from "../components/DogCarousel";

class DogDetails extends React.Component {
  state = {
<<<<<<< HEAD
    data:[],

   
=======
    currentImageId: "",
    heartEnabled: false,
  };

  isHeartEnabled = () => {
    const dogsWithBreed = this.props.data.filter(
      (data) => data.breeds.length > 0
    );
    if (dogsWithBreed.length === 0) return "";
    const dog = dogsWithBreed[0];
    const dogId = dog.id;
    const favoritesImageIds = this.props.favorites.map((el) => el.image_id);
    const imgIdMatchesFavId = favoritesImageIds.find((el) => el === dogId);
    console.log("IDMATCH", imgIdMatchesFavId);
    console.log("FavArray", favoritesImageIds);
    return imgIdMatchesFavId !== undefined;
  };

  setCurrentImageId = (currentImageId) => {
    this.setState({ currentImageId });
>>>>>>> 654f91b91deec5604d43c22e650bd8e14e7be400
  };

  handleGetRequest = async () => {
    const response = await fetch(
      `https://api.thedogapi.com/v1/images/search?order=ASC&limit=20&breed_id=${this.props.match.params.id}`,
      {
        method: "GET",
        header: "x-api-key: f07ac2f8-e658-414a-aff2-971a64483ffe",
      }
    );
    const data = await response.json();
<<<<<<< HEAD
    console.log("staatatata", data);
=======

>>>>>>> 654f91b91deec5604d43c22e650bd8e14e7be400
    this.props.setData(data);
    this.setState({data:data})
  };

<<<<<<< HEAD
  
  componentDidMount() {
    this.handleGetRequest();
    console.log()
   
=======
  handleClickFavorite = async () => {
    if (!this.isHeartEnabled()) {
      const response = await fetch("https://api.thedogapi.com/v1/favourites", {
        method: "POST",

        headers: {
          "x-api-key": "f07ac2f8-e658-414a-aff2-971a64483ffe",
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          image_id: this.props.data[0].id,
          sub_id: "user-123",
        }),
      });

      const fav = await response.json();

      this.props.setFavorites([...this.props.favorites, fav]);

      console.log(fav);
    } else {
      const response = await fetch(
        `https://api.thedogapi.com/v1/favourites/${this.state.currentImageId}`,
        {
          method: "DELETE",

          headers: {
            "x-api-key": "f07ac2f8-e658-414a-aff2-971a64483ffe",
          },
        }
      );
      const data = await response.json();
      console.log("delete", data);
      const currentImageIndex = this.props.favorites.findIndex((el) => {
        return el.image_id === this.state.currentImageId;
      });
      this.props.setFavorites(this.props.favorites.slice(currentImageIndex, 1));
    }
  };

  async componentDidMount() {
    await this.handleGetRequest();
    this.setCurrentImageId(this.props.data[0].id);
>>>>>>> 654f91b91deec5604d43c22e650bd8e14e7be400
  }
  render() {
<<<<<<< HEAD
  
=======
    console.log("dogdata", this.state.currentImageId);
    console.log("currentImageId", this.state.currentImageId);
>>>>>>> 654f91b91deec5604d43c22e650bd8e14e7be400
    const dogsWithBreed = this.props.data.filter(
      (data) => data.breeds.length > 0
    );
    const id = this.props.data.map(
      data => data.id
    )
    if (dogsWithBreed.length === 0) return "";

    const dog = dogsWithBreed[0];
    const breedName = dog.breeds[0].name;
    const temperament = dog.breeds[0].temperament;
    const bred_for = dog.breeds[0].bred_for;
    const life_span = dog.breeds[0].life_span;
    const weight = dog.breeds[0].weight.imperial;
    const heartEnabled = this.isHeartEnabled();

   

    
    return (
      <div>
        <div className="title">
          <div>{breedName}</div>
          <div>{id}</div>
        </div>
        <Container>
          <Row>
            <Col md="7">
              <div>
                {this.props.data.length === 1 ? (
                  <DogDetailsCard
                 
                    imgUrl={this.props.data[0].url}
<<<<<<< HEAD
                    id={this.props.data[0].id}
                    favorites={this.props.favorites}
                   />
=======
                    Clicked={this.handleClickFavorite}
                    heart={heartEnabled}
                  />
>>>>>>> 654f91b91deec5604d43c22e650bd8e14e7be400
                ) : (
                  <DogCarousel
                    imgUrls={this.props.data}
                    id={this.props.data[0].id}
                    showDogs={this.props.showDogs}
<<<<<<< HEAD
                    favorites={this.props.favorites}
                   
=======
                    Clicked={this.handleClickFavorite}
                    heart={heartEnabled}
                    setCurrentImageId={this.setCurrentImageId}
>>>>>>> 654f91b91deec5604d43c22e650bd8e14e7be400
                  />
                )}
              </div>
            </Col>
            <Col md="5">
              <div className="text1">
                Temperament:<span className="text2"> {temperament}</span>
              </div>
              <div className="text1">
                Bred For:<span className="text2"> {bred_for}</span>
              </div>
              <div className="text1">
                Life Span:<span className="text2"> {life_span}</span>
              </div>
              <div className="text1">
                weight:<span className="text2"> {weight} pounds</span>
              </div>
            </Col>
          </Row>
        </Container>
<<<<<<< HEAD
            </div>
        );
    }
=======
      </div>
    );
  }
>>>>>>> 654f91b91deec5604d43c22e650bd8e14e7be400
}

   

export default DogDetails;
