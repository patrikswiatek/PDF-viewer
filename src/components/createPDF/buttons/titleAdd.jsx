import React from 'react';


class AddTitle extends React.Component {
  render() {

    return <button className='btn btn-block btn-primary btn-add' onClick={this.props.onClick}>Add Title</button>;
  }
}

export default AddTitle;
