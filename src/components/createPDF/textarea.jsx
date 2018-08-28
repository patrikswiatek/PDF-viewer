import React from "react";


class TextArea extends React.Component {
  render() {

    return <textarea id='createText'
                     value={this.props.items} onChange={this.props.onChange}
                     placeholder='You can type here'/>
  }
}

export default TextArea;








