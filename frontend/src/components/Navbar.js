import React from "react";

function Navbar() {
    return(
        <div>
            <div className="navbar">
                <div className="left">
                    Ministry of coal
                </div>
                <div className="right">
                    <a href="/">Home</a>
                    <a href="/">Search</a>
                    <a href="/">About</a>
                    <a href="/">Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;