import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../components/Registration/Registration.css";

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
            navigate("/login");
        } catch (err) {
            setError(err.response.data);
        }
    }

    return (
        <div className="register-container">
            <h1 className="register-title">Registro</h1>
            <form><label htmlFor="username">Usuario: </label>
                <input type="text" name="username" onChange={handleChange} />
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" onChange={handleChange} />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" onChange={handleChange} />
                <div className="avatar-flex">
                    { createAvatarOption }
                </div>
                {err &&<p>{err}</p>}
                <button onClick={handleSubmit}>Registrar</button>
                <p>¿Tienes una cuenta? <Link className="link" to="/login">Login</Link></p>
            </form>
        </div>
    );

}

export default Registration;