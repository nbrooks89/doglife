import React from "react";
import DogCard from "../components/DogCard";
import "../pages/Randomize.css";
import { Link } from "react-router-dom";
class Randomize extends React.Component {
  state = {};

  handleGetRequest = async () => {
    const response = await fetch(
      "https://api.thedogapi.com/v1/images/search?&order=ASC&limit=30",
      {
        method: "GET",
        header: "x-api-key: f07ac2f8-e658-414a-aff2-971a64483ffe",
      }
    );
    const data = await response.json();

    this.props.setData(data);
  };

  handleOnClick = async (event) => {
    const response = await fetch(
      "https://api.thedogapi.com/v1/images/search?&order=ASC&limit=30",
      {
        method: "GET",
        header: "x-api-key: f07ac2f8-e658-414a-aff2-971a64483ffe",
      }
    );
    const data = await response.json();

    this.props.setData(data);
  };

  componentDidMount() {
    this.handleGetRequest();
  }

  render() {
    return (
      <div>
        <div className="title">
          <div>Dog Shuffle</div>
          <button onClick={this.handleOnClick}>click</button>
        </div>
        <div className="dogBox">
          <div className="dogCardBorder">
            {this.props.data
              .filter((data) => data.breeds.length > 0)
              .slice(0, 6)
              .map((data) => {
                return (
                  <>
                    <Link to={"/DogDetails/" + data.breeds[0].id}>
                      {" "}
                      <DogCard imgUrl={data.url} name={data.breeds[0].name} />
                    </Link>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default Randomize;
