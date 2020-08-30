import React from "react";
import FavoritesCard from "../components/FavoritesCard";

class Favorites extends React.Component {
  handleGetRequest = async () => {
    const response = await fetch(
      "https://api.thedogapi.com/v1/favourites?sub_id=user-123",
      {
        method: "GET",

        headers: {
          "x-api-key": "f07ac2f8-e658-414a-aff2-971a64483ffe",
        },
      }
    );
    const fav = await response.json();
    console.log("FAVorite", fav);
    console.log(fav);
    this.props.setFavorites(fav);
  };

  handleDelete = async (event) => {
    console.log("State", event.target.id);
    const response = await fetch(
      `https://api.thedogapi.com/v1/favourites/${event.target.id}`,
      {
        method: "DELETE",

        headers: {
          "x-api-key": "f07ac2f8-e658-414a-aff2-971a64483ffe",
        },
      }
    );
    const data = await response.json();
    console.log("FAVorite", data);
    this.handleGetRequest();
  };

  componentDidMount() {
    this.handleGetRequest();
  }
  render() {
    return (
      <>
        <div className="title">
          <div>Favorites</div>
        </div>
        <div className="dogBox">
          <div className="dogCardBorder">
            {this.props.favorites.map((fav) => (
              <FavoritesCard
                delete={this.handleDelete}
                id={fav.id}
                imgUrl={fav.image.url}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Favorites;
