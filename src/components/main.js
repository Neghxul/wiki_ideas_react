import React from "react";
import Categories from "./categories";
import SearchBar from "./search_bar";

function Main() {
    return (
        <main id="main">

        <SearchBar />

        <Categories />

        <section id="main-principal">

            <h1 className="title">Articulos Destacados</h1>

            <div id="principal-grid">

                <div className="principal-section">
                    <img className="principal-img" src="./img/destacado_1.png" alt="" />
                    <div className="principal-text">
                        <p>ABBA es un grupo sueco de música pop, integrado por Agnetha Fältskog, Björn Ulvaeus, Benny Andersson y Anni-Frid «Frida» Lyngstad. </p>
                        <p>El nombre «ABBA» es un acrónimo formado por las primeras letras del nombre de cada miembro (Agnetha, Björn, Benny, Anni-Frid).</p>
                    </div>
                </div>

                <div className="principal-section">
                    <img className="principal-img" src="./img/destacado_2.jpg" alt="" />
                    <div className="principal-text">
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