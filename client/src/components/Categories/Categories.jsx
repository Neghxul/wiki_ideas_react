import './categoriesStyles.css';
import React, { useEffect, useState } from "react";
import img1 from '../img/deportes.jpg';
import img2 from '../img/educacion.jfif';
import img3 from '../img/entretenimiento.jpg';
import img4 from '../img/musica.jpg';
import img5 from '../img/politica.jfif';
import img6 from '../img/religion.jpg';

const categories = [
    { 
        nombre: "Deportes",
        img: img1
    }, 
    { 
        nombre: "Educación",
        img: img2
    }, 
    { 
        nombre: "Entretenimiento",
        img: img3
    }, 
    { 
        nombre: "Musica",
        img: img4
    }, 
    { 
        nombre: "Politica",
        img: img5
    }, 
    { 
        nombre: "Religión",
        img: img6
    }
];

function Categories() {

    const createCategories = categories.map((cat, index) => {
        return (
            <div className="category" key={index}>
                <h3 className="subtitle">{cat.nombre}</h3><hr />
                    <img src={cat.img} alt={cat.nombre} />
            </div>
        );
    });

    const [subValue, setSubValue] = useState("");

    useEffect(() => {
        const imgCategories = document.querySelectorAll('.category img');
        const subCategories = document.querySelectorAll('.category .subtitle');
        const searchBar = document.querySelector('#search-text');
        const toolsBtn = document.querySelector('#header-tools i');
        const toolsMenu = document.querySelector('#menu-tools');

        const handleSubtitleMouseOver = (e) => {
            const index = e.currentTarget.getAttribute('data-index');
            const imgCategory = imgCategories[index];
            const subtitle = subCategories[index];

            imgCategory.style.transform = "scale(1.15)";
            subtitle.style.opacity = "0.3";
            subtitle.style.cursor = "pointer";
            setSubValue(subtitle.innerHTML);
            subtitle.innerHTML = "";
        };

        const handleSubtitleMouseOut = (e) => {
            const index = e.currentTarget.getAttribute('data-index');
            const imgCategory = imgCategories[index];
            const subtitle = subCategories[index];

            imgCategory.style.transform = "scale(1)";
            subtitle.style.opacity = "1";
            subtitle.innerHTML = subValue;
        };

        const handleDocumentMouseUp = (e) => {
            if (!searchBar.contains(e.target)) {
                searchBar.style.background = "#aaa";
            } else {
                searchBar.style.background = "#fff";
            }
        };

    subCategories.forEach((subtitle, index) => {
        subtitle.setAttribute('data-index', index);
        subtitle.addEventListener('mouseover', handleSubtitleMouseOver);
        subtitle.addEventListener('mouseout', handleSubtitleMouseOut);
    });

    document.addEventListener('mouseup', handleDocumentMouseUp);

    toolsBtn.addEventListener('mouseover', () => {
        toolsMenu.classList.add('active');
    });

    toolsMenu.addEventListener('mouseleave', () => {
        toolsMenu.classList.remove('active');
    });

    return () => {
        subCategories.forEach((subtitle, index) => {
        subtitle.removeEventListener('mouseover', handleSubtitleMouseOver);
        subtitle.removeEventListener('mouseout', handleSubtitleMouseOut);
    });

    document.removeEventListener('mouseup', handleDocumentMouseUp);
    };
}, [subValue]);

return (
        <section id="main-category">
            <h1 className="title">Categorias</h1>
            <div id="category-grid">{createCategories}</div>
        </section>
    );

};

export default Categories;