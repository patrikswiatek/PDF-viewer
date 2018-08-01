import React from 'react';



class Menu extends React.Component {
	getInitialState = () => {
	return {
		visible: false
	};
};

	//POPRAW TEN RELIKT !!

	show: function() {
	this.setState({ visible: true });
	document.addEventListener("click", this.hide.bind(this));
},

	hide: function() {
	document.removeEventListener("click", this.hide.bind(this));
	this.setState({ visible: false });
},


	render() {


		  return <div className="menu">
			  <div className={(this.state.visible ? "visible " : "") + this.props.alignment}>{this.props.children}</div>
		  </div>;
}
}

export default Menu;
