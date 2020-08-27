import React from 'react';

import '../components/DogCard.css'





class DogDetailsCard extends React.Component {



    render() {

        return (
            <div className="container1">
                <img className="dogcard" src={this.props.imgUrl} />
                {!this.props.showDogs && (<div>{this.props.name}</div>)}
                <button onClick={this.props.Clicked}>Favorite</button>
            </div>
        );
    }
}
export default DogDetailsCard