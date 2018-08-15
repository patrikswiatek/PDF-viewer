import React from 'react';
import MenuOn from './menuOn'
import MenuOff from './menuOff'


class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isVisible: false};
	}

	handleMenuOff = () => {
		this.setState ({
			isVisible: false,
		})
	};

	handleMenuOn = () => {
		this.setState ({
			isVisible: true,
		})
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
			<div>
				{visible}
			</div>
		);
	}
}

export default Menu;
