import React from "react";

function Main() {
    return (
        <main id="main">

        <section id="main-search">
            <h1 class="title">Buscar en enciclopedia</h1>
            <form id="search-form">
                <input id="search-text" type="text" />
                <button id="search-btn"><i class="fas fa-search"></i></button>
            </form>
            <div id="search-container">
                <div id="search-img">
                </div>
                <div id="details-search">

                </div>
            </div>
        </section>

        <section id="main-category">
            <h1 class="title">Categorias</h1>
            <div id="category-grid">
                <div class="category b1">
                    <h3 class="subtitle">Deportes</h3><hr />
                    <img src="./img/deportes.jpg" alt="" />

                </div>

                <div class="category b2">
                    <h3 class="subtitle">Politica</h3><hr />
                    <img src="./img/politica.jfif" alt="" />
                </div>

                <div class="category b3">
                    <h3 class="subtitle">Religion</h3><hr />
                    <img src="./img/religion.jpg" alt="" />
                </div>

                <div class="category b4">
                    <h3 class="subtitle">Educación</h3><hr />
                    <img src="./img/educacion.jfif" alt="" />
                </div>

                <div class="category b5">
                    <h3 class="subtitle">Entretenimiento</h3><hr />
                    <img src="./img/entretenimiento.jpg" alt="" />
                </div>

                <div class="category b6">
                    <h3 class="subtitle">Musica</h3><hr />
                    <img src="./img/musica.jpg" alt="" />
                </div>

            </div>

        </section>

        <section id="main-principal">

            <h1 class="title">Articulos Destacados</h1>

            <div id="principal-grid">

                <div class="principal-section">
                    <img class="principal-img" src="./img/destacado_1.png" alt="" />
                    <div class="principal-text">
                        <p>ABBA es un grupo sueco de música pop, integrado por Agnetha Fältskog, Björn Ulvaeus, Benny Andersson y Anni-Frid «Frida» Lyngstad. </p>
                        <p>El nombre «ABBA» es un acrónimo formado por las primeras letras del nombre de cada miembro (Agnetha, Björn, Benny, Anni-Frid).</p>
                    </div>
                </div>

                <div class="principal-section">
                    <img class="principal-img" src="./img/destacado_2.jpg" alt="" />
                    <div class="principal-text">
                        <p>Fuji rojo —también conocida según su nombre original (凱風快晴 Gaifū kaisei?), en español Viento del sur, cielo claro— es una estampa japonesa del pintor especialista en ukiyo-e, Katsushika Hokusai, que forma parte de la serie Treinta y seis vistas del monte Fuji. </p>
                        <p>weiFue publicada entre 1829 y 1833, durante el Período Edo, y actualmente es propiedad de varios museos, incluyendo el Museo Británico en Londres, el Museo Metropolitano de Arte de Nueva York, y el Museo de Arte de Indianápolis.</p>
                    </div>
                </div>

            </div>

        </section>


    </main>
    );
}

export default Main;