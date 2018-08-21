import React from 'react';

import prev from './../../../media/prev.png';


class Prev extends React.Component {

	handleKeyPressPrev = (event) => {
		if (event.key === 'ArrowLeft') {
			document.getElementById('prev').click();
			console.log('left press here! ');
		}
	};

	render() {
		return <button className='btn btn-primary marginL' id='prev' onClick={this.props.onClick}>
			<img src={prev} alt=''/></button>
	}
}

export default Prev;


