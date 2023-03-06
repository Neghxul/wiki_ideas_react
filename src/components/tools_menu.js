import React from "react";
import { useState } from "react";
import { FaBars, FaPlus, FaTrash, FaFlag } from 'react-icons/fa';


function ToolsMenu() {

    const [toolsValue, setToolsValue] = useState('menu-tools');

    const toolsBtnOver = () => {
        setToolsValue('menu-tools active');
    }

    const toolsBtnLeave = () => {
        setToolsValue('menu-tools');
    }

    const actionClick = action => {
        const newTopic = document.querySelector('.new-topic');
        const body = document.querySelector('body');
            console.log(action.target.outerText);
            if(action.target.outerText === 'Nuevo Topic'){
                console.log('Nuevo')
                newTopic.style.display = 'block';
                body.style.overflow = 'hidden';
            } else if(action.target.outerText === 'Edit'){
                console.log('Editar')
            } else if(action.target.outerText === 'Delete'){
                console.log('Borrar')
            }  else if(action.target.outerText === 'Report'){
                console.log('Reportar')
            }




    }

    return (

        <div id="header-tools">
                <i onMouseOver={toolsBtnOver} className="fas fa-bars"><FaBars /></i>
                <ul onMouseLeave={toolsBtnLeave} id="menu-tools" className={toolsValue}>
                    <li onClick={actionClick}><i className="fa-solid fa-plus"></i><FaPlus />Nuevo Topic</li>
                    <li onClick={actionClick}><i className="fa-solid fa-pen-to-square"></i>Edit</li>
                    <li onClick={actionClick}><i className="fa-solid fa-trash"></i><FaTrash />Delete</li>
                    <li onClick={actionClick}><i className="fa-solid fa-flag"></i><FaFlag />Report</li>
                </ul>
            </div>

    );
}


export default ToolsMenu;