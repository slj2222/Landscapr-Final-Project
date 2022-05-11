import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup({ onLogin }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const  navigate = useNavigate()
    const [errors, setErrors] = useState([])
    console.log(errors)

    function handleCreateUser(e) {
        e.preventDefault()
        if (password === confirmPassword) {
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
        } else {
            setErrors(["passwords do not match"])
        }
        
        
    }


    return (
        <div className="form">
            <h3>sign up here</h3>
            {errors && errors.map(e => <h4 style={{color: "red"}}>{e}</h4>)}
            <form className="sign-up-form" onSubmit={(e) => handleCreateUser(e)}>
                <div>
                    <label htmlFor="username">company name:</label>
                    <input type="text" required name="username" value={username} placeholder="" onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">password:</label>
                    <input type="text" required name="password" value={password} placeholder="" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="confirm-password">confirm password:</label>
                    <input type="text" required name="confirm password" value={confirmPassword} placeholder="" onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <div className="submit-button">
                    <input type="submit" name="sign up"></input>
                </div>
            </form>
        </div>
    )
}

export default Signup