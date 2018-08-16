import React from 'react';


class ZoomOut extends React.Component {

	handleKeyPressOut = (event) => {
		if (event.key === 'ArrowDown') {
			document.getElementById('zoomOut').click();
			console.log('down press here! ')
		}
	};

	render() {
		return 	<button className='btn btn-primary marginR' id="zoomOut" onKeyDown={this.handleKeyPressOut} onClick={this.props.onClick}>Zoom out</button>
	}
}

export default ZoomOut;