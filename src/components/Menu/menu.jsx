import React from 'react';
import KeyboardEventHandler from "react-keyboard-event-handler";
import MenuOn from './menuOn';
import MenuOff from './menuOff';


class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isVisible: false,
		};
	}

	handleMenuOff = () => {
		this.setState ({
			isVisible: false,
		});
	};

	toggleMenu = () => {
		if(this.state.isVisible===false) {
			this.setState({
				isVisible: true,
			})
		} else {
			this.setState({
				isVisible: false,
			})
		}
	};

	handleMenuOn = (e) => {
		e.preventDefault();
		this.setState ({
			isVisible: true,
		});
	};

	render() {

		let visible;
		if (this.state.isVisible) {
			visible = <MenuOn onClick={this.handleMenuOff}/>
		}
		else {
			visible = <MenuOff onClick={this.handleMenuOn}/>
		}

		return (
			<div id='nav'>
				<KeyboardEventHandler handleKeys={['space']} onKeyEvent={(space, e) => this.toggleMenu(e)}/>
				{visible}
			</div>
		);
	}
}

export default Menu;
