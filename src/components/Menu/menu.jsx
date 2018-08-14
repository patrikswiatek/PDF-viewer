import React from "react";
import { CSSTransitionGroup } from 'react-transition-group'
import Link from "react-router-dom/es/Link";

class Navigation extends React.Component {
	render() {

		const style = {
			textDecoration: 'none',
			color: 'lightgoldenrodyellow',
		};

		return (
			<nav>
			<ul className='container'>
				<li>
					<Link style={style} to="/"><a>Home</a></Link>
				</li>
				<li>
					<Link style={style} to="/about"><a>Create your PDF</a></Link>
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
				<CSSTransitionGroup
					transitionName="example"
					transitionAppear={true}
					transitionAppearTimeout={500}
					transitionEnter={false}
					transitionLeave={false}>
					<Navigation className='panel'/>
				</CSSTransitionGroup>
			</div> : <div className='menu'>
				<div className='btn' onClick={this.handleVisible}>Menu</div>
			</div>);
	}
}

export default Sidebar;
