import React, { Component } from "react";
import { } from "./navbar.css";
import icon_menu from "./icon_menu.svg";


export default class NavBar extends Component {
    render() {
        return <div className="menu-navbar">
            <div className="group-left">
                <div>
                    <img className="icon" src={icon_menu} />
                </div>
                <div>
                    HackBrazil 2019
                </div>
            </div>

            <div className="group-right">
                username
            </div>
        </div>
    }
}