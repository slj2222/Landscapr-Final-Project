import React from "react"
import { Link } from "react-router-dom"
import MainContainer from "./MainContainer"
import Login from "./Login"


function LandingPage( { user, onLogin }) {
    return (
        <div>
            WELCOME
            {user ? (
                <>
                    
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