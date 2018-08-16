import React from 'react';


class PageNum extends React.Component {

	render() {
		return(
			<button className='btn btn-primary minL min disabled' id="fullScr" onClick={this                   .handleFullScr}><a id='page_num'>{this.props.currPage}</a>/<span id='page_count'>{this.props.pages}</span></button>
		);
	}
}

export default PageNum;
