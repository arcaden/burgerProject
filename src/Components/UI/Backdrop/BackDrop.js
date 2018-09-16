import React from 'react'
import classes from './BackDrop.css'

const Backdrop = (props) => {
	return props.show ? <div className={classes.Backdrop} onClick={props.closeSummary}></div> : null
}

export default Backdrop