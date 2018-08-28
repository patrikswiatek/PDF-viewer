import React from "react";
import FullScr from "./buttons/full_scr";
import Next from "./buttons/next";
import Prev from "./buttons/prev";
import ZoomIn from "./buttons/zoomIn";
import ZoomOut from "./buttons/zoomOut";
import PageNum from "./buttons/pageNum";


class ButtonsPDF extends React.Component {
  render() {

    return (<div id='buttons'>
      <Prev onClick={this.props.goPrev}/>
      <Next onClick={this.props.goNext}/>
      <PageNum currPage={this.props.currPage} pages={this.props.pages}/>
      <FullScr onClick={this.props.toggleFullScr}/>
      <ZoomOut onClick={this.props.zoomOut}/>
      <ZoomIn onClick={this.props.zoomIn}/>
    </div>);
  }
}

export default ButtonsPDF;
