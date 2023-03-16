import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../components/context/authContext";
import "./single.css";


const Single = () => {

    const [post, setPost] = useState({});

    const location = useLocation();
    const navigate = useNavigate();

    const postId = location.pathname.split("/")[2];

    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("postId: " + postId);
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
        <div className="single">
            <div className="content">
                <img src={post?.img} alt="" />
                <div className="user">
                    <img src="" alt="" />
                    <div className="info">
                        <span>{post.username}</span>
                        <p>Posted {moment(post.date).fromNow()}</p>
                    </div>
                    {currentUser.username === post.username && (
                    <div className="edit">
                        <Link><span>Edit</span></Link>
                        <Link onClick={handleDelete}><span>delete</span></Link>
                    </div>
                    )}
                </div>
                <h1>{ post.title }</h1>
                <p>{ post.desc }</p>
            </div>
        </div>
    );
}

export default Single;