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
    this.props.history.push("/Breeds");
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
    console.log("breeds", data);
    this.setState({ dogs: data });
    console.log("DATAA", data);
  };

  componentDidMount() {
    this.handleGetRequest();
  }

  render() {
    console.log(this.state.dogs);

    return (
      <div className="dropContainer">
        <div className="dropdown">
          <div className="select">
            <select
              className="dropdown"
              value={this.state.dogs.value}
              onChange={this.handleChange}
            >
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
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(DropDown);
