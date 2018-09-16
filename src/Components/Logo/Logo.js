import React from 'react'
import classes from './Logo.css'
import burgerLogo from '../../assets/img/burger-logo.png'

const Logo = (props) => (
    <div className={classes.Logo} style = {{height: props.height}}>
	    <img src =  {burgerLogo}/>
    </div>
)

export default Logo