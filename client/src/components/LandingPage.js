import React from "react"
import { Link } from "react-router-dom"



function LandingPage() {
    return (
        <div>
            WELCOME
            {/* <Router> */}
                <Link to="/signup">
                    <button>sign up</button>
                </Link>
                <Link to="/login">
                    <button>log in</button>
                </Link>
            {/* </Router> */}
        </div>
    )
}

export default LandingPage