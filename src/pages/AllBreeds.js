import React from 'react';
import DogCard from "../components/DogCard"
import DropDown from "../components/DropDown"
import "../pages/AllBreeds.css"
import DogDetailsCard from "../components/DogDetailsCard"
import { Container, Row, Col } from 'reactstrap';
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
                        <Col md="6"><DogDetailsCard data={this.props.data} showDogs={this.props.showDogs}
                            imgUrl={dog.url} /></Col>


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