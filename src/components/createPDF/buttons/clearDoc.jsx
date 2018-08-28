import React from 'react';


class ClearDoc extends React.Component {
  render() {

    return <button className='btn btn-block btn-primary btn-add' onClick={this.props.onClick}>Clear document</button>;
  }
}

export default ClearDoc;
