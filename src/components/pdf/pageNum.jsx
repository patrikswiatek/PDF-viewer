import React from 'react';


class PageNum extends React.Component {

	render() {
		return(
		<div className='page'>Page:
			<a id='page_num'>{this.props.currPage}</a>/<span id='page_count'>{this.props.pages}</span>
		</div>
		);
	}
}

export default PageNum;
