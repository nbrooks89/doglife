import React from 'react';
import '../components/FavoritesCard.css'
class FavoritesCard extends React.Component {

    render() {
        return (
            <div className="container1">
                <img className="dogcard" src={this.props.imgUrl} />
                <button id={this.props.id} onClick={this.props.delete}>Delete</button>

            </div>
        );
    }
}

export default FavoritesCard;