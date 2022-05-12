import React, { useState } from "react";
import Button from '@mui/material/Button';


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


        // <div className="client-info-container">
            <div className="client-info-card">
                <div className="inner-form">


                    <h2 className="form-title">Welcome, please log in! </h2>
                    <form className="add-client-form" onSubmit={handleSubmit}>

                        <div className="form-div">
                            <h5 className="form-input">username:</h5>
                            <input type="text" required name="username" value={username} onChange={e => setUsername(e.target.value)}></input>
                        </div>
                        <div className="form-div">
                            <h5 className="form-input">password:</h5>
                            <input type="text" required name="password" value={password} onChange={e => setPassword(e.target.value)}></input>
                        </div>

                        <Button variant="text" type="submit" value="submit">log in</Button>

                    </form>

                </div>
            </div>
        // </div>
    )
}

export default Login