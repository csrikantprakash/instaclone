import React from "react";
import '../css/header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <nav className="header">
                <section className="header-logo">
                    <img src = {require("../images/icon.png")} alt = "logo"></img>
                    <span>Instaclone</span>
                </section>
                <section className="header-imgBtn">
                    <Link to="/form">
                        <img src={require("../images/camera.png")} alt = "camera"></img>
                    </Link>
                </section>                
            </nav>
        </>
    )
}

export default Header;