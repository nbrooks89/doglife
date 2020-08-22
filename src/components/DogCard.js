import React from 'react';

import '../components/DogCard.css'





class DogCard extends React.Component {

    render() {
        return (
            <div className="container1">
                <img className="dogcard" src={this.props.imgUrl} />

            </div>
        );
    }
}

export default DogCard;
