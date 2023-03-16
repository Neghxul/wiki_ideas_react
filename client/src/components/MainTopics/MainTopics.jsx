import './mainTopicsStyles.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";


function MainTopic () {

    const [posts, setPosts] = useState([]);

    const category = useLocation().search;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/posts${category}`);
                setPosts(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    },[category]);

    const getText = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        return doc.body.textContent;
    };

    const mainTopicGenerate = posts.map((post) => {
        return (
            <div className="principal-section" key={post.id}>
                    <img className="principal-img" src={post.img} alt="" />
                    <div className="principal-text">
                        <Link className="link" to={`/post/${post.id}`}>
                            <h1>{post.title}</h1>
                        </Link>
                        <p>{getText(post.desc)}</p>
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