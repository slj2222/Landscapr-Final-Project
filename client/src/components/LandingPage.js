import React from "react"
import { Link } from "react-router-dom"
import Login from "./Login"
import Button from '@mui/material/Button';

function LandingPage({ user, onLogin, userClientList }) {
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
                            <div className="landing-page-message"> Click the button to add your first client. </div>
                        </div>
                        <div className="add-button">
                            <Link to="/clients/new">
                                <Button variant="text"> add a client </Button>
                            </Link>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="landing-page">
                            <div className="landing-page-welcome-message">Welcome, {user.username}!</div>
                            <div className="landing-page-message">Check out your client list above to get started.</div>
                        </div>
                    </>
                )

            ) : (
                <>
                    <div className="client-info-container">
                        <Login onLogin={onLogin} />
                        <div className="signup-link">
                            <h5>Need an account?</h5>
                            <Link to="/signup">
                                <Button variant="text">Sign up here!</Button>
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </div>
    )


}

export default LandingPage