import React from 'react'
import Card from '../components/Card'

class Home extends React.Component {
    state = {}
    render() {
        return (<React.Fragment>
            <div className="container">
                <div className="wrapper">
                    <section> EC1 GALLEY</section>
                    <section>
                        <h5>News & Events</h5>
                        {this.props.Cards.map(info => <Card key={info.id} Cards={info}></Card>)}</section>

                </div>
            </div>


        </React.Fragment>);
    }
}

export default Home;