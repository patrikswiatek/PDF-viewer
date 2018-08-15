import React from 'react';


class Next extends React.Component {

	handleKeyPressNext = (event) => {
		if (event.key === 'ArrowRight') {
			document.getElementById('next').click();
			console.log('right press here! ')
		}
	};

	render() {
		return <button tabIndex='0' ref={(input) => {this.buttons = input}} id='next' onClick={this.props.onClick} onKeyDown={this.handleKeyPressNext}><a>Next</a></button>;
	}
}

export default Next;