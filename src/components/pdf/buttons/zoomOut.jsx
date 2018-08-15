import React from 'react';


class ZoomOut extends React.Component {

	handleKeyPressOut = (event) => {
		if (event.key === 'ArrowDown') {
			document.getElementById('zoomOut').click();
			console.log('down press here! ')
		}
	};

	render() {
		return 	<button className='margin' tabIndex='0' id="zoomOut" title="Zoom Out" onKeyDown={this.handleKeyPressOut} onClick={this.props.onClick}><a>Zoom out</a></button>
	}
}

export default ZoomOut;