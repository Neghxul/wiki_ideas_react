import React from "react";
import img1 from '../img/destacado_1.png';
import img2 from '../img/destacado_2.jpg';
import MainTopic from "../MainTopics/MainTopics";
import { dataSave } from "../SearchBar/SearchBar";

var mainTopic = [
    {
        img: img1,
        title: 'ABBA',
        desc1: 'ABBA es un grupo sueco de música pop, integrado por Agnetha Fältskog, Björn Ulvaeus, Benny Andersson y Anni-Frid «Frida» Lyngstad.',
        desc2: 'El nombre «ABBA» es un acrónimo formado por las primeras letras del nombre de cada miembro (Agnetha, Björn, Benny, Anni-Frid).'
    },
    {
        img: img2,
        title: 'Fuji Rojo',
        desc1: 'Fuji rojo —también conocida según su nombre original (凱風快晴 Gaifū kaisei?), en español Viento del sur, cielo claro— es una estampa japonesa del pintor especialista en ukiyo-e, Katsushika Hokusai, que forma parte de la serie Treinta y seis vistas del monte Fuji.',
        desc2: 'weiFue publicada entre 1829 y 1833, durante el Período Edo, y actualmente es propiedad de varios museos, incluyendo el Museo Británico en Londres, el Museo Metropolitano de Arte de Nueva York, y el Museo de Arte de Indianápolis.'
    }
];


function Details ( ) {
    const handleButtonClick = () => {
        const newData = {
            title: dataSave.title,
            img: dataSave.thumbnail,
            desc1: dataSave.extract
        };
        mainTopic.push(newData); 
        <MainTopic />

    };

    return (
        <button onClick={handleButtonClick}>Agragar Articulo</button>
    );
}

export {mainTopic};
export default Details;