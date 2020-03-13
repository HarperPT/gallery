import React from 'react';
import '../../assets/css/carousel.css'

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 1,
            maxIndex: 3
        }
    }

    handleRight = () => {
        if (this.state.index >= this.state.maxIndex) {
            this.setState({ index: 1 });
            return;
        }
        this.setState({ index: this.state.index + 1 });

    }

    handleLeft = () => {
        if (this.state.index <= 1) {
            this.setState({ index: this.state.maxIndex });
            return;
        }
        this.setState({ index: this.state.index - 1 });
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            if (this.state.index >= this.state.maxIndex) {
                this.setState({ index: 1 });
                return;
            }
            this.setState({ index: this.state.index + 1 })
        }, 2000);
    }

    componentWillMount() {
        clearInterval(this.myInterval)
    }

    render() {
        return (
            < React.Fragment >
                <div className="carousel">
                    <button className="carousel_button btnLeft" onClick={() => this.handleLeft()}>
                        <span className="lnr lnr-chevron-left"></span>
                    </button>
                    <div className="carousel_track-container">
                        <ul className="carousel_track">
                            <li className="carousel_slide active">
                                <img src={require("../../assets/img/gallery0" + this.state.index + ".jpg")} alt="..." />
                            </li>
                        </ul>
                    </div>
                    <button className="carousel_button btnRight" onClick={() => this.handleRight()}>
                        <span className="lnr lnr-chevron-right"></span>
                    </button>
                    <div className="carousel_nav">
                        <button className={`carousel_indicator ${this.state.index === 1 ? "current-slide" : ""}`}></button>
                        <button className={`carousel_indicator ${this.state.index === 2 ? "current-slide" : ""}`}></button>
                        <button className={`carousel_indicator ${this.state.index === 3 ? "current-slide" : ""}`}></button>
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

export default Carousel;