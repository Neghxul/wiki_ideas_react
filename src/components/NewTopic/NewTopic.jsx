import './newTopicStyles.css';
import React from "react";
import { useState, useRef } from "react";
import ToolsMenu from "../ToolsMenu/ToolsMenu";


function NewTopic() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [author, setAuthor] = useState();
    const [imgThumb, setImgThumb] = useState("");
    const ref = useRef(null);
    const [imgShow, setImgShow] = useState("inactive");

    const closeWindow = () => {
        document.querySelector('.new-topic').style.display = 'none';
        document.querySelector('body').style.overflow = 'auto';
    }

    const handleContentClick = (event) => {
        event.stopPropagation();
    } 

        const fileUpload = (event) => {
            const newFile = event.target.files[0];
            const reader = new FileReader();
            
            reader.onload = (event) => {
                const fileContent = event.target.result;
                setImgThumb(fileContent);
                setImgShow('active');
            };
            reader.readAsDataURL(newFile);
        }


    return(
        <div className="new-topic" onClick={closeWindow}>
        <div className="new-topic-content" onClick={handleContentClick}>
            <h1>Crear un nuevo articulo</h1>
            <form className="new-form">
                <label htmlFor="new-name">Titulo</label>
                <input type="text" id="new-name" name="new-name" ref={ref} onChange={(event) => setTitle(event.target.value)} value={title} />
                <label htmlFor="new-content">Descripcion del articulo</label>
                <textarea id="new-content" name="new-content" ref={ref} onChange={(event) => setDescription(event.target.value)} value={description}></textarea>
                <label htmlFor="new-author">Autor</label>
                <input type="text" id="new-author" name="new-author" ref={ref} onChange={(event) => setAuthor(event.target.value)} value={author} />
                <img id="new-image-preview" className={imgShow} src={imgThumb} />
                <input type="file" id="new-image" name="new-image" onChange={fileUpload} />
                <select>
                    <option>Musica</option>
                    <option>Entretenimiento</option>
                    <option>Religion</option>
                    <option>Politica</option>
                    <option>Deportes</option>
                    <option>Educacion</option>
                </select>
                <button>Crear Articulo</button>
                
            </form>

        </div>
        <span className="close-button" onClick={closeWindow}>&times;</span>
    </div>
    );
}

export default NewTopic;
