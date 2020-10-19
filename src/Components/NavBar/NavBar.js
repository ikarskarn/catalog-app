import React from 'react';
import './NavBar.css';

export default function NavBar(props) {
    return(
        <nav role="navigation" className="nav-bar">
            <a href="/" className="nav-home">Home</a>
            <a href="/catalog" className="nav-catalog">Catalog</a>
            <a href="/admin" className="nav-admin">Adminstration</a>
        </nav>
    );
}