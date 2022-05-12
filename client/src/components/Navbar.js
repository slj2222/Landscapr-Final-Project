import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

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
                        <Button variant="text" size="large">client list</Button>
                    </Link>
                    <Link to="/invoices">
                        <Button variant="text" size="large">invoice list</Button>
                    </Link>
                    <Link to="/invoices/totals">
                        <Button variant="text" size="large">invoice totals</Button>
                    </Link>
                </div>
                <div id="logout-button">
                    <Link to="/">
                        <Button variant="text" size="large" onClick={handleLogout}>log out</Button>
                    </Link>
                </div>
                
            </div>
        </div>
    )
}

export default Navbar