import React from 'react';
import DogCard from "../components/DogCard"
import DropDown from "../components/DropDown"
import "../pages/AllBreeds.css"
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
        console.log("ALLBREEDS", data.url)

        this.props.setData(data)

    }




    componentDidMount() {
        this.handleGetRequest()
    }

    render() {


        return (
            <div>
                <div className="title">
                    {this.props.data.filter(data => data.breeds.length > 0).slice(0, 1).map(data => {
                        console.log("data pic", this.props.data)
                        return (
                            this.props.showDogs ? <div>{data.breeds[0].name}</div> : <div>Dog Breeds</div>
                        )
                    })}

                    < DropDown data={this.state.data} setData={this.props.setData} setShowDogs={this.props.setShowDogs} />
                </div>
                <div className="dogBox">



                    {this.props.showDogs && (<div className="dogCardBorder">
                        {this.props.data.filter(data => data.breeds.length > 0).slice(0, 15).map(data => {
                            console.log("data pic", this.props.data)
                            return (

                                <div>


                                    < DogCard showDogs={this.props.showDogs} imgUrl={data.url} name={data.breeds[0].name} />


                                </div>

                            )
                        })}
                    </div>)}
                </div>
            </div>

        );
    }
}

export default AllBreeds;