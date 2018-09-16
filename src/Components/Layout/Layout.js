import React, {Component} from 'react'
import classes from './Layout.css'
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Wrap from "../hoc/Wrap";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
	state = {
		showSideBar : false,
	}

	handleOpenDrawer = () => {
		this.setState({
			showSideBar: true
		})
	}

	handleCloseDrawer = () =>{
		this.setState({
			showSideBar: false
		})
	}

	handleToggle = () => {
		this.setState((prevState) => {
			return {showSideBar: !(prevState.showSideBar)}
		})
	}

	render() {
		return (
		    <Wrap>
				<Toolbar toggle = {this.handleToggle}/>
				<SideDrawer close = {this.handleCloseDrawer} open ={this.state.showSideBar} />
				<main className = {classes.Content}>
					{this.props.children}
				</main>
		    </Wrap>
			)
		}
}

export default Layout