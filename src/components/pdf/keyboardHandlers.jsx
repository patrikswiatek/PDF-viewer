import React from "react";
import KeyboardEventHandler from "react-keyboard-event-handler";


class KeyboardHandlers extends React.Component {
  render() {

    return (<div>
      <KeyboardEventHandler handleKeys={["right"]} onKeyEvent={(right, e) => this.props.goNext(e)}/>
      <KeyboardEventHandler handleKeys={["left"]} onKeyEvent={(left, e) => this.props.goPrev(e)}/>
      <KeyboardEventHandler handleKeys={["up"]} onKeyEvent={(up, e) => this.props.zoomIn(e)}/>
      <KeyboardEventHandler handleKeys={["down"]} onKeyEvent={(down, e) => this.props.zoomOut(e)}/>
      <KeyboardEventHandler handleKeys={["tab"]} onKeyEvent={(tab, e) => this.props.toggleFullScr(e)}/>
    </div>);
  }
}

export default KeyboardHandlers;
