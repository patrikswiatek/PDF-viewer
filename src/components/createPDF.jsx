import React from "react";

import DoneDoc from "./createPDF/doneDoc";
import Buttons from "./createPDF/buttonsCreate";
import DropFonts from "./createPDF/drop_fonts";


class CreatePDF extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      title: "",
      paragraph: "",
      files: [],
      dropOn: false,
      fontOn: false,
      disabled: true,
      doneOn: true,
    };
  }

  onChange = (e) => {
    this.setState({ items: e.target.value });
  };

  //TEXT FUNCTIONS
  onClickTitle = () => {
    if (this.props.title !== this.state.title) {
      this.setState({ title: this.state.items, items: [] });
    }
  };

  onClickContent = () => {
    this.setState({ paragraph: this.state.paragraph + this.state.items, items: [] });
  };

  onClickClear = () => {
    this.setState({ title: "", paragraph: "" });
  };

  // DROP-ZONE FUNCTIONS
  onDrop = files => {
    this.setState({
      files
    });
  };

  onDropClick = (e) => {
    e.preventDefault();

    this.setState({
      dropOn: !this.state.dropOn, disabled: !this.state.disabled
    });
  };

  // FONT FUNCTION
  onFontClick = (e) => {
    e.preventDefault();

    this.setState({
      fontOn: !this.state.fontOn
    });
  };

  // DONE DOCUMENT FUNCTION
  onDoneClick = (e) => {
    e.preventDefault();

    this.setState({
      doneOn: !this.state.doneOn
    });
  };

  render() {
    console.log(this.state.files);

    return <div className='createPDF'>
      <div className='container createBox'>
        <div id='box2'>
          <div className='creator'>
            <Buttons onClickTitle={this.onClickTitle} onClickContent={this.onClickContent}
                     onClickClear={this.onClickClear} onDropClick={this.onDropClick}
                     onFontClick={this.onFontClick} onDoneClick={this.onDoneClick}/>
            {/*DROP ZONE (ON/OFF), FONTS (ON/OFF)*/}
            <DropFonts dropOn={this.state.dropOn} fontOn={this.state.fontOn} onDropClick={this.onDropClick} onDrop={this.onDrop} items={this.state.items} onChange={this.onChange} onFontClick={this.onFontClick}/>
          </div>
          {/*NORMAL VIEW OR PDF VIEW*/}
          <DoneDoc title={this.state.title} paragraph={this.state.paragraph}
                   doneOn={this.state.doneOn} onClick={this.onDoneClick}/>
        </div>
      </div>
    </div>;
  }
}

export default CreatePDF;
