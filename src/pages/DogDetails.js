import React from 'react';
import DogDetailsCard from "../components/DogDetailsCard"
import "../pages/DogDetails.css"
import { Container, Row, Col } from 'reactstrap';
import DogCard from "../components/DogCard"
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';


class DogDetails extends React.Component {
    state = {
        data: []

    }

    handleGetRequest = async () => {

        const response = await fetch(`https://api.thedogapi.com/v1/images/search?order=ASC&limit=20&breed_id=${this.props.match.params.id}`, {
            method: 'GET',
            header:
                "x-api-key: f07ac2f8-e658-414a-aff2-971a64483ffe"

        })
        const data = await response.json()
        console.log("ALLBREEDS", data)

        this.props.setData(data)

    }




    componentDidMount() {
        this.handleGetRequest()


    }

    render() {
        // console.log("STATEDATA", this.state.data)

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
                    <div>{breedName}</div>
                </div>


                <Container>

                    <Row>
                        <Col md="6">

                            {this.props.data.map(data => {

                                return (

                                    <div>
                                        <DogDetailsCard showDogs={this.props.showDogs}
                                            imgUrl={data.url} />


                                    </div>

                                )
                            })}</Col>


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
                </Container>



                {/* <div className="dogBox">

                    <div className="dogCardBorder">
                        {this.props.data.filter(data => data.breeds.length > 0).map(data => {
                            console.log("data pic", this.props.data)
                            return (

                                <div>
                                    < DogCard showDogs={this.props.showDogs} imgUrl={data.url} />


                                </div>

                            )
                        })}
                    </div>
                </div> */}
            </div>

        );
    }
}

export default DogDetails;