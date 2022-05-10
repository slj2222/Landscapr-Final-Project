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
                    Welcome, {user.username}! 
                    <p> click the button to add your first client </p>
                    <Link to="/clients/new">
                        <button> add a client </button>
                    </Link>
                    </>
                ) : (
                    <>
                    Welcome, {user.username}! 
                    <p>check out your client list above to get started</p>
                    </>
                )
                
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