import Logo from "../mower.svg";
import React from "react";

function Header() {
    return (
        <div className="header">
            <img id="logo" src={Logo} alt="mower logo" />
        </div>
    )
}

export default Header