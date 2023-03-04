import React from "react";

function NewTopic() {
    return(
        <div className="new-topic">
        <div className="new-topic-content">
            <h1>Crear un nuevo articulo</h1>
            <form className="new-form">
                <label for="new-name">Titulo</label>
                <input type="text" id="new-name" name="new-name" />
                <label for="new-content">Descripcion del articulo</label>
                <textarea id="new-content" name="new-content"></textarea>
                <label for="new-author">Autor</label>
                <input type="text" id="new-author" name="new-author" />
                <img id="new-image-preview" src="" />
                <input type="file" id="new-image" name="new-image" value="Adjuntar imagen" />
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
        <span className="close-button">&times;</span>
    </div>
    );
}

export default NewTopic;