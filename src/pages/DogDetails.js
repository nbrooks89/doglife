import React from "react";
import DogDetailsCard from "../components/DogDetailsCard";
import "../pages/DogDetails.css";
import { Container, Row, Col } from "reactstrap";

import DogCarousel from "../components/DogCarousel";

class DogDetails extends React.Component {
  state = {
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

    this.props.setData(data);
  };

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
  }

  render() {
    console.log("dogdata", this.state.currentImageId);
    console.log("currentImageId", this.state.currentImageId);
    const dogsWithBreed = this.props.data.filter(
      (data) => data.breeds.length > 0
    );
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
        </div>

        <Container>
          <Row>
            <Col md="7">
              <div>
                {this.props.data.length === 1 ? (
                  <DogDetailsCard
                    imgUrl={this.props.data[0].url}
                    Clicked={this.handleClickFavorite}
                    heart={heartEnabled}
                  />
                ) : (
                  <DogCarousel
                    imgUrls={this.props.data}
                    showDogs={this.props.showDogs}
                    Clicked={this.handleClickFavorite}
                    heart={heartEnabled}
                    setCurrentImageId={this.setCurrentImageId}
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
      </div>
    );
  }
}

export default DogDetails;
