import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Registration = () => {

    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: ""
    });

    const avatar = [
        {
            position: "a1"
        },
        {
            position: "a2"
        },
        {
            position: "a3"
        },
        {
            position: "a4"
        },
        {
            position: "a5"
        },
        {
            position: "a6"
        },
        {
            position: "a7"
        },
        {
            position: "a8"
        },
    ];

    const [err, setError] = useState(null);

    const navigate = useNavigate();

    const [selectedAvar, setSelectedAvatar] = useState(null);


    const selectAvar = (avatarIndex) => {
        setSelectedAvatar(avatarIndex);
    }

    const createAvatarOption = avatar.map((avatarNumber, index) => {
        const isSelected = selectedAvar === index;
        const borderStyle = isSelected ? "5px solid #0071bc" : "5px solid transparent";
        return (
            <div className={`avatar-container ${avatarNumber.position}`} key={index} onClick={() => selectAvar(index)} style={{ border: borderStyle}}></div>
        );
    });

    

    const handleChange = e => {
        setInputs(prev => ({...prev, [e.target.name]: e.target.value}));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post("/auth/register", inputs);
            navigate("/auth/login");
        } catch (err) {
            setError(err.response.data);
        }
    }

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show)

    return (
        <div className="register-container">
            <h1 className="register-title">Register</h1>
            <form className="register-form">
                <label htmlFor="username">Usuario: <span>*</span></label>
                <input class="register-input" type="text" name="username" onChange={handleChange} required/>
                <label htmlFor="email">Email: <span>*</span></label>
                <input class="register-input" type="email" name="email" onChange={handleChange} required />
                <label htmlFor="password">Password: <span>*</span></label>
                <div className="show-password">
                <input class="register-input-password" type={show ? "text" : "password"} name="password" onChange={handleChange} required />
                <div className="show-hide" onClick={handleShow}>{show ? <AiFillEyeInvisible/> : <AiFillEye />}</div>
                </div>
                <div className="avatar-flex">
                </div>
                {err &&<p className="error-form">{err}</p>}
                <button className="btn-form" onClick={handleSubmit}>Sign Up</button>
                <p className="question-form">Already have an account? <Link className="link" to="/auth/login">Login</Link></p>
            </form>
        </div>
    );

}

export default Registration;