import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/authContext";


const Login = () => {

const [inputs, setInputs] = useState({
    username: "",
    password: ""
});

const [err, setError] = useState(null);

const navigate = useNavigate();

const {login} = useContext(AuthContext);


const handleChange = e => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}));
}

const handleSubmit = async e => {
    e.preventDefault();
    try {
        await login(inputs);
        navigate("/");
    } catch (err) {
        setError(err.response.data);
    }
}

return (
    <div className="register-container">
        <h1 className="register-title">Login</h1>
        <form><label htmlFor="username">Usuario: </label>
            <input type="text" name="username" onChange={handleChange} />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" onChange={handleChange} />
            {err &&<p>{err}</p>}
            <button onClick={handleSubmit}>Registrar</button>
            <p>¿Tienes una cuenta? Login</p>
        </form>
    </div>
);

}

export default Login;