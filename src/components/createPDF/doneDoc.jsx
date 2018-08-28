import React from "react";

import Created from "./created";

import { Document } from "@react-pdf/renderer";


class Done extends React.Component {
  render() {

    return <Document className='doc'><Created/></Document>;
  }
}

class DoneDoc extends React.Component {
  render() {

    let done;
    if (this.props.doneOn === true) {
      done = <div><Done title={this.props.title} paragraph={this.props.paragraph}
                           onClick={this.props.onClick}/></div>;
    } else {
      done = <Created title={this.props.title} paragraph={this.props.paragraph}/>;
    }

    return <div className='borderView'>
      <div id='view'>{done}</div>
    </div>;
  }
}

export default DoneDoc;








