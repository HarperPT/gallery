import React from 'react';
import '../../assets/css/card.css'

class Card extends React.Component {
    state = {}

    render() {
        const gallery = this.props.Cards
        return (
            < React.Fragment >
                <div className="col-4 newsCard">
                    {/* <img src={require("../../assets/img/gallery01.jpg")} className="h-50 card-img-top img-fluid" alt="..." /> */}
                    <img src={require("../../assets/img/" + gallery.imgSrc)} className="h-50 card-img-top img-fluid" alt="..." />
                    <h1>{gallery.title}</h1>
                    <h2>{gallery.date}</h2>
                    <p>{gallery.detail}</p>
                </div>
            </React.Fragment >
        );
    }
}

export default Card;