import React from "react";

import Header from "./components/Header";
import Randomize from "./pages/Randomize";
import Favorites from "./pages/Favorites";
import DogDetails from "./pages/DogDetails";
import Home from "./pages/Home";
import { Route, withRouter } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DropDown from "./components/DropDown";

// const API_KEY = 'f07ac2f8-e658-414a-aff2-971a64483ffe'

class App extends React.Component {
  state = {
    showDogs: false,
    data: [],
    favorites: [],
    addToFavorites: false,
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
  setAddToFavorites = () => {
    this.setState({ addToFavorites: !this.state.addToFavorites });
  };

  render() {
    console.log("addtofavorites", this.state.addToFavorites);
    return (
      <React.Fragment>
        <Header
          data={this.state.data}
          setShowDogs={this.setShowDogs}
          showDogs={this.state.showDogs}
          setData={this.setData}
        />

        <Route exact path="/" component={Home} />

        <Route
          path="/Randomize"
          render={() => (
            <Randomize data={this.state.data} setData={this.setData} />
          )}
        />

        <Route
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
        <Route
          path="/DogDetails/:id"
          render={(routerProps) => (
            <DogDetails
              match={routerProps.match}
              favorites={this.state.favorites}
              setFavorites={this.setFavorites}
              data={this.state.data}
              setData={this.setData}
              addToFavorites={this.state.addToFavorites}
              setAddToFavorites={this.setAddToFavorites}
            />
          )}
        />
      </React.Fragment>
    );
  }
}

export default App;
