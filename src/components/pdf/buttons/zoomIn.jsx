import React from 'react';

import zoomIn from './../../../media/zoomIn.png';


class ZoomIn extends React.Component {

	handleKeyPressIn = (event) => {
		if (event.key === 'ArrowUp') {
			document.getElementById('zoomIn').click();
			console.log('up press here! ')
		}
	};

	render() {
		return <button className='btn btn-primary marginR' id="zoomIn" onClick={this.props.onClick}>
			<img src={zoomIn} alt=''/></button>;
	}
}

export default ZoomIn;