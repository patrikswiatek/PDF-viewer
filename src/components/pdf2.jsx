import React from 'react'
import {Document, Page} from 'react-pdf/dist/entry.webpack';
import pdffile from './../pdf/info.pdf';
import PDFJS from 'pdfjs-dist';




class PDF2 extends React.Component {
	constructor(props){
	super(props);

		var pdfDoc = null;
		var pageNum;

}
	window.onload = function () {
	const url = "./../pdf/info.pdf";
	renderPDF(url);
};

	renderPDF = url => {
		const pdfDoc = null,
			pageNum = 1,
			scale = 1.5,
			canvas = document.getElementById('the-canvas'),
			ctx = canvas.getContext('2d'),
			PDFJS.disableWorker = true;

		});
	}

	componentDidMount() {
	PDFJS.getDocument(url).then(function getPdf(_pdfDoc) {
		pdfDoc = _pdfDoc;
		renderPage(pageNum);

PDFJS.disableWorker = true;
function base64ToUint8Array(base64) {//base64 is an encoded byte Array sent from server-side
	var raw = atob(base64); //This is a native function that decodes a base64-encoded string.
	var uint8Array = new Uint8Array(new ArrayBuffer(raw.length));
	for (var i = 0; i < raw.length; i++) {
		uint8Array[i] = raw.charCodeAt(i);
	}
	return uint8Array;
}

function renderPage(num) {
	// Using promise to fetch the page
	pdfDoc.getPage(num).then(function (page) {
		var viewport = page.getViewport(scale);
		canvas.height = viewport.height;
		canvas.width = viewport.width;
		// Render PDF page into canvas context
		var renderContext = {
			canvasContext: ctx,
			viewport: viewport
		};
		page.render(renderContext);
	});
	// Update page counters
	document.getElementById('page_num').textContent = pageNum;
	document.getElementById('page_count').textContent = pdf.numPages;
}

}

	render() {
	return (

	)

	}
}
