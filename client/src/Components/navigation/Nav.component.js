import React from 'react'

import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <div className="nav">
            <Link to="/" className="home link">
                <h3 className="logo-title-mini">Frexchange</h3>
            </Link>
            <ul className="links">
                <li className="">
                    <Link to="/register" className="register link">register / login</Link>
                </li>
                <li className="">
                    <Link to="/cart" className="bart-cart link">bart-cart</Link>
                </li>
            </ul>
        </div>
    )
}
