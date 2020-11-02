import React from "react";
import FavoritesCard from "../components/FavoritesCard";
import "../pages/Randomize.css";
class Favorites extends React.Component {
 
  addFav(props:any){ 
    let array = this.state.favorites;
    let addArray = true;
    array.map((item: any, key:number) => {
      if(item === props.i){
      array.splice(key,1);
      addArray = false;
      }
    })
    if (addArray) {
      array.push(props.i)
    }
    this.setState({favorites:[...array]})
    localStorage.setItem("favorites", JSON.stringify(this.state.favorites))

    const storage = localStorage.getItem("favItem" + (props.i) || "0")
    if(storage == null){
      localStorage.setItem(("favItem" + (props.i)), JSON.stringify(props.items));
    }else{
      localStorage.removeItem("favItem" + (props.i))
    }
  }

  render() {
    return (
      <>
        <div className="title">
          <div>Favorites</div>
        </div>
        <div className="dogBox">
          <div className="dogCardBorder">
            {this.props.favorites.map((fav) => (
              <FavoritesCard
                delete={this.handleDelete}
                id={fav.id}
                imgUrl={fav.image.url}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Favorites;
