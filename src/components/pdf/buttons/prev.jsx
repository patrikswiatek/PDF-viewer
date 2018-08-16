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
		return 	<button className='btn btn-primary marginL' tabIndex='0' id='prev' onClick={this.props.onClick} onKeyDown={this.handleKeyPressPrev}><img src={prev} /></button>
	}
}

export default Prev;


