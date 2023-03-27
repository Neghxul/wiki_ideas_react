import React, { useContext } from "react";
import { useState } from "react";
import { FaBars, FaPlus, FaFlag, FaInfoCircle } from 'react-icons/fa';
import { AiTwotoneHome } from 'react-icons/ai';
import { MdCategory, MdTopic } from 'react-icons/md';
import { FcAbout } from 'react-icons/fc';
import { BiLogOut, BiLogIn } from 'react-icons/bi';
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

    /*const actionClick = action => {

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
    }*/


    const { currentUser, logout } = useContext(AuthContext);

    return (

        <div id="header-tools">
                <i onMouseOver={toolsBtnOver} className="fas fa-bars"><FaBars /></i>

                
                
                <ul onMouseLeave={toolsBtnLeave} id="menu-tools" className={toolsValue}>
                    <div className="user-container">
                        <div className="avatar-container position"></div>
                        <span>{currentUser ? currentUser?.username : "Guest"}</span>
                    </div>
                    <li onClick={()=>navigate("/inicio")}><AiTwotoneHome />Home</li>
                    <li onClick={()=>navigate("/write")}><FaPlus />New Post</li>
                    <li onClick={()=>navigate("/categories")}><MdCategory />Categories</li>
                    <li onClick={()=>navigate("/posts")}><MdTopic />Posts</li>
                    <li onClick={()=>navigate("/about")}><FaInfoCircle />About</li>
                    <li onClick={()=>navigate("/inicio")}><FaFlag />Report</li>
                    {currentUser ? <li onClick={logout}><BiLogOut />Logout</li> : 
                        <li onClick={()=>navigate("/auth/login")}><BiLogIn />Login</li>}
                </ul>
            </div>
    );
}


export default ToolsMenu;