import React from 'react';
import DogCard from "../components/DogCard"
import "../pages/DogDetails.css"

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
        console.log("PARAMMMS", this.props.match.params.id)
        return (
            <div >
                <div className="title">
                    {this.props.data.filter(data => data.breeds.length > 0).slice(0, 1).map(data => {
                        console.log("data pic", this.props.data)
                        return (

                            <div>{data.breeds[0].name}</div>

                        )
                    })}
                </div>


                <div className="dogBox">

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
                </div>
            </div>

        );
    }
}

export default DogDetails;