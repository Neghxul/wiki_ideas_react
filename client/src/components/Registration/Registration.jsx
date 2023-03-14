import React, { useState } from "react";
import axios from "axios";

const Registration = () => {

    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleChange = e => {
        setInputs(prev => ({...prev, [e.target.name]: e.target.value}));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post("/auth/register", inputs);
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <form method="POST">
            <input type="text" name="username" onChange={handleChange} />
            <input type="email" name="email" onChange={handleChange} />
            <input type="password" name="password" onChange={handleChange} />
            <button onClick={handleSubmit}>Register</button>
        </form>
    );

}

export default Registration;