import React from 'react';
import filepdf from './../pdf/info.pdf'
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import '../Google API/api'

class PDF extends React.Component {
	state = {
		file: this.props.messages,
		numPages: null,
	};

	onFileChange = (event) => {
		this.setState({
			file: event.target.files[0],
		});
	};

	onDocumentLoadSuccess = ({ numPages }) => {
		this.setState({ numPages });
	};

	render() {
		const { file, numPages } = this.state;

		return (
			<div className="Example">
				<header>

				</header>
				<div className="Example__container">
					<div className="Example__container__document">
						<Document
							file={file}
							onLoadSuccess={this.onDocumentLoadSuccess}
							width={620}
						>
							{
								Array.from(
									new Array(numPages),
									(el, index) => (
										<Page
											key={`page_${index + 1}`}
											pageNumber={index + 1}
											width={620}
										/>
									),
								)
							}
						</Document>
					</div>
				</div>
			</div>
		);
	}
}


export default PDF