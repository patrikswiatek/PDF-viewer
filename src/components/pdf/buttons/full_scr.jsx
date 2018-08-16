import React from 'react';
import full from './../../../media/full.png';


class FullScr extends React.Component {



	render() {

		return (
				<button className='btn btn-primary minR min' id="fullScr" onClick={this.props.toggleFullScr}><img src={full} /></button>

			);
	}
}

export default FullScr;