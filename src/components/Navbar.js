import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavbarExample = () => {
    return(
        <nav className="nav-wrapper red darken-3">
            <div>
                <a className="brand-logo">React CRUD</a>
                <ul className="right">
                    <li><Link to="/home">Home</Link></li>
                    <li><NavLink to="/get">Get</NavLink></li>
                    <li><NavLink to="/post">Post</NavLink></li>
                </ul>
            </div>
        </nav>
    )     
}
 
export default NavbarExample