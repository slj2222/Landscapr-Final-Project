import React from "react"
import { Link } from "react-router-dom"
import Login from "./Login"


function LandingPage( { user, onLogin, userClientList }) {
    // console.log(userClientList)

    // if (userClientList.length === 0) {
    //     <div></div> 
    //  } else {  
    //  <div></div>  
    //  }

    return (
        <div>
            {user ? (
                (userClientList.length) === 0 ? (
                    <>
                    <div className="landing-page">
                        <div className="landing-page-welcome-message">Welcome, {user.username}!</div>
                        <div className="landing-page-message"> click the button to add your first client </div>
                    </div>
                    <Link to="/clients/new">
                        <button> add a client </button>
                    </Link>
                    </>
                ) : (
                    <>
                    <div className="landing-page">
                        <div className="landing-page-welcome-message">Welcome, {user.username}!</div>
                        <div className="landing-page-message">check out your client list above to get started</div>
                    </div>
                    </>
                )
                
            ) : (
                <>
                <Login onLogin={onLogin}/>
                <div className="signup-link">
                    <Link to="/signup">
                        <h5>Need an account? Sign up here!</h5>
                    </Link>
                </div>
            </>
            )}
        </div>
    )

    
}

export default LandingPage