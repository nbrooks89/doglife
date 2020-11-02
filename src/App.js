import React from "react";
import Header from "./components/Header";
import Randomize from "./pages/Randomize";
import Favorites from "./pages/Favorites";
import DogDetails from "./pages/DogDetails";
import Home from "./pages/Home";
import { Route, withRouter } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
library.add(faHeart, faHeartRegular, faTimes);
// const API_KEY = 'f07ac2f8-e658-414a-aff2-971a64483ffe'

class App extends React.Component {
  state = {
    showDogs: false,
    data: [],
    favorites: [],
<<<<<<< HEAD
    addToFavorites: false,

=======
>>>>>>> 654f91b91deec5604d43c22e650bd8e14e7be400
  };

  setData = (data) => {
    this.setState({ data: data });
  };

  setShowDogs = (showDogs) => {
    this.setState({ showDogs });
  };
  setFavorites = (favorites) => {
    this.setState({ favorites: favorites });
 
  };
<<<<<<< HEAD

  setAddToFavorites = (set) => {
    this.setState({ addToFavorites:  set})

  }

  handleGetRequest = async () => {
    const response = await fetch(
      "https://api.thedogapi.com/v1/favourites?sub_id=user-123",
      {
        method: "GET",

=======
  handleGetRequest = async () => {
    const response = await fetch(
      "https://api.thedogapi.com/v1/favourites?sub_id=user-123",
      {
        method: "GET",

>>>>>>> 654f91b91deec5604d43c22e650bd8e14e7be400
        headers: {
          "x-api-key": "f07ac2f8-e658-414a-aff2-971a64483ffe",
        },
      }
    );
    const fav = await response.json();
<<<<<<< HEAD
  
=======
    console.log("FAVorite", fav);
    console.log(fav);
>>>>>>> 654f91b91deec5604d43c22e650bd8e14e7be400
    this.setFavorites(fav);
  };
  componentDidMount() {
    this.handleGetRequest();
<<<<<<< HEAD
    console.log(this.state.data)
=======
>>>>>>> 654f91b91deec5604d43c22e650bd8e14e7be400
  }
  render() {
    return (
      <React.Fragment>
        <Header
          // history= {this.props.location.pathname}
          data={this.state.data}
          setShowDogs={this.setShowDogs}
          showDogs={this.state.showDogs}
          setData={this.setData}
        />

        <Route exact path="/" component={Home} />
        <Route
          path="/DogDetails/:id"
          render={(routerProps) => (
            <DogDetails
              match={routerProps.match}
              favorites={this.state.favorites}
              setFavorites={this.setFavorites}
              data={this.state.data}
<<<<<<< HEAD
              setData={this.setData} 
               addToFavorites={this.state.addToFavorites}
              setAddToFavorites={this.setAddToFavorites}
=======
              setData={this.setData}
>>>>>>> 654f91b91deec5604d43c22e650bd8e14e7be400
            />
          )}
        />

        <Route
          path="/Randomize"
          render={() => (
            <Randomize data={this.state.data} setData={this.setData} />
          )}
        />

        <Route
          exact
          path="/Favorites"
          render={(routerProps) => (
            <Favorites
              match={routerProps.match}
              favorites={this.state.favorites}
              setFavorites={this.setFavorites}
              data={this.state.data}
              setData={this.setData}
            />
          )}
        />
      </React.Fragment>
    );
  }
}

export default App;
