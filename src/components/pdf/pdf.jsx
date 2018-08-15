import React from 'react';
import PdfJsLib from 'pdfjs-dist';
import file from './info.pdf';

import Buttons from './buttons';
import PageNum from './pageNum';


class PDF extends React.Component {
	constructor(props) {
		super(props);
		this.pageNumber = React.createRef();
		this.pageCount = React.createRef();

		this.state = {
			file: file, currPage: 1, document: null, scale: 0.75, pages: null,
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
		if (this.state.currPage >= this.state.pages) {
		} else {
			this.setState(prevState => ({
				currPage: prevState.currPage + 1,
			}));
		}
	};

	zoomIn = () => {
		let newScale = this.state.scale + 0.1;
		if (newScale < 1.10) {
			this.setState({scale: newScale});
		} else {
			alert('Max size!');
		}
	};

	zoomOut = () => {
		let newScale = this.state.scale - 0.1;
		if (newScale > 0.4) {
			this.setState({scale: newScale});
		} else {
			alert('Min size!');
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
				this.setState({document: pd, pages: pd.numPages});
				page.render({
					canvasContext, viewport,
				}).promise.then(() => {
					console.log('finished');
				}, reason => {
					console.log('stopped ' + reason);
				});
			});
			window.addEventListener('keyDown', (e) => {
				if (this.handleKeyPressNext) {
					e.preventDefault();
				}
			});

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
	}

	render() {
		return (<div id="holder">
			<Buttons/>
			<PageNum currPage={this.state.currPage} pages={this.state.pages}/>
			<div className='background'><div className='box'><canvas ref={(canvas) => {this.canvas = canvas}}/></div></div>
		</div>);
	}
}

export default PDF;
