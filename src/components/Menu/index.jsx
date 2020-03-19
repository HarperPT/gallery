import React from 'react';
import '../../assets/css/menu.css'

class Menu extends React.Component {

    handleScrollToElement = (sectionId) => {
        let currentSection = document.getElementById(sectionId);
        currentSection.scrollIntoView();
    }

    render() {
        return (
            <React.Fragment>
                <div className="nav">
                    <ul>
                        <li className="menu-item" onClick={() => { this.handleScrollToElement("section-title") }}>EC1 GALLEY</li>
                        <li className="menu-item" onClick={() => { this.handleScrollToElement("section-title") }}>Home</li>
                        <li className="menu-item" onClick={() => { this.handleScrollToElement("section-news") }}>News</li>
                        <li className="menu-item" onClick={() => { this.handleScrollToElement("section-channel") }}>Channel</li>
                        <li className="menu-item" onClick={() => { this.handleScrollToElement("section-artists") }}>Artists</li>
                        <li id="btn-drop-menu" style={{ float: "right" }}>
                            <a type="button" className="active" href="#"><label htmlFor="chk-menu" className="lnr lnr-menu"></label></a>
                        </li>
                    </ul>
                </div>
                <input type="checkbox" id="chk-menu" role="button" />
                <div className="content">
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