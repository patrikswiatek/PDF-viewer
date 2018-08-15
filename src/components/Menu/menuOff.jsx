import React from "react";

class MenuOff extends React.Component {

	render() {
		return (
			<div className='menu'>
				<button className='btn' onClick={this.props.onClick}>Menu</button>
			</div>
		)
	}
}

export default MenuOff;
