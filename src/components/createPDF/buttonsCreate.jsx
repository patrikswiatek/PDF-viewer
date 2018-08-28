import React from 'react';

import AddTitle from './buttons/titleAdd';
import AddContent from './buttons/contentAdd';
import ClearDoc from './buttons/clearDoc';
import AddImage from './buttons/imageAdd';
import ChangeFont from './buttons/fontChange';
import GetDone from './buttons/doneGet';



class Created extends React.Component {
	render() {



	  return(
      <div className='createButtons'>
        <AddTitle onClick={this.props.onClickTitle} />
        <AddContent onClick={this.props.onClickContent} />
        <ClearDoc onClick={this.props.onClickClear} />
        <AddImage onClick={this.props.onDropClick} />
        <ChangeFont onClick={this.props.onFontClick} />
        <GetDone onClick={this.props.onDoneClick} />
      </div>
	  );
	}
}

export default Created;
