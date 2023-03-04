import React from 'react';
import image from '../img/logo_empty.png';
import { FaBars, BiSearch, MdAdd } from 'react-icons/fa';

function Header(){
    return (
        <header id="header">

            <div id="header-logo">
                <img src={image} alt="Wiki Ideas" />
            </div>
            <FaBars />
            <nav id="header-navbar">
                <a href="#">Menu 1</a>
                <a href="#">Menu 2</a>
                <a href="#">Menu 3</a>
                <a href="#">Menu 4</a>
                <a href="#">Menu 5</a>
            </nav>
            <div id="header-tools">
                <i className="fas fa-bars"><FaBars /></i>
                <ul id="menu-tools" className="menu-tools">
                    <li><i className="fa-solid fa-plus"><MdAdd /></i>Nuevo Topic</li>
                    <li><i className="fa-solid fa-pen-to-square"></i>Edit</li>
                    <li><i className="fa-solid fa-trash"></i>Delete</li>
                    <li><i className="fa-solid fa-flag"></i>Report</li>
                </ul>
            </div>
        </header>
    )
}

export default Header;