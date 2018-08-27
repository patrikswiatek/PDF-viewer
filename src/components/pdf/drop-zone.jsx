import React from 'react';

import Files from 'react-files';


class DropZone extends React.Component {
	constructor(props) {
		super(props);

		this.state = {Drop: false};
	}

	handleToggleDrop = () => {
		this.setState({Drop: !this.state.Drop});
	};

	onFilesError = (error, file) => {
		console.log('error code ' + error.code + ': ' + error.message)
	};

	filesRemoveOne = (file) => {
		this.refs.files.removeFile(file)
	};

	render() {
		let drop;
		if (this.state.drop === true) {
			drop = <div>
				<h1>Example 1 - List</h1>
				<Files
					ref='files'
					className='files-dropzone-list'
					onChange={this.props.onChange}
					onError={this.onFilesError}
					multiple
					maxFiles={1}
					maxFileSize={10000000}
					minFileSize={0}
					clickable
				>
					Drop files here or click to upload
				</Files>
			</div>
		}

		return <div>{drop}</div>;
	}
}

