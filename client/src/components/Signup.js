import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup({ onLogin }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const  navigate = useNavigate()

    function handleCreateUser(e) {
        e.preventDefault()
        fetch("/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: username, password: password }),
        }).then(res => {
            if (res.ok) {
                res.json().then(data => onLogin(data))
                navigate("/")
            } else {
                res.json().then(data => console.log(data))
            }
        })
    }


    return (
        <div>
            SIGNUP PAGE
            <form className="sign-up-form" onSubmit={(e) => handleCreateUser(e)}>
                <label htmlFor="username">company name:</label>
                <input type="text" name="username" value={username} placeholder="" onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor="password">password:</label>
                <input type="text" name="password" value={password} placeholder="" onChange={(e) => setPassword(e.target.value)} />
                <label htmlFor="confirm-password">confirm password:</label>
                <input type="text" name="confirm password" value={confirmPassword} placeholder="" onChange={(e) => setConfirmPassword(e.target.value)} />
                <input type="submit" name="sign up"></input>
            </form>
        </div>
    )
}

export default Signup