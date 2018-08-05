import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import Link from "react-router-dom/es/Link";

class Navigation extends React.Component {
	render() {
		return (
			<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
			</ul>
			</nav>);
	}
}

class Sidebar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isVisible: false};
	}

	handleVisible = () => {
		this.setState({isVisible: !this.state.isVisible});

	};

	render() {
		return (this.state.isVisible ? <div className='menu'>
				<button className='btn' onClick={this.handleVisible}>Menu</button>
				<ReactCSSTransitionGroup
					transitionName="example"
					transitionAppear={true}
					transitionAppearTimeout={500}
					transitionEnter={200}
					transitionLeave={true}
					transitionLeaveTimeout={500}>
					<Navigation className='panel'/>
				</ReactCSSTransitionGroup>
			</div> : <div className='menu'>
				<button className='btn' onClick={this.handleVisible}>Menu</button>
			</div>);
	}
}

export default Sidebar;
