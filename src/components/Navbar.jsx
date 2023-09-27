import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="logo"><h1>VETTA</h1></Link>
            <ul className="menu">
                <li><Link className="menu-link" to="/">Inicio</Link> </li>
                <li><Link className="menu-link" to="/productos">Productos</Link> </li>
                <li><Link className="menu-link" to="/productos/hamburguesa">Hamburguesas</Link> </li>
                <li><Link className="menu-link" to="/productos/pancho">Panchos</Link> </li>
                <li><Link className="menu-link" to="/productos/pizza">Pizzas</Link> </li>
                <li><span>🛒0</span></li>
            </ul>
        </nav>
    )
}

export default Navbar