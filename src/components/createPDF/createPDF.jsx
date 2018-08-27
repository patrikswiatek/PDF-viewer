import React from 'react';

import Files from 'react-files';


class CreatePDF extends React.Component {
	constructor(props) {
		super(props);
		this.textRef = React.createRef();

		this.state = {items: [], title: '', paragraph: ''};
	}

	onClickTitle = () => {
		if (this.props.title !== this.state.title) {
			this.setState({title: this.state.items, items: []});
		}
	};

	onClickContent = () => {
		this.setState({paragraph: this.state.paragraph + this.state.items, items: []});
	};

	onClickClear = () => {
		this.setState({title: '', paragraph: ''});
	};

	onChange = (e) => {
		this.setState({items: e.target.value});
	};


	render() {

		return <div className='createPDF'>
			<div className='container createBox'>
				<div id='box2'>
					<div className='creator'>
						<div className='createButtons'>
							<button className='btn btn-block btn-primary btn-add'
							        onClick={this.onClickTitle}>Add Title
							</button>
							<button className='btn btn-block btn-primary btn-add'
							        onClick={this.onClickContent}>Add Content
							</button>
							<button className='btn btn-block btn-primary btn-add'
							        onClick={this.onClickClear}>Clear document
							</button>
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
							<a href=''  className='btn btn-block btn-primary btn-add'>Add Image</a>
              </Files>
              <button className='btn btn-block btn-primary btn-add' disabled>Font
              </button>
							<button className='btn btn-block btn-primary btn-add' disabled>Smt2
							</button>
						</div>
						<form>
							<textarea className='createText' ref={this.textRef}
							          value={this.state.items} onChange={this.onChange}
							          placeholder='You can type here'/>
						</form>
					</div>
					<div className='borderView'>
						<div className='view'>
							<h3>{this.state.title}</h3>
							<p>{this.state.paragraph}</p>
						</div>
					</div>
				</div>
			</div>
		</div>;
	}
}

export default CreatePDF;


