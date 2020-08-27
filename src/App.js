import React from 'react';
import AllBreeds from "./pages/AllBreeds"
import Header from "./components/Header"
import Randomize from "./pages/Randomize"
import Favorites from "./pages/Favorites"
import DogDetails from "./pages/DogDetails"


import DropDown from "./components/DropDown"
import { Router, Route, Switch, } from "react-router-dom"

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



// const API_KEY = 'f07ac2f8-e658-414a-aff2-971a64483ffe'

class App extends React.Component {
  state = {
    showDogs: false,
    data: [],
    favorites: [],

  }
  setData = (data) => {
    this.setState({ data: data })

  }

  setShowDogs = (showDogs) => {
    this.setState({ showDogs })

  }
  setFavorites = (favorites) => {
    this.setState({ favorites: favorites })

  }


  render() {
    console.log("STATE_DATA", this.state.favorites)

    return (
      <React.Fragment >

        <Header />


        <Route exact path="/" render={() => <Randomize data={this.state.data} setData={this.setData} />} />
        <Route path="/breeds" render={() => <AllBreeds data={this.state.data} showDogs={this.state.showDogs} setData={this.setData} setShowDogs={this.setShowDogs} favorites={this.state.favorites} setFavorites={this.setFavorites} />} />
        <Route path="/Randomize" render={() => <Randomize data={this.state.data} setData={this.setData} />} />
        <Route path="/Favorites" render={(routerProps) => <Favorites match={routerProps.match} favorites={this.state.favorites} setFavorites={this.setFavorites} data={this.state.data} setData={this.setData} />} />
        <Route path="/DogDetails/:id" render={(routerProps) => <DogDetails match={routerProps.match} favorites={this.state.favorites} setFavorites={this.setFavorites} data={this.state.data} setData={this.setData} />} />



      </React.Fragment>




    );
  }
}

export default App;
