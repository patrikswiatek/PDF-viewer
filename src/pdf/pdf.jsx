import React from 'react';
import file from './eg.pdf';
import PdfJsLib from 'pdfjs-dist';
import './../components/Menu/menu';


class PDF extends React.Component {
	constructor(props) {
		super(props);
		this.pageNumber = React.createRef();
		this.pageCount = React.createRef();

		this.state = {
			file: file, currPage: 1, document: null, scale: 0.75,
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
		if (this.state.currPage >= this.state.document.numPages) {
		} else {
			this.setState(prevState => ({
				currPage: prevState.currPage + 1,
			}));
		}
	};

	handleKeyPressPrev = (event) => {
		if(event.key === 'ArrowLeft'){
			document.getElementById('prev').click();
			console.log('left press here! ')
		}
	};

	handleKeyPressNext = (event) => {
		if(event.key === 'ArrowRight'){
			document.getElementById('next').click();
			console.log('right press here! ')
		}
	};

	handleKeyPressIn = (event) => {
		if(event.key === 'ArrowUp'){
			document.getElementById('zoomIn').click();
			console.log('up press here! ')
		}
	};

	handleKeyPressOut = (event) => {
		if(event.key === 'ArrowDown'){
			document.getElementById('zoomOut').click();
			console.log('down press here! ')
		}
	};

	zoomIn = () => {
		let newScale = this.state.scale + 0.1;
		if (newScale < 1.10) {
			this.setState({scale: newScale});
		} else {
			prompt('Max size!');
		}
	};

	zoomOut = () => {
		let	newScale = this.state.scale - 0.1;
		if (newScale > 0.4) {
			this.setState({scale: newScale});
		} else {
			prompt('Min size!');
		}
	};

	getFull = () => {

	};

	componentDidMount() {
		let renderTask = null;  
		const pdf = this.state.file;
		const currPage = this.state.currPage;
		PdfJsLib.GlobalWorkerOptions.workerSrc = '//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.0 .550/pdf.worker.js';
		PdfJsLib.getDocument(pdf).then((pd) => {
			if (this.props.onDocumentComplete) {
				this.props.onDocumentComplete(pd.pdfInfo.pages);
			}
			pd.getPage(currPage).then((page) => {
				 if (renderTask !== null) {
					 renderTask.cancel();
					 return;
				 }
				let scale = this.state.scale;
				const viewport = page.getViewport(scale);
				const {canvas} = this;
				const canvasContext = canvas.getContext('2d');
				canvas.height = viewport.height;
				canvas.width = viewport.width;
				this.setState({document: pd});
				page.render({
					canvasContext, viewport,
				}).promise.then(() => {
					console.log('finished');
				}, reason => {
					console.log('stopped ' + reason);
				});
			});
			this.pageNumber.current.textContent = currPage;
			this.pageCount.current.textContent = pd.numPages;
			this.buttons.focus();
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
			let scale = this.state.scale;
			const viewport = page.getViewport(scale);
			const {canvas} = this;
			const canvasContext = canvas.getContext('2d');
			canvas.height = viewport.height;
			canvas.width = viewport.width;

			page.render({
				canvasContext, viewport,
			}).promise.then(() => {
				console.log('finished');
			}, reason => {
				console.log('stopped ' + reason);
			});
		});
		this.pageNumber.current.textContent = currPage;
	}

	render() {

		return (<div id="holder">
			<div className='background'>
			<div className='buttons' >
				<button className='margin' tabIndex='0' id='prev' onClick={this.goPrevious} onKeyDown={(event) => this.handleKeyPressPrev(event)}><a>Prev</a></button>
			<button tabIndex='0' ref={(input) => { this.buttons = input; }} id='next' onClick={this.goNext} onKeyDown={(event) => this.handleKeyPressNext(event)}><a>Next</a></button>
				&nbsp; &nbsp;
				<span className='page'>Page: <a id='page_num' ref={this.pageNumber}></a> / <span
					id='page_count' ref={this.pageCount}></span></span>
				&nbsp; &nbsp;
				<button className='margin' tabIndex='0' id="zoomOut" title="Zoom Out" onKeyDown={(event) => this.handleKeyPressOut(event)} onClick={this.zoomOut} ><a>Zoom out</a></button>
				<button tabIndex='0' id="zoomIn" title="Zoom In" onKeyDown={(event) => this.handleKeyPressIn(event)} onClick={this.zoomIn}><a>Zoom in</a></button>
			</div>

				<div className='box'>
					<canvas ref={(canvas) => {
						this.canvas = canvas
					}}/>
				</div>
			</div>
		</div>);
	}

}

export default PDF;
