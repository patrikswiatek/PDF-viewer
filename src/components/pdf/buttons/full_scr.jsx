import React from 'react';



class FullScr extends React.Component {



	render() {

		return (
				<button className='btn btn-primary minR min' id="fullScr" onClick={this.props.toggleFullScr}>Full Scr</button>

			);
	}
}

export default FullScr;