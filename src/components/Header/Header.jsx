import React from "react";

import Navigation from "../Navigation/Navigation";
import "./Header.css";

const Header = () => {
    return (
        <header className="main-header">
            <h1>My React Blog</h1>
            <Navigation />
        </header>

    )
}

export { Header };