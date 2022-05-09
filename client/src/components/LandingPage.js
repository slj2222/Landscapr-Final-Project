import React from "react"
import { Link } from "react-router-dom"
import Login from "./Login"


function LandingPage( { user, onLogin }) {
    console.log(user)
    return (
        <div>
            {user ? (
                <>
                    Welcome, {user.username}! 
                </>
            ) : (
                <>
                <Login onLogin={onLogin}/>
                <Link to="/signup">
                    <div>sign up here</div>
                </Link>
            </>
            )}
        </div>
    )
}

export default LandingPage