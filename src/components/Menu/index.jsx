import React from 'react';
import '../../assets/css/menu.css'

class Menu extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="nav">
                    <ul>
                        <li><a href="#">EC1 GALLEY</a></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Channel</a></li>
                        <li><a href="#">Artists</a></li>
                        <li style={{ float: "right" }}><a className="active" href="#"><span className="lnr lnr-menu"></span></a></li>
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

export default Menu;