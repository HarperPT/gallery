import React from 'react'
import Home from '../../layouts/Home'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            galleryCards: [
                {
                    id: "g01",
                    title: "Exhibition: He Xiangyu monograph released by Distanz", date: "From March 2016", imgSrc: "gallery01.jpg",
                    detail: `He Xiangyu and Liu Wei are among 
               74 international artists from 33 
               countries chosen to feature in the 
               Yinchuan Biennale 2016`},
                {
                    id: "g02",
                    title: "Exhibition: Runa Islam at SFMOMA, San Francisco", date: "From March 2016", imgSrc: "gallery02.jpg",
                    detail: `‘Verso’, SFMOMA’s solo 
                    presentation of Bangladeshi-born 
                    British artist Runa Islam, features 
                    the US premiere of Cabinet of 
                    Prototypes (2009-10)`
                },
                {
                    id: "g03",
                    title: "Preview: White Cube Mason’s Yard", date: "19 January 2017, 6 to 8pm", imgSrc: "gallery03.jpg",
                    detail: `Join us at Mason's Yard, London for 
                    the preview of the new Park Seo-Bo 
                    exhibition curated by Katharine 
                    Kostyál. Curated by Katharine 
                    Kostyál`
                },
            ]

        }
    }
    render() {
        return (
            <React.Fragment>
                <Home Cards={this.state.galleryCards}></Home>
            </React.Fragment>
        );
    }
}

export default App;