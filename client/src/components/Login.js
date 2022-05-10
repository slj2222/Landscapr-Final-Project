import React, { useState } from "react";
import { Link } from "react-router-dom";


function Login({ onLogin }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    function handleSubmit(e) {
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: username, password: password }),
        }).then(res => {
            if (res.ok) {
                res.json().then(data => onLogin(data))
            } else {
                res.json().then(data => console.log(data))
            }
        })
    }


    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-field">
                    <label className="login-lable" htmlFor="username">
                        username:
                    </label>
                    <input type="text" required name="username" value={username} onChange={e => setUsername(e.target.value)}></input>
                </div>
                <div className="input-field">
                    <label className="login-lable" htmlFor="password">
                        password:
                    </label>
                    <input type="text" required name="password" value={password} onChange={e => setPassword(e.target.value)}></input>
                </div>
                <div className="login-button">
                    <input type="submit" value="log in"></input>
                </div>
            </form>
        </div>
    )
}

export default Login