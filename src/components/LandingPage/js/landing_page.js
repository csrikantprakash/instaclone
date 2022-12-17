import React from 'react';
import '../css/landing_page.css'
import { Link } from 'react-router-dom';
const LandingPage = () => {
    return(
        <div className = "container">
            <div className = "image-container">
                <img src={require('../images/enterImage.png')} alt='gate'></img>
            </div>
            <div className = "button-container">
                <h2>10x Team 04</h2>
                <Link to='/postview'>
                    <button className="enter-btn">Enter</button>
                </Link>
            </div>
        </div>
    )
}

export default LandingPage;