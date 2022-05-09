import React from "react";
import { Link } from "react-router-dom";

function Navbar({ onLogout }) {

    function handleLogout() {
        fetch('/logout', {
            method: "DELETE",
        }).then(() => onLogout());
    }

    return (
        <div className="navbar">
            NAVBAR
            <Link to="/clients">
                <div className="navbar-link">client list</div>
            </Link>
            <Link to="/invoices">
                <div className="navbar-link">invoice list</div>
            </Link>
            <Link to="/invoices/totals">
                <div className="navbar-link">invoice totals</div>
            </Link>
            <Link to="/">
                <button onClick={handleLogout}>log out</button>
            </Link>
            
            
        </div>
    )
}

export default Navbar