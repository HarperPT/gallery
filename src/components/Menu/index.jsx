import React from 'react';
import '../../assets/css/menu.css'

class Menu extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="nav">
                    <ul>
                        <li><a href="#">EC1 GALLEY</a></li>
                        <li className="menu-item"><a href="#">Home</a></li>
                        <li className="menu-item"><a href="#">News</a></li>
                        <li className="menu-item"><a href="#">Channel</a></li>
                        <li className="menu-item"><a href="#">Artists</a></li>
                        <li id="btn-drop-menu" style={{ float: "right" }}>
                            <a type="button" className="active" href="#"><label for="chk-menu" className="lnr lnr-menu"></label></a>
                        </li>
                    </ul>
                </div>
                <input type="checkbox" id="chk-menu" role="button" />
                <div class="content">
                    <ul>
                        <li className="drop-item"><a href="#">Home</a></li>
                        <li className="drop-item"><a href="#">News</a></li>
                        <li className="drop-item"><a href="#">Channel</a></li>
                        <li className="drop-item"><a href="#">Artists</a></li>
                    </ul>
                </div>

            </React.Fragment>
        );
    }
}

export default Menu;