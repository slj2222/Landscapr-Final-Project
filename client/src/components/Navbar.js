import React from "react";
import { Link } from "react-router-dom";

function Navbar({ onLogout }) {

    function handleLogout() {
        fetch('/logout', {
            method: "DELETE",
        }).then(() => onLogout());
    }

    return (
        <div classsName="container">
            <div className="navbar">
                <div className="navbar-link">
                    <Link to="/clients">
                        <button>client list</button>
                    </Link>
                    <Link to="/invoices">
                        <button>invoice list</button>
                    </Link>
                    <Link to="/invoices/totals">
                        <button>invoice totals</button>
                    </Link>
                </div>
                <div id="logout-button">
                    <Link to="/">
                        <button onClick={handleLogout}>log out</button>
                    </Link>
                </div>
                
            </div>
        </div>
    )
}

export default Navbar