import './headerStyles.css';
import { React, useRef } from 'react';
import image from '../img/logo_empty.png';
import ToolsMenu from '../ToolsMenu/ToolsMenu';
import { Link } from "react-router-dom";


function Header(){
    return (
        <header id="header">

            <div id="header-logo">
                <Link className="link" to="/">
                <img src={image} alt="Wiki Ideas" />
                </Link>
            </div>
            <nav id="header-navbar">
                <a href="#">Menu 1</a>
                <a href="#">Menu 2</a>
                <a href="#">Menu 3</a>
                <a href="#">Menu 4</a>
                <a href="#">About</a>
            </nav>
            <ToolsMenu />
        </header>
    )
}

export default Header;