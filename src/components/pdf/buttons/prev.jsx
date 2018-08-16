import React from 'react';


class Prev extends React.Component {

	handleKeyPressPrev = (event) => {
		if (event.key === 'ArrowLeft') {
			document.getElementById('prev').click();
			console.log('left press here! ');
		}
	};

	render() {
		return 	<button className='btn btn-primary marginL' tabIndex='0' id='prev' onClick={this.props.onClick} onKeyDown={this.handleKeyPressPrev}>Prev</button>
	}
}

export default Prev;


