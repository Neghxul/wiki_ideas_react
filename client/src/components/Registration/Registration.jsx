import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Registration.css";

const Registration = () => {

    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: ""
    });

    const [err, setError] = useState(null);

    const navigate = useNavigate();


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
                {err &&<p>{err}</p>}
                <button onClick={handleSubmit}>Registrar</button>
                <p>¿Tienes una cuenta? Login</p>
            </form>
        </div>
    );

}

export default Registration;