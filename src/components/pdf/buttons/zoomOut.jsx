import React from 'react';
import zoomOut from './../../../media/zoomOut.png'

class ZoomOut extends React.Component {

	handleKeyPressOut = (event) => {
		if (event.key === 'ArrowDown') {
			document.getElementById('zoomOut').click();
			console.log('down press here! ')
		}
	};

	render() {
		return 	<button className='btn btn-primary marginR' id="zoomOut" onKeyDown={this.handleKeyPressOut} onClick={this.props.onClick}><img src={zoomOut} /></button>
	}
}

export default ZoomOut;