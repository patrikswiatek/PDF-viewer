import React from 'react';

class ToggleOn extends React.Component {
	render () {
		return (
			<div>
				<button className='toggle-button' onClick={this.props.onClick} />
				<a>Light On</a>
			</div>
		)
	}
}

class ToggleOff extends React.Component {
	render() {
		return (
			<div>
				<button className='toggle-button' onClick={this.props.onClick} />
				<a>Light Off</a>
			</div>
		)
	}
}

class ToggleButton extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			toggleOn: false,
		}
	}

	handleToggleOff = () => {
		this.setState ({
			toggleOn: false,
		})
	};

	handleToggleOn = () => {
		this.setState ({
			toggleOn: true,
		})
	};

	onToggleClick = (e) => {
		e.preventDefault();

		this.setState ({
			toggle: !this.state.toggleOn,
		})
	};

	render() {

		let toggle;
		if (this.state.toggleOn) {
			toggle = <ToggleOn onClick={this.handleToggleOff}/>
		}
		else {
			toggle = <ToggleOff onClick={this.handleToggleOn}/>
		}



		return (
			<div>
				{toggle}
			</div>
		)
	};
}

export default ToggleButton;