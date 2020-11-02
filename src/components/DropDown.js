import React from "react";
import "./DropDown.css";
import { Link, withRouter } from "react-router-dom";

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
    };
  }
  handleChange = async (event) => {
    console.log("EVENNNNNNT", event.target.name);
    const response = await fetch(
      `https://api.thedogapi.com/v1/images/search?order=ASC&limit=20&breed_id=${event.target.value}`,
      {
        method: "GET",
        header: "x-api-key: f07ac2f8-e658-414a-aff2-971a64483ffe",
      }
    );
    const data = await response.json();
    this.props.setData(data);
    this.props.setShowDogs(true);

    this.props.history.push(
      "/DogDetails/" + this.props.data[0].breeds[0].id * 1
    );
  };

  handleGetRequest = async () => {
    const response = await fetch(
      "https://api.thedogapi.com/v1/breeds?attach_breed=0",
      {
        method: "GET",
        header: "x-api-key: f07ac2f8-e658-414a-aff2-971a64483ffe",
      }
    );
    const data = await response.json();
    
    this.setState({ dogs: data });
  };

  componentDidMount() {
    this.handleGetRequest();
  }

  render() {
    return (
      <div className="dropContainer">
        <div className="dropdown">
          <div className="select">
            <select value={this.state.dogs.value} onChange={this.handleChange}>
              <option value="" disabled selected>
                Dog Breeds
              </option>
              {this.state.dogs.map((dog) => (
                <option
                  onChange={this.handleChange}
                  key={dog.index}
                  value={dog.id}
                  name={dog.name}
                >
                  {dog.name}
                </option>
              ))}
              <option value="">Durr</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(DropDown);
