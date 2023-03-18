import React, { useContext } from "react";
import { useState } from "react";
import { FaBars, FaPlus, FaEdit, FaTrash, FaFlag } from 'react-icons/fa';
import { AuthContext } from './context/authContext';
import { Link, useNavigate } from 'react-router-dom';


function ToolsMenu() {

    const [toolsValue, setToolsValue] = useState('menu-tools');
    const toolsBtnOver = () => {
        setToolsValue('menu-tools active');
    }

    const toolsBtnLeave = () => {
        setToolsValue('menu-tools');
    }

    const navigate = useNavigate();

    const actionClick = action => {

        const newTopic = document.querySelector('.new-topic');
        const body = document.querySelector('body');

            console.log(action.target.outerText);
            if(action.target.outerText === 'Nuevo Topic'){
                console.log('Nuevo');
                navigate("/write");
                newTopic.style.display = 'block';
                body.style.overflow = 'hidden';
            } else if(action.target.outerText === 'Edit'){
                console.log('Editar');
            } else if(action.target.outerText === 'Delete'){
                console.log('Borrar');
            }  else if(action.target.outerText === 'Report'){
                console.log('Reportar');
            }
    }


    const { currentUser, logout } = useContext(AuthContext);

    return (

        <div id="header-tools">
                <i onMouseOver={toolsBtnOver} className="fas fa-bars"><FaBars /></i>
                <ul onMouseLeave={toolsBtnLeave} id="menu-tools" className={toolsValue}>
                    <li>
                        <div className="avatar-container position"></div>
                        <span>{currentUser?.username}</span>
                    </li>
                    <li onClick={actionClick}><FaPlus />Nuevo Topic</li>
                    <li onClick={actionClick}><FaEdit />Edit</li>
                    <li onClick={actionClick}><FaTrash />Delete</li>
                    <li onClick={actionClick}><FaFlag />Report</li>
                    {currentUser ? <li onClick={logout}>Logout</li> : <Link className="link" to="/login">Login</Link>}
                </ul>
            </div>
    );
}


export default ToolsMenu;