import React from 'react';

import full from './../../../media/full.png';


class FullScr extends React.Component {
	render() {

		return <button className='btn btn-primary minR min' id="fullScr" onClick={this.props.onClick}><img src={full} alt=''/></button>;
	}
}

export default FullScr;