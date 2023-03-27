
import { React } from 'react';
import image from '../img/logo_empty.png';
import ToolsMenu from './ToolsMenu';
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
            </nav>
            <ToolsMenu />
        </header>
    )
}

export default Header;