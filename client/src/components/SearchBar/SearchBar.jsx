import './searchBarStyles.css';
import { React, useState, useRef } from "react";
import { FaSearch } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import logo from "../img/logo_empty.png";


var dataSave = [];

function SearchBar() {
    const ref = useRef(null);
    const [searchValue, setSearchValue] = useState("");
    const detailsDiv = document.getElementById('details-search'); 
    const resultsDiv = document.getElementById('search-img');
    const searchInput = document.getElementById('search-text');
    const containerDiv = document.getElementById('search-container');

    async function handleSubmit(event) {
        event.preventDefault();
        const searchValue = searchInput.value;
        const searchQuery = searchValue.trim();
        resultsDiv.innerHTML = "";
        detailsDiv.innerHTML = "";
        
        console.log(searchQuery);

    
        try {
            const results = await searchWikipedia(searchQuery);
            if (results.query.searchinfo.totalhits === 0) {
                alert('No results found. Try different keywords');
            }
            displayResults(results);
            containerDiv.style.display = 'flex';
            resultsDiv.style.display = 'block';
            console.log(results);
        } catch (err) {
            console.log(err);
            alert('Failed to search wikipedia');
        }
    }
    
    async function searchWikipedia(searchQuery) {
        const endPoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}`;
        const response = await fetch(endPoint);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        return json;
    }

    const resultClick = async (pageid) => {
        try {
            const pageData = await getPageData(pageid);
            displayDetails(pageData);
        } catch (err) {
            console.log(err);
            alert('Failed to retrieve page data');
        }
    }
    
    function displayResults(results) {
        results.query.search.forEach(result => {
            const url = `https://en.wikipedia.org/?curid=${result.pageid}`;
            const resultItem = document.createElement('div');
                resultItem.classList.add('result-item');
                resultItem.onclick = function () { resultClick(result.pageid); };
            const title = document.createElement('h3');
            const spanTitle = document.createElement('span');
                spanTitle.innerHTML = '[url link]'
                spanTitle.classList.add('link-result');
            const titleLink = document.createElement('a');
                titleLink.href = url;
                titleLink.target = '_blank';
                titleLink.rel = 'noopener';
                titleLink.textContent = result.title;
                titleLink.appendChild(spanTitle);
            title.appendChild(titleLink);
            resultItem.appendChild(title);
    
            const snippet = document.createElement('span');
                snippet.classList.add('result-snippet');
                snippet.innerHTML = result.snippet;
                resultItem.appendChild(snippet);
                resultsDiv.appendChild(resultItem);
        });
    }
    
    async function getPageData(pageId) {
        const endPoint = `https://en.wikipedia.org/w/api.php?action=query&prop=extracts|pageimages&format=json&exsentences=3&exlimit=1&explaintext=1&piprop=thumbnail&pithumbsize=300&pageids=${pageId}&origin=*`;
        const response = await fetch(endPoint);
        if(!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        return json;
    }
    
    function displayDetails(pageData) {
        const page = pageData.query.pages[Object.keys(pageData.query.pages)[0]];
        dataSave = page;
        console.log(dataSave);
        const imageUrlResult = page.thumbnail ? page.thumbnail.source : logo;
        const titleResult = page.title;
        const descriptionResult = page.extract;
        const details = `
        <img src="${imageUrlResult}" alt="${titleResult}" id="details-img">
        <div id="details-txt">
        <h3>${titleResult}</h3>
        <p>${descriptionResult}</p>
        </div>
        `;
        detailsDiv.innerHTML = details;
    }


    // Function for save data in the DB

    const navigate = useNavigate();
    const state = useLocation().state;
    

    const handleSavePost = async (e) => {
        e.preventDefault();
        console.log(dataSave);

        try {
            state 
            ? await axios.put(`/posts/${state.id}`, {
                title: dataSave.title,
                desc: dataSave.extract,
                category: "",
                img: dataSave.thumbnail ? dataSave.thumbnail.source : logo,
                site: `https://en.wikipedia.org/?curid=${dataSave.pageid}`,
            }) : 
            await axios.post(`/posts/`, {
                title: dataSave.title,
                desc: dataSave.extract,
                category: "",
                img: dataSave.thumbnail ? dataSave.thumbnail.source : logo,
                date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
                site: `https://en.wikipedia.org/?curid=${dataSave.pageid}`,
            });
           navigate("/inicio");
        } catch (err) {
            console.log(err);
        }
    }


    /*const state = useLocation().state;
    const [value, setValue] = useState(state?.title || "");
    const [title, setTitle] = useState(state?.desc || "");
    const [file, setFile] = useState(null);
    const [cat, setCat] = useState(state?.cat || "");

    

    

    const handleClick = async (e) => {
        e.preventDefault();
        const imgUrl = await upload();

        try {
            state
                ? await axios.put(`/posts/${state.id}`, {
                title,
                desc: value,
                cat,
                img: file ? imgUrl : "",
            }) :
            await axios.post(`/posts/`, {
                title,
                desc: value,
                cat,
                img: file ? imgUrl : "",
                date: moment(Date.now()).format("YYY-MM-DD HH:mm:ss"),
            });
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };*/

    return (
        
        <section id="main-search">
            <h1 className="title">Buscar en enciclopedia</h1>
            <form id="search-form">
                <div className="search-container">
                    <input id="search-text" type="text" ref={ref} value={searchValue} onChange={(event) => setSearchValue(event.target.value)} />
                    <button id="search-btn" onClick={handleSubmit}><FaSearch className="react-icon" /></button>
                </div>
                
                <div className="search-option">
                    <h5>¿Donde quieres realizar tu busqueda?</h5>
                    <span><input type="radio" name="search-option" id="search-wiki" checked />Wikipedia</span>
                    <span><input type="radio" name="search-option" id="search-db" />Wiki Ideas</span>
                </div>
                
            </form>
            <div id="search-container">
                <div id="search-img">
                </div>
                <div id="details-search">
                
                </div>
                <button onClick={handleSavePost}>Guardar</button>

            </div>
        </section>
    );
    
}

export { dataSave };
export default SearchBar;