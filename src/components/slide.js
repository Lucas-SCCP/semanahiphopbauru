import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Photo01 from '../images/foto_1.jpg';
import Photo02 from '../images/foto_2.jpg';

class Slide extends Component {

    state = {
        slideHeight: null,
        images: [
            Photo01,
            Photo02
        ]
    }

    componentDidMount() {
        this.setSlideHeight()
    }

    setSlideHeight() {
        var headerHeight = this.getElementHeight('header');
        var menuHeight = this.getElementHeight('menu');
        this.slideHeightCalculate(headerHeight, menuHeight);
    }

    slideHeightCalculate(logoHeight, menuHeight) {
        var slideHeight = window.innerHeight - logoHeight - menuHeight;
        this.setState({
            slideHeight: slideHeight
        });
    }

    getElementHeight = (id) => {
        const element = document.getElementById(id);
        return element ? element.offsetHeight : 0;
    }

    render() {
        const { images } = this.state;

        return (
            <Carousel id="foto" class="foto" style={{ height: this.state.slideHeight }}>
                {images.map((imageUrl, index) => (
                    <Carousel.Item key={index} style={{ height: this.state.slideHeight }}>
                    <img
                        className="d-block w-100 fotoSlide"
                        src={imageUrl}
                        alt={`Imagem ${index + 1}`}
                    />
                    </Carousel.Item>
                ))}
            </Carousel>
        );
    }
};

export default Slide;
