import React from 'react';
import '../../assets/css/carousel.css'

class Carousel extends React.Component {
    state = {}

    render() {
        return (
            < React.Fragment >
                <div className="carousel">
                    <button className="carousel_button btnLeft">
                        <span className="lnr lnr-chevron-left"></span>
                    </button>
                    <div className="carousel_track-container">
                        <ul className="carousel_track">
                            <li className="carousel_slide active">
                                <img src={require("../../assets/img/gallery01.jpg")} alt="..." />

                            </li>
                            <li className="carousel_slide">
                                <img src={require("../../assets/img/gallery02.jpg")} alt="..." />

                            </li>
                            <li className="carousel_slide">
                                <img src={require("../../assets/img/gallery03.jpg")} alt="..." />

                            </li>
                        </ul>
                    </div>
                    <button className="carousel_button btnRight">
                        <span className="lnr lnr-chevron-right"></span>
                    </button>
                    <div className="carousel_nav">
                        <button className="carousel_indicator current-slide"></button>
                        <button className="carousel_indicator"></button>
                        <button className="carousel_indicator"></button>
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

export default Carousel;