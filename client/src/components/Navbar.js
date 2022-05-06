import React from "react";

function Navbar({ onLogout }) {

    function handleLogout() {
        fetch('/logout', {
            method: "DELETE",
        }).then(() => onLogout());
    }

    return (
        <div>
            NAVBAR
            <button onClick={handleLogout}>log out</button>
        </div>
    )
}

export default Navbar