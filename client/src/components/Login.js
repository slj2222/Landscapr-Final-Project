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
        <div>
            LOGIN PAGE
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">
                    username:
                </label>
                <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)}></input>
                <label htmlFor="password">
                    password:
                </label>
                <input type="text" name="password" value={password} onChange={e => setPassword(e.target.value)}></input>
                
                    <input type="submit" value="log in"></input>
                
            </form>
        </div>
    )
}

export default Login