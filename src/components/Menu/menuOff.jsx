import React from "react";

class MenuOff extends React.Component {

	render() {
		return (
			<div className='menu'>
				<button className='btnMenu' onClick={this.props.onClick}>Menu</button>
			</div>
		)
	}
}

export default MenuOff;
