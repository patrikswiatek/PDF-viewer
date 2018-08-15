import React from 'react';

import Next from './buttons/next';
import Prev from './buttons/prev';
import ZoomIn from './buttons/zoomIn';
import ZoomOut from './buttons/zoomOut';

class Buttons extends React.Component {

	render() {
		return(
			<div className='buttons'>
				<Next/>
				<Prev/>
				<ZoomIn/>
				<ZoomOut/>
			</div>
		);
	}
}

export default Buttons;
