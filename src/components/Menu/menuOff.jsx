import React from "react";
import menu from './../../media/menu.png';


class MenuOff extends React.Component {

	render() {
		return (
			<div className='menu'>
				<button className='btnMenu' onClick={this.props.onClick}><img src={menu} alt=''/></button>
			</div>
		)
	}
}

export default MenuOff;
