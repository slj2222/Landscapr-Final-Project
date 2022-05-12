import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';


function Signup({ onLogin }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const navigate = useNavigate()
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
        <div className="client-info-container">
            <div className="client-info-card">
                <div className="inner-form">
                    
                    {errors && errors.map(e => <h4 style={{ color: "red" }}>{e}</h4>)}
                    <h3 className="form-title">Please sign up!</h3>
                    <form className="add-client-form" onSubmit={(e) => handleCreateUser(e)}>

                        <div className="form-div">
                            <h5 className="form-input">username:</h5>
                            <input type="text" required name="username" value={username} placeholder="" onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="form-div">
                            <h5 className="form-input">password:</h5>
                            <input type="text" required name="password" value={password} placeholder="" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="form-div">
                            <h5 className="form-input">confirm password:</h5>
                            <input type="text" required name="confirm password" value={confirmPassword} placeholder="" onChange={(e) => setConfirmPassword(e.target.value)} />
                        </div>

                        <Button variant="text" type="submit" value="submit">sign up</Button>

                    </form>

                </div>
            </div>
        </div>
    )
}

export default Signup