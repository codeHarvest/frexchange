import React from 'react'

import business from '../assets/businessman.svg';


const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className="logo">
                <img src={business} className="logo-image"/>
                <h1 className="logo-title">Frexchange</h1>
            </div>
        </div>
    )
}

export default LandingPage;