import { React, useState, useRef } from "react";
import { FaSearch } from 'react-icons/fa';
import logo from "../img/logo_empty.png";


function SearchForm () {

    return (
        <>
        <form>
            <input type="text" />
            <button><FaSearch /></button>
        </form>
        </>
    );
}

export default SearchForm;