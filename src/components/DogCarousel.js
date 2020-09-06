import React from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";
import "../components/DogDetailsCard.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class DogCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.showArrows = false;
  }

  // toggleArrows(){
  //     const showArrows = this.state.showArrows
  //     this.setState({showArrows: !showArrows})
  // }

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
  }

  render() {
    const items = this.props.imgUrls;

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
    const slides = items.map((img) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={img.url}
        >
          <div className="container1">
            <img className="dogcard " src={img.url} />
            {button}
            {!this.props.showDogs && <div>{this.props.name}</div>}
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
