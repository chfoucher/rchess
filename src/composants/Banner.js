import React from 'react';
import "../styles/Banner.css";
import logo from "../assets/logo.png";

function Banner() {
    return (
    <div className='lmj-banner'>
        <img src={ logo } alt="Logo SGDF" className='lmj-logo' />
        <h1>La maison jungle</h1>
    </div>
    );
}

export default Banner
