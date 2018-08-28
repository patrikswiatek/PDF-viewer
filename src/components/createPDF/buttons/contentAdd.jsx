import React from 'react';


class AddContent extends React.Component {
  render() {

    return <button className='btn btn-block btn-primary btn-add' onClick={this.props.onClick}>Add Content</button>;
  }
}

export default AddContent;
