import React from 'react'
import classes from './NavItems.css'
import NavItem from "./NavItem/NavItem";
const NavItems = (props) =>(
    <ul className={classes.NavItems}>
	    <NavItem Link='/' active> Burger Builder </NavItem>
	    <NavItem Link='/' > Checkout </NavItem>
    </ul>
)

export default NavItems