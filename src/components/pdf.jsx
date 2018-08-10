import React from 'react';
import {Document, Page} from 'react-pdf/dist/entry.webpack';
import pdffile from './../pdf/info.pdf';
import PdfJsLib from 'pdfjs-dist';


class PDF extends React.Component {

	state = {
		file: pdffile, currPage: 1, pages: null,

	};
	goPrevious = (e) => {
		e.preventDefault();
		if (this.state.currPage <= 1) {
			this.state.currPage--;
			this.state.file.getPage(this.state.currPage);
		}
	};

	goNext = (e) => {
		e.preventDefault();
			if (this.state.currPage >= this.state.file.numPages) {
				this.state.currPage++;
				this.state.file.getPage(this.state.currPage);
			}
		};

		zoom = newScale => {
			// Using promise to fetch the page
			this.state.file.getPage(this.state.currPage).then(function (page) {
				var viewport = page.getViewport(newScale);
				const {canvas} = this;
				canvas.height = viewport.height;
				canvas.width = viewport.width;
				// Render PDF page into canvas context
				var renderContext = {
					canvasContext: canvas.getContext('2d'),
					viewport: viewport
				};
				page.render(renderContext);
			});
		}

		zoomIn = () => {
			var scaleSelect = document.getElementById("scaleSelect");
			var last = scaleSelect.options.length - 1;
			if (scaleSelect.selectedIndex < last) {
				const scale = scaleSelect.options[scaleSelect.selectedIndex + 1].value;
				scaleSelect.selectedIndex += 1;
				this.zoom(scale);
			}
		}

		zoomOut = () => {
			var scaleSelect = document.getElementById("scaleSelect");
			var last = scaleSelect.options.length - 1;
			if (scaleSelect.selectedIndex > 0) {
				const scale = scaleSelect.options[scaleSelect.selectedIndex - 1].value;
				scaleSelect.selectedIndex -= 1;
				this.zoom(scale);
			}
		}

		zoomSelect = () => {
				var scaleSelect = document.getElementById("scaleSelect");
				const scale = scaleSelect.options[scaleSelect.selectedIndex].value;
				this.zoom(scale);
			};


	componentDidMount() {
		PdfJsLib.GlobalWorkerOptions.workerSrc = '//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.0.550/pdf.worker.js';
		PdfJsLib.getDocument(this.state.file).then((pdf) => {

			if (this.props.onDocumentComplete) {
				this.props.onDocumentComplete(pdf.pdfInfo.pages);
			}
			this.setState({
				file: pdf,
			});

			pdf.getPage(this.state.currPage).then((page) => {

				const viewport = page.getViewport(0.5);

				const {canvas} = this;
				const canvasContext = canvas.getContext('2d');
				canvas.height = viewport.height;
				canvas.width = viewport.width;

				const renderContext = {
					canvasContext, viewport,
				};
				this.setState({
					currPage: page,
				});
				page.render(renderContext);
			});
			document.getElementById('page_num').textContent = this.props.currPage;
			document.getElementById('page_count').textContent = pdf.numPages;
		});
	}

	componentWillReceiveProps(newProps) {
		if (newProps.page !== this.props.page) {
			this.state.pdf.getPage(newProps.page).then((page) => {
				const scale = 1.5;
				const viewport = page.getViewport(scale);

				const {canvas} = this;
				const canvasContext = canvas.getContext('2d');
				canvas.height = viewport.height;
				canvas.width = viewport.width;

				const renderContext = {
					canvasContext, viewport,
				};
				page.render(renderContext);
			});
		}
	}


	render() {



		return (
			<div id="holder">
			<hr />
				<div>
					<button id='prev' onClick={this.goPrevious}>Prev</button>
				<button id='next' onClick={this.goNext}>Next</button>
			&nbsp; &nbsp;
			<span>Page: <span id='page_num'></span> / <span id='page_count'></span></span>
	&nbsp; &nbsp;
		<button id="zoomOut" title="Zoom Out" onClick={this.zoomOut}></button>
		<button id="zoomIn" title="Zoom In" onClick={this.zoomIn}></button>
		<span id="scaleSelectContainer">
 <select data-style="btn-primary" id="scaleSelect" title="Zoom" tabIndex="23" onClick={this.zoomSelect}>
 <option title="" value="0.5" >50%</option>
		<option title="" value="0.75" >75%</option>
		<option title="" value="1">100%</option>
		<option title="" value="1.25">125%</option>
		<option title="" value="1.5">150%</option>
		<option title="" value="2">200%</option>
		<option title="" value="3">300%</option>
		<option title="" value="4">400%</option>
	</select>
	</span>
	</div>
	<div className='box'>
		<canvas ref={(canvas) => {
			this.canvas = canvas;
		}}/>
	</div>
	</div>);
	}
}


export default PDF;