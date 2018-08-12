import React from 'react';
import file from './../pdf/info.pdf';
import PdfJsLib from 'pdfjs-dist';


class PDF extends React.Component {
	constructor(props) {
		super(props);
		this.pageNumber = React.createRef();
		this.pageCount = React.createRef();
		this.scaleSelect = React.createRef();


		this.state = {
			file: file, currPage: 1, document: null, scale: 0.4,
		}
	};

	goPrevious = (e) => {
		e.preventDefault();
		if (this.state.currPage <= 1) {
		} else {
			this.setState(prevState => ({
				currPage: prevState.currPage - 1,
			}));
		}
	};


	goNext = (e) => {
		e.preventDefault();
		if (this.state.currPage === this.state.file.numPages) {
		} else {
			this.setState(prevState => ({
				currPage: prevState.currPage + 1,
			}));
		}
	};


	zoom = e => {
		const document = this.state.document;
		const currPage = this.state.currPage;

		document.getPage(currPage).then((page) => {
			const viewport = page.getViewport(e);
			const {canvas} = this;
			const canvasContext = canvas.getContext('2d');
			canvas.height = viewport.height;
			canvas.width = viewport.width;
			page.render({
				canvasContext, viewport,
			}).promise.then(() => {
				console.log('finished');
			}, function (reason) {
				console.log('stopped ' + reason);
			});
		});
	};

	zoomIn = () => {

		let	newScale = this.state.scale * 1.25;
		this.setState({scale: newScale});
		this.zoom(newScale);
	};

	zoomOut = () => {
		let	newScale = this.state.scale * 0.75;
		this.setState({scale: newScale});
		this.zoom(newScale);
	};

	zoomSelect = () => {
		let scale;
		const scaleSelect = this.scaleSelect.current;
		scale = scaleSelect.options[scaleSelect.selectedIndex].value;
		this.zoom(scale);
	};


	componentDidMount() {
		const pdf = this.state.file;
		const currPage = this.state.currPage;
		PdfJsLib.GlobalWorkerOptions.workerSrc = '//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.0 .550/pdf.worker.js';
		PdfJsLib.getDocument(pdf).then((pd) => {
			if (this.props.onDocumentComplete) {
				this.props.onDocumentComplete(pd.pdfInfo.pages);
			}
			pd.getPage(currPage).then((page) => {
				let scale = 0.4;
				const viewport = page.getViewport(scale);
				const {canvas} = this;
				const canvasContext = canvas.getContext('2d');
				canvas.height = viewport.height;
				canvas.width = viewport.width;
				this.setState({document: pd});

				page.render({
					canvasContext, viewport,
				}).promise.then(function () {
					console.log('finished');
				}, function (reason) {
					console.log('stopped ' + reason);
				});
			});
			this.pageNumber.current.textContent = currPage;
			this.pageCount.current.textContent = pd.numPages;
		});
	}

	componentDidUpdate() {
		let renderTask = null;
		const document = this.state.document;
		const currPage = this.state.currPage;
		if (this.props.onDocumentComplete) {}
		document.getPage(currPage).then((page) => {
			if (renderTask !== null) {
				renderTask.cancel();
				return;
			}
			let scale = 0.4;
			const viewport = page.getViewport(scale);
			const {canvas} = this;
			const canvasContext = canvas.getContext('2d');
			canvas.height = viewport.height;
			canvas.width = viewport.width;

			page.render({
				canvasContext, viewport,
			}).promise.then(function () {
				console.log('finished');
			}, function (reason) {
				console.log('stopped ' + reason);
			});
		});
		this.pageNumber.current.textContent = currPage;
	}

	render() {


		return (<div id="holder">
			<div>
				<button id='prev' onClick={this.goPrevious}>Prev</button>
				<button id='next' onClick={this.goNext}>Next</button>
				&nbsp; &nbsp;
				<span>Page: <span id='page_num' ref={this.pageNumber}></span> / <span
					id='page_count' ref={this.pageCount}></span></span>
				&nbsp; &nbsp;
				<button id="zoomOut" title="Zoom Out" onClick={this.zoomOut}>Zoom out</button>
				<button id="zoomIn" title="Zoom In" onClick={this.zoomIn}>Zoom in</button>
			</div>

				<canvas ref={(canvas) => {
					this.canvas = canvas
				}}/>

		</div>);
	}

}

export default PDF;