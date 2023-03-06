import React, { useEffect, useState } from "react";

function Categories() {
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

    // Cleanup function
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
            <div id="category-grid">
                <div className="category b1">
                    <h3 className="subtitle">Deportes</h3><hr />
                    <img src="./img/deportes.jpg" alt="" />

                </div>

                <div className="category b2">
                    <h3 className="subtitle">Politica</h3><hr />
                    <img src="./img/politica.jfif" alt="" />
                </div>

                <div className="category b3">
                    <h3 className="subtitle">Religion</h3><hr />
                    <img src="./img/religion.jpg" alt="" />
                </div>

                <div className="category b4">
                    <h3 className="subtitle">Educación</h3><hr />
                    <img src="./img/educacion.jfif" alt="" />
                </div>

                <div className="category b5">
                    <h3 className="subtitle">Entretenimiento</h3><hr />
                    <img src="./img/entretenimiento.jpg" alt="" />
                </div>

                <div className="category b6">
                    <h3 className="subtitle">Musica</h3><hr />
                    <img src="./img/musica.jpg" alt="" />
                </div>

            </div>

        </section>
    );

}

export default Categories;