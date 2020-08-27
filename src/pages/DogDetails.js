import React from 'react';
import DogDetailsCard from "../components/DogDetailsCard"
import "../pages/DogDetails.css"
import { Container, Row, Col } from 'reactstrap';
import DogCard from "../components/DogCard"
import DogCarousel from '../components/DogCarousel';



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
        console.log("ALLBREED", data[0].id)

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
        console.log(this.props.favorites)

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
        console.log("propsData", this.props.data)
        return (
            <div>
                <div className="title">
                    <div>{breedName}</div>
                </div>



                <Container>

                    <Row>
                        <Col md="6">



                            <div>
                                <DogCarousel imgUrls={this.props.data} Clicked={this.handlePostRequest} />



                            </div>


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