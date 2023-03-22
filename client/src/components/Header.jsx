
import { React, useRef } from 'react';
import image from './img/logo_empty.png';
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
                <Link className="link" to={"/"}>Inicio</Link>
                <Link className="link">Categorias</Link>
                <Link className="link" to={"/write"}>Nuevo Post</Link>
                <Link className="link">Menu</Link>
                <Link className="link">About</Link>
            </nav>
            <ToolsMenu />
        </header>
    )
}

export default Header;