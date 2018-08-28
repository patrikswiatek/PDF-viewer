import React from "react";
import Dropzone from "react-dropzone";
import cross from "./../../media/cross.png";


class DropZone extends React.Component {
  render() {

    return <section>
      <img className='cross' alt='' src={cross} onClick={this.props.onClick}/>
      <div>
        <Dropzone className="drop" onDrop={this.props.onDrop} disabled={this.props.disabled}>
          <p>Drop picture or click here to pick it from your local storage</p>
        </Dropzone>
      </div>
    </section>
  }
}

export default DropZone;








