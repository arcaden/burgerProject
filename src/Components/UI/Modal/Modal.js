import React, {Component} from 'react'
import classes from './Modal.css'
import Wrap from "../../hoc/Wrap";
import Backdrop from "../Backdrop/BackDrop";

class Modal extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.show !== this.props.show
	}

	render() {
		return (<Wrap>
			<Backdrop show={this.props.show} closeSummary={this.props.closeSummary}/>
			<div
			    className={classes.Modal}
			    style={{
				    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
				    opacity: this.props.show ? '1' : '0',
			    }}
			>
				{this.props.children}
			</div>
		</Wrap>)
	}
}

export default Modal