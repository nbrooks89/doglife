import React from 'react';
import AllBreeds from "./pages/AllBreeds"
import Header from "./components/Header"
import Randomize from "./pages/Randomize"
import Favorites from "./pages/Favorites"
import DropDown from "./components/DropDown"
import { Router, Route, Switch } from "react-router-dom"

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



// const API_KEY = 'f07ac2f8-e658-414a-aff2-971a64483ffe'

class App extends React.Component {
  state = {

    data: []
  }
  setData = (data) => {
    this.setState({ data: data })

  }

  render() {
    console.log("STATEDATAAPP", this.state.data)
    return (
      <div>

        <Header />


        <Route exact path="/" render={() => <Randomize data={this.state.data} setData={this.setData} />} />
        <Route path="/breeds" render={() => <AllBreeds data={this.state.data} setData={this.setData} />} />
        <Route path="/Randomize" render={() => <Randomize data={this.state.data} setData={this.setData} />} />
        <Route path="/Favorites" component={Favorites} />



      </div>




    );
  }
}

export default App;
