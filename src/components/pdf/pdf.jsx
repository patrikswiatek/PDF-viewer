import React from 'react';

import PdfJsLib from 'pdfjs-dist';

import PageNum from './pageNum';
import Next from './buttons/next';
import Prev from './buttons/prev';
import ZoomIn from './buttons/zoomIn';
import ZoomOut from './buttons/zoomOut';

import file from './info.pdf';


class PDF extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			file: file, currPage: 1, document: null, scale: 0.75, pages: null,
		}
	};

	goPrev = (e) => {
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
		const pdf = this.state.file;
		const currPage = this.state.currPage;
		PdfJsLib.GlobalWorkerOptions.workerSrc = '//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.0 .550/pdf.worker.js';
		PdfJsLib.getDocument(pdf).then((pd) => {
			if (this.props.onDocumentComplete) {
				this.props.onDocumentComplete(pd.pdfInfo.pages);
			}
			pd.getPage(currPage).then((page) => {
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
		});
	}

	componentDidUpdate() {
		const document = this.state.document;
		const currPage = this.state.currPage;
		if (this.props.onDocumentComplete) {}
		document.getPage(currPage).then((page) => {
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
		return (
			<div className='pdf'>
				<div className='buttons'>
					<Next onClick={this.goNext}/>
					<Prev onClick={this.goPrev}/>
					<PageNum currPage={this.state.currPage} pages={this.state.pages}/>
					<ZoomIn onClick={this.zoomIn}/>
					<ZoomOut onClick={this.zoomOut}/>
				</div>
				<div className='box'>
					<canvas ref={(canvas) => {this.canvas = canvas}}/>
				</div>
			</div>);
	}
}

export default PDF;
