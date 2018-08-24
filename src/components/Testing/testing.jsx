import React from 'react';

import Files from 'react-files';
import logo from './../../media/icon.svg';


class Testing extends React.Component {

	onFilesError = (error, file) => {
		console.log('error code ' + error.code + ': ' + error.message)
	};

	filesRemoveOne = (file) => {
		this.refs.files.removeFile(file)
	};

	render() {

		return (<div>
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
			<img src={logo} alt='' />
			</div>)
	}
}

export default Testing;