import React from 'react';
import './../pdf';

class Next extends React.Component {

	handleKeyPressNext = (event) => {
		if (event.key === 'ArrowRight') {
			document.getElementById('next').click();
			console.log('right press here! ')
		}
	};

	render() {
		return <button tabIndex='0' id='next' className='margin btn btn-primary' onClick={this.props.onClick} onKeyDown={this.handleKeyPressNext}>Next</button>;
	}
}

export default Next;