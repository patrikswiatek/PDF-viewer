import React from 'react';


class GetDone extends React.Component {
  render() {

    return <button className='btn btn-block btn-primary btn-add' onClick={this.props.onClick}>Done</button>;
  }
}

export default GetDone;
