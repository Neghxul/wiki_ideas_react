import React from "react";
import { useState } from "react";


function NewTopic() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [author, setAuthor] = useState("");
    const [imgThumb, setImgThumb] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);

    const closeWindow = () => {
        document.querySelector('.new-topic').style.display = 'none';
        document.querySelector('body').style.overflow = 'auto';
    }

    const handleContentClick = (event) => {
        event.stopPropagation();
    } 

        //if(newFile.files[0]){ 
        const fileUpload = (event) => {
            const newFile = event.target.files[0];
            const reader = new FileReader();
            
            reader.onload = (event) => {
                const fileContent = event.target.result;
                setImgThumb(fileContent);
            };
            reader.readAsDataURL(newFile);
        }


    return(
        <div className="new-topic" onClick={closeWindow}>
        <div className="new-topic-content" onClick={handleContentClick}>
            <h1>Crear un nuevo articulo</h1>
            <form className="new-form">
                <label htmlFor="new-name">Titulo</label>
                <input type="text" id="new-name" name="new-name" onChange={title} />
                <label htmlFor="new-content">Descripcion del articulo</label>
                <textarea id="new-content" name="new-content" onChange={description}></textarea>
                <label htmlFor="new-author">Autor</label>
                <input type="text" id="new-author" name="new-author" onChange={author} />
                <img id="new-image-preview" src={imgThumb} />
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
