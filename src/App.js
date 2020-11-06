import React from "react";
import Header from "./components/Header";
import Randomize from "./pages/Randomize";
import DogDetails from "./pages/DogDetails";
import Home from "./pages/Home";
import { Route} from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faPaw} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
library.add( faTimes,faPaw);


class App extends React.Component {
  state = {
    showDogs: false,
    data: []
  };

  setData = (data) => {
    this.setState({ data: data });
  };

  setShowDogs = (showDogs) => {
    this.setState({ showDogs });
  };


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
              data={this.state.data}
              setData={this.setData}
            />
          )}
        />

        <Route
          path="/Randomize"
          render={() => (
            <Randomize data={this.state.data} setData={this.setData} />
          )}
        />
       </React.Fragment>
    );
  }
}

export default App;
