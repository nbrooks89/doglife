import React from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
} from 'reactstrap';
import '../components/DogCarousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import { faHeart } from "@fortawesome/free-solid-svg-icons";





class DogCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
        this.showArrows = false

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
        const nextIndex = this.state.activeIndex === this.props.imgUrls.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
        console.log(this.props.imgUrls)
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.props.imgUrls.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const items = this.props.imgUrls
        const { activeIndex } = this.state;
        console.log("IMGEURLS", items)
        const slides = items.map((img) => {
            return (
                <CarouselItem

                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={img.url}
                >
                    <div className="container1">
                        <div className="button3" onClick={this.props.Clicked}><FontAwesomeIcon icon={faHeart} size="2x" /> </div>
                        <img className="dogcard" src={img.url} />
                        {!this.props.showDogs && (<div>{this.props.name}</div>)}



                    </div>

                </CarouselItem>
            );
        });

        return (
            <div>

                {<Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                    interval={false}
                >

                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                    {slides}
                    <CarouselControl direction='prev' directionText='Previous' onClickHandler={this.previous} />
                    <CarouselControl direction='next' directionText='Next' onClickHandler={this.next} />
                </Carousel>}
            </div>
        );
    }
}

export default DogCarousel;