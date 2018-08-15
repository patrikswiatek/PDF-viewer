import React from 'react';


class Prev extends React.Component {

	handleKeyPressPrev = (event) => {
		if (event.key === 'ArrowLeft') {
			document.getElementById('prev').click();
			console.log('left press here! ');
		}
	};

	render() {
		return 	<button className='margin' tabIndex='0' id='prev' onClick={this.props.onClick} onKeyDown={this.handleKeyPressPrev}><a>Prev</a></button>
	}
}

export default Prev;


