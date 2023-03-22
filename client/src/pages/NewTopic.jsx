import './newTopicStyles.css';
import React from "react";
import { useState, useRef } from "react";
import ToolsMenu from "../components/ToolsMenu";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function NewTopic() {

    const state = useLocation().state;
    const [title, setTitle] = useState(state?.title || "");
    const [value, setValue] = useState(state?.desc || "");
    const [cat, setCat] = useState(state?.cat || "");
    const [author, setAuthor] = useState("");
    const [file, setFile] = useState(null);
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

        const fileShowPreview = (event) => {
            const newFile = event.target.files[0];
            const reader = new FileReader();
            setFile(event.target.files[0]);
            
            reader.onload = (event) => {
                const fileContent = event.target.result;
                setImgThumb(fileContent);
                setImgShow('active');
            };
            reader.readAsDataURL(newFile);
        }

        const upload = async() => {
            try{
                const formData = new FormData();
                formData.append("file", file);
                const res = await axios.post("/upload", formData);
                //fileShowPreview();
                return res.data;
            }catch(err) {
                console.log(err);
            }
        }
    
    const handleSubmit = async e => {
        e.preventDefault();
        const imgUrl = upload();

        try {

        } catch (err) {
            console.log(err);
        }
    }


    return(
        <div className="new-topic" onClick={closeWindow}>
        <div className="new-topic-content" onClick={handleContentClick}>
            <h1>Crear un nuevo articulo</h1>
            <form className="new-form">
                <label htmlFor="new-name">Titulo</label>
                <input type="text" id="new-name" name="new-name" ref={ref} onChange={(event) => setTitle(event.target.value)} value={title} />
                <label>Descripcion del articulo</label>
                <div className="editorcontainer">
                    <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
                </div>
                <label htmlFor="new-author">Autor</label>
                <input type="text" id="new-author" name="new-author" ref={ref} onChange={(event) => setAuthor(event.target.value)} value={author} />
                <img id="new-image-preview" className={imgShow} src={imgThumb} />
                <input type="file" id="new-image" name="new-image" onChange={fileShowPreview} />
                <select onChange={(event) => setCat(event.target.selectedOptions)}>
                    <option name="cat" selected={cat === "musica"} value="musica">Musica</option>
                    <option name="cat" selected={cat === "entretenimiento"} value="entretenimiento">Entretenimiento</option>
                    <option name="cat" selected={cat === "religion"} value="religion">Religion</option>
                    <option name="cat" selected={cat === "politica"} value="politica">Politica</option>
                    <option name="cat" selected={cat === "deportes"} value="deportes">Deportes</option>
                    <option name="cat" selected={cat === "educacion"} value="educacion">Educacion</option>
                </select>
                <button onClick={handleSubmit}>Crear Articulo</button>
                
            </form>

        </div>
        <span className="close-button" onClick={closeWindow}>&times;</span>
    </div>
    );
}

export default NewTopic;
