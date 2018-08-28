import React from 'react';


class ChangeFont extends React.Component {
  render() {

    return <button className='btn btn-block btn-primary btn-add' onClick={this.props.onClick}>Change Font</button>;
  }
}

export default ChangeFont;
