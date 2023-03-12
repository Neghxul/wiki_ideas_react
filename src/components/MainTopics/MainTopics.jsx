import './mainTopicsStyles.css';
import React from "react";
import { mainTopic } from '../Details/Details';


function MainTopic () {

    const mainTopicGenerate = mainTopic.map((topic, index) => {
        return (
            <div className="principal-section" key={index}>
                    <img className="principal-img" src={topic.img} alt={topic.img} />
                    <div className="principal-text">
                        <p>{topic.desc1}</p>
                        <p>{topic.desc2}</p>
                    </div>
                </div>
        );
    });

    return (
        <section id="main-principal">
            <h1 className="title">Articulos Destacados</h1>
            <div id="principal-grid">
                {mainTopicGenerate}
            </div>
        </section>
    );
}
export default MainTopic;