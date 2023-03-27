import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../components/context/authContext";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";


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

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show)

    return (
        <div className="register-container">
            <h1 className="register-title">Login</h1>
            <form className="register-form">
                <label htmlFor="username">Usuario: </label>
                <input class="register-input" type="text" name="username" onChange={handleChange} required />
                <label htmlFor="password">Password:</label>
                <div className="show-password">
                <input class="register-input-password" type={show ? "text" : "password"} name="password" onChange={handleChange} required />
                <div className="show-hide" onClick={handleShow}>{show ? <AiFillEyeInvisible/> : <AiFillEye />}</div>
                </div>
                {err &&<p className="error-form">{err}</p>}
                <button className="btn-form" onClick={handleSubmit}>Ingresar</button>
                <p className="question-form">¿No tienes cuenta? <Link className="link" to={"/auth/signup"}>Registrate</Link></p>
            </form>
        </div>
    );

}

export default Login;