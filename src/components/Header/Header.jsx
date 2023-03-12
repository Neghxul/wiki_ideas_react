import './headerStyles.css';
import { React, useRef } from 'react';
import image from '../img/logo_empty.png';
import ToolsMenu from '../ToolsMenu/ToolsMenu';



function Header(){
    return (
        <header id="header">

            <div id="header-logo">
                <img src={image} alt="Wiki Ideas" />
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