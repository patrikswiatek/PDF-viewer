import React from 'react';


class AddImage extends React.Component {
  render() {

    return <button className='btn btn-block btn-primary btn-add' onClick={this.props.onClick}>Add Image</button>;
  }
}

export default AddImage;
