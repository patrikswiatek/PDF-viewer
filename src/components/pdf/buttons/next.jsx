import React from 'react';

import next from './../../../media/next.png'


class Next extends React.Component {

	handleKeyPressNext = (event) => {
		if (event.key === 'ArrowRight') {
			document.getElementById('next').click();
			console.log('right press here! ')
		}
	};

	render() {

		return <button id='next' className='marginL btn btn-primary' onClick={this.props.onClick}><img src={next} alt='' /></button>;
	}
}

export default Next;