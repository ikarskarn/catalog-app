import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar(props) {
    return (
        <nav role="navigation" className="nav-bar">
            <Link to="/" className="nav-home">
                Home
            </Link>
            <Link to="/catalog" className="nav-catalog">
                Catalog
            </Link>
            <Link to="/admin" className="nav-admin">
                Administration
            </Link>
        </nav>
    );
}
