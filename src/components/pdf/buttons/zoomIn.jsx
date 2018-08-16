import React from 'react';
import zoomIn from './../../../media/zoomIn.png'

class ZoomIn extends React.Component {

	handleKeyPressIn = (event) => {
		if (event.key === 'ArrowUp') {
			document.getElementById('zoomIn').click();
			console.log('up press here! ')
		}
	};

	render() {
		return <button className='btn btn-primary marginR' id="zoomIn" onKeyDown={this.handleKeyPressIn} onClick={this.props.onClick}><img src={zoomIn} /></button>;
	}
}

export default ZoomIn;