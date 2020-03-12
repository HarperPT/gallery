import React from 'react'
import Carousel from '../components/Carousel'
import Menu from '../components/Menu'
import Card from '../components/Card'
import Video from '../components/Video'


class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div >
                    <Menu></Menu>
                    <div className="container">
                        <section id="section-title" className="wrapper">
                            <h1 > EC1 GALLEY</h1>
                        </section>

                        <section id="section-carousel" className="wrapper">
                            <div>
                                <Carousel></Carousel>
                                <h3>Anselm Kiefer: Walhalla</h3>
                                <h4>Until 12 February 2017, Bermondsey</h4>
                            </div>
                            <hr />
                        </section>

                        <section id="section-news" className="wrapper">
                            <div>
                                <h3>News & Events <span style={{ float: "right" }}>View all</span></h3>
                                {this.props.Cards.map(info => <Card key={info.id} Cards={info}></Card>)}
                            </div>
                            <hr />
                        </section>
                        <section id="section-channel" className="wrapper">
                            <div>
                                <h3>Channel<span style={{ float: "right" }}>View all</span></h3>
                                {/* <Video videoId="vlm5tgistqA"></Video> */}
                                <h3>Anselm Kiefer</h3>
                                <h4>In conversation with Tim Marlow
                            In the Auditorium</h4>
                                <h4>In this film Anselm Kiefer discusses his work and his exhibition ‘Walhalla’ at White Cube Bermondsey with Tim Marlow.</h4>
                            </div>
                            <hr />
                        </section>

                        <section id="section-artists" className="wrapper ">
                            <div>
                                <h3>Artists<span style={{ float: "right" }}>View all</span></h3>
                                <div className="artists-block">
                                    <div className="col-8">
                                        {this.props.Artists.map((people, index) => <p key={index} className="col-4">{people.name}</p>)}
                                    </div>
                                    <div className="col-4">
                                        <img src={require("../assets/img/gallery05.jpg")} alt="..." />
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="section-bottom">
                            <div class="otherUl" ><ul >
                                <li>Newsletter</li>
                                <li>Contact</li>
                                <li>Press rooms</li>
                                <li style={{ float: "right", display: "flex" }}>
                                    <img src={require("../assets/img/icon/facebook.png")} alt="facebook" />
                                    <img src={require("../assets/img/icon/twitter.png")} alt="twitter" />
                                    <img src={require("../assets/img/icon/youtube.png")} alt="youtube" />
                                </li></ul>
                                <article>
                                    EC1 GALLERY
                                    344 Clerkenwell Road
                                    London
                                    EC1 5RS
                                    Tel +44 (0) 207 123 4567
                                </article>
                            </div>
                        </section>


                        <div>
                            <ul className="footer-ul" >
                                <li>© 2017 EC1 GALLERY</li>
                                <span style={{ float: "right" }}>
                                    <ul className="footer-ul">
                                        <li>Cookie policy</li>
                                        <li>Terms of sale</li>
                                        <li>Privacy notice</li>
                                    </ul>
                                </span>

                            </ul>
                        </div>



                    </div>
                </div>
            </React.Fragment>);
    }
}

export default Home;