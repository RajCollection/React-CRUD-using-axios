import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return(
        <nav className="nav-wrapper red darken-3">
        <div>
            <a className="brand-logo">React CRUD</a>
            <ul className="right">
                <li><Link to="/home">Home</Link></li>
                <li><NavLink to="/list">Get</NavLink></li>
            </ul>
        </div>
        </nav>
    )
        
}
 
export default Navbar