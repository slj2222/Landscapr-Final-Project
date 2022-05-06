import React from "react";
import { Link } from "react-router-dom";

function Navbar({ onLogout }) {

    function handleLogout() {
        fetch('/logout', {
            method: "DELETE",
        }).then(() => onLogout());
    }

    return (
        <div>
            NAVBAR
            <Link to="/clients">
                <div>client list</div>
            </Link>
            {/* <Link to="/invoices">
                <div>invoice list</div>
            </Link> */}
            <Link to="/">
                <button onClick={handleLogout}>log out</button>
            </Link>
            
        </div>
    )
}

export default Navbar