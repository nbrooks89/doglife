import React from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";
import "../components/DogDetailsCard.css";
<<<<<<< HEAD
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Favorites from "../pages/Favorites";

=======
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
>>>>>>> 654f91b91deec5604d43c22e650bd8e14e7be400
class DogCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 ,favorites:"" };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.showArrows = false;
  }


  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === this.props.imgUrls.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });

    this.props.setCurrentImageId(this.props.imgUrls[this.state.activeIndex].id);
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? this.props.imgUrls.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
    this.props.setCurrentImageId(this.props.imgUrls[this.state.activeIndex].id);
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
    this.props.setCurrentImageId(this.props.imgUrls[this.state.activeIndex].id);
<<<<<<< HEAD
  }

 
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
=======
>>>>>>> 654f91b91deec5604d43c22e650bd8e14e7be400
  }
  


  render() {
    const items = this.props.imgUrls;
<<<<<<< HEAD
 
    const { activeIndex } = this.state;
  
=======

    const { activeIndex } = this.state;
    console.log("active", this.state.activeIndex);
    let button;
    !this.props.heart
      ? (button = (
          <div
            className="button1"
            id={this.props.id}
            onClick={this.props.Clicked}
          >
            <FontAwesomeIcon icon={["far", "heart"]} color="white" size="3x" />{" "}
          </div>
        ))
      : (button = (
          <div
            className="button1"
            id={this.props.id}
            onClick={this.props.Clicked}
          >
            <FontAwesomeIcon icon="heart" size="3x" color="red" />
          </div>
        ));
>>>>>>> 654f91b91deec5604d43c22e650bd8e14e7be400
    const slides = items.map((img) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={img.url}
        >
          <div className="container1">
            <img className="dogcard " src={img.url} />
<<<<<<< HEAD
           
            {this.props.favorites.includes(i) ? 
              <div  onClick={() => this.addFav({ items,i})} > <FontAwesomeIcon icon={faHeart} size="2x"  />  </div> 
              :
              <div onClick={() => this.addFav({ items,i})}><FontAwesomeIcon icon={faHeart} size="2x" color="red" /></div>
            }
  
             
=======
            {button}
            {!this.props.showDogs && <div>{this.props.name}</div>}
>>>>>>> 654f91b91deec5604d43c22e650bd8e14e7be400
          </div>
        </CarouselItem>
      );
    });

    return (
      <div>
        {
          <Carousel
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
            interval={false}
          >
            {slides}
            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={this.previous}
            />
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={this.next}
            />
          </Carousel>
        }
      </div>
    );
  }
}

export default DogCarousel;
