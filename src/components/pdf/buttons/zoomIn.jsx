import React from 'react';


class ZoomIn extends React.Component {

	handleKeyPressIn = (event) => {
		if (event.key === 'ArrowUp') {
			document.getElementById('zoomIn').click();
			console.log('up press here! ')
		}
	};

	render() {
		return <button tabIndex='0' id="zoomIn" title="Zoom In" onKeyDown={this.handleKeyPressIn} onClick={this.props.onClick}><a>Zoom in</a></button>
	}
}

export default ZoomIn;