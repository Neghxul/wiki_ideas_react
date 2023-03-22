import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../components/context/authContext";
import "./single.css";
import { FaEdit, FaDelete } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";


const Single = () => {

    const [post, setPost] = useState({});

    const location = useLocation();
    const navigate = useNavigate();

    const postId = location.pathname.split("/")[2];

    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/posts/${postId}`);
                setPost(res.data);  
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [postId]);

    const handleDelete = async () => {
        try{
            await axios.delete(`/posts/${postId}`);
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="single-post">
            <div className="content-single">
                <h1>{ post.title }</h1>
                <img src={post.img} alt={post.title} />
                <p className="description-p">{ post.desc }</p>
                <Link className="url-wiki" to={post.site}>Visita Wikipedia para mas información del articulo</Link>
                <div className="user-single">
                    <div className="info-single">
                        <div className="user-info">
                            <div className="avatar-container a1" ></div>
                            <span>{post.username}</span>
                        </div>
                        <p className="posted-p">Posted {moment(post.date).fromNow()}</p>
                        
                    </div>
                    {currentUser && currentUser.username === post.username && (
                    <div className="edit">
                        <Link className="link" to={`/write?edit=2`} state={post}><FaEdit className="icon-edit" />Editar</Link>
                        <Link className="link" onClick={handleDelete}><MdDeleteForever className="icon-edit" />Borrar</Link>
                    </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Single;