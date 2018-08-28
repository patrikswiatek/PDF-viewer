import React from "react";

import PdfJsLib from "pdfjs-dist";

import KeyboardHandlers from "./pdf/keyboardHandlers";
import ButtonsPDF from "./pdf/buttonsPDF";

import file from "../media/info.pdf";


class PDF extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      file: file, currPage: 1, document: null, scale: 1.5, pages: null, files: this.props.files
    };
  };

  goPrev = (e) => {
    e.preventDefault();
    if (this.state.currPage === 1) {
    } else {
      this.setState(prevState => ({
        currPage: prevState.currPage - 1
      }));
    }
  };

  goNext = (e) => {
    e.preventDefault();
    if (this.state.currPage >= this.state.pages) {
    } else {
      this.setState(prevState => ({
        currPage: prevState.currPage + 1
      }));
    }
  };

  zoomIn = (e) => {
    let newScale;
    e.preventDefault();
    newScale = this.state.scale + 0.1;
    if (newScale < 3) {
      this.setState({ scale: newScale });
    } else {
      alert("Max size!");
    }
  };

  zoomOut = (e) => {
    let newScale;
    e.preventDefault();
    newScale = this.state.scale - 0.1;
    if (newScale > 0.4) {
      this.setState({ scale: newScale });
    } else {
      alert("Min size!");
    }
  };

  toggleFullScr = (e) => {
    e.preventDefault();
    document.getElementById("canvas").classList.toggle("canvas");
    document.getElementById("box").classList.toggle("box");
    document.getElementById("buttons").classList.toggle("buttons");
    document.getElementById("nav").classList.toggle("nav");
  };

  onFilesChange = (files) => {
    this.setState({
      document: this.props.files
    });
  };

  componentDidMount() {
    const pdf = this.state.file;
    const currPage = this.state.currPage;
    PdfJsLib.GlobalWorkerOptions.workerSrc = "//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.0 .550/pdf.worker.js";
    PdfJsLib.getDocument(pdf).then((pd) => {
      if (this.props.onDocumentComplete) {
        this.props.onDocumentComplete(pd.pdfInfo.pages);
      }
      pd.getPage(currPage).then((page) => {
        let scale = this.state.scale;
        const viewport = page.getViewport(scale);
        const { canvas } = this;
        const canvasContext = canvas.getContext("2d");
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        this.setState({ document: pd, pages: pd.numPages });
        page.render({
          canvasContext, viewport
        }).promise.then(() => {
          console.log("finished");
        }, reason => {
          console.log("stopped " + reason);
        });
      });

    });
  }

  componentDidUpdate() {
    const document = this.state.document;
    const currPage = this.state.currPage;
    if (this.props.onDocumentComplete) {}
    document.getPage(currPage).then((page) => {
      let scale = this.state.scale;
      const viewport = page.getViewport(scale);
      const { canvas } = this;
      const canvasContext = canvas.getContext("2d");
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      page.render({
        canvasContext, viewport
      }).promise.then(() => {
        console.log("finished");
      }, reason => {
        console.log("stopped " + reason);
      });
    });
    if (this.props.onDocumentComplete) {}

  }

  render() {

    return <div className='pdf'>
      <KeyboardHandlers goNext={this.goNext} goPrev={this.goPrev} zoomIn={this.zoomIn}
                        zoomOut={this.zoomOut} toggleFullScr={this.toggleFullScr}/>
      <ButtonsPDF goNext={this.goNext} goPrev={this.goPrev} zoomIn={this.zoomIn}
                  zoomOut={this.zoomIn} toggleFullScr={this.toggleFullScr}
                  currPage={this.state.currPage} pages={this.state.pages}/>
      <div id='box'>
        <canvas id='canvas' ref={(canvas) => {
          this.canvas = canvas;
        }}/>
      </div>

    </div>;
  }
}

export default PDF;
