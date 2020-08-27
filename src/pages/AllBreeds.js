import React from 'react';
import DogCard from "../components/DogCard"
import DropDown from "../components/DropDown"
import "../pages/AllBreeds.css"
import DogDetailsCard from "../components/DogDetailsCard"
import { Container, Row, Col } from 'reactstrap';
import DogCarousel from '../components/DogCarousel';
class AllBreeds extends React.Component {
    state = {

        data: []
    }

    handleGetRequest = async () => {

        const response = await fetch("https://api.thedogapi.com/v1/images/search?&order=ASC&limit=1", {
            method: 'GET',
            header:
                "x-api-key: f07ac2f8-e658-414a-aff2-971a64483ffe"

        })
        const data = await response.json()


        this.props.setData(data)

    }

    handlePostRequest = async () => {

        const response = await fetch("https://api.thedogapi.com/v1/favourites", {
            method: 'POST',

            headers:
            {
                "x-api-key": "f07ac2f8-e658-414a-aff2-971a64483ffe",
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                "image_id": this.props.data[0].id,
                "sub_id": "user-123"
            })



        })
        const fav = await response.json()
        console.log("FAV", fav)

        this.props.setFavorites(fav)

    }





    componentDidMount() {
        this.handleGetRequest()
    }

    render() {
        console.log("props", this.props.data)
        const dogsWithBreed = this.props.data.filter(data => data.breeds.length > 0);
        if (dogsWithBreed.length == 0) return "";
        const dog = dogsWithBreed[0];
        const breedName = dog.breeds[0].name;
        const temperament = dog.breeds[0].temperament;
        const bred_for = dog.breeds[0].bred_for;
        const life_span = dog.breeds[0].life_span;
        const weight = dog.breeds[0].weight.imperial;

        return (
            <div>
                <div className="title">

                    {this.props.showDogs ? <div>{breedName}</div> : <div>Dog Breeds</div>}


                    < DropDown data={this.state.data} setData={this.props.setData} setShowDogs={this.props.setShowDogs} />
                </div>
                {this.props.showDogs && <Container>

                    <Row>
                        <Col md="6">
                            {this.props.data.length == 1 ?
                                <DogDetailsCard imgUrl={this.props.data[0].url} showDogs={this.props.showDogs} Clicked={this.handlePostRequest} /> :
                                <DogCarousel imgUrls={this.props.data} showDogs={this.props.showDogs} Clicked={this.handlePostRequest} />
                            }
                        </Col>
                        <Col md="6">
                            <div className="text1">
                                Temperament:<span className="text2">  {temperament}</span>
                            </div>
                            <div className="text1">
                                Bred For:<span className="text2">  {bred_for}</span>
                            </div>
                            <div className="text1">
                                Life Span:<span className="text2">  {life_span}</span>
                            </div>
                            <div className="text1">
                                weight:<span className="text2">  {weight} pounds</span>
                            </div>
                        </Col>
                    </Row>
                </Container>}

            </div>

        );
    }
}

export default AllBreeds;