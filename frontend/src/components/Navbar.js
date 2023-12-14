import React from "react";

function Navbar() {
    return(
        <div>
            <div className="navbar">
                <div className="left">
                    Yoga Broker
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