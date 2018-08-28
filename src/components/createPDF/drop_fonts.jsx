import React from 'react';
import DropZone from './dropZone';
import TextArea from './textarea';
import Fonts from './fonts';


class DropFonts extends React.Component {
	render() {

    let drop, font;
    if (this.props.dropOn === false) {
      drop = <TextArea value={this.props.items} onChange={this.props.onChange}/>;
    } else {
      drop = <DropZone onClick={this.props.onDropClick} onDrop={this.props.onDrop} disabled={this.props.disabled}/>
    }

    if (this.props.fontOn === true) {
      font = <div><Fonts onClick={this.props.onFontClick}/></div>;
    }

	  return <form>{drop}{font}</form>;
	}
}

export default DropFonts;
