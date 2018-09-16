import React from 'react'
import NavItems from "../NavItems/NavItems";
import classes from './SideDrawer.css'
import Logo from "../../Logo/Logo";
import Wrap from "../../hoc/Wrap";
import Backdrop from "../../UI/Backdrop/BackDrop";

const SideDrawer = (props) => {
	let attachedClasses = [classes.SideDrawer, classes.Close]
	if (props.open) {
		attachedClasses = [classes.SideDrawer, classes.Open]
	}

	return(
	    <Wrap>
		    <Backdrop show = {props.open} closeSummary = {props.close} />
		    <div className={attachedClasses.join(' ')}>
			    <div className={classes.Logo}>
				    <Logo/>
			    </div>
			    <nav>
				    <NavItems/>
			    </nav>
		    </div>
	    </Wrap>
	)
}

export default SideDrawer