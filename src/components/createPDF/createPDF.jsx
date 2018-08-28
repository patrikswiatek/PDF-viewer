import React from 'react';

import Fonts from './fonts'

import Dropzone from 'react-dropzone';


class CreatePDF extends React.Component {
	constructor(props) {
		super(props);

		this.state = {items: [], title: '', paragraph: '', files: [], dropOn: false, fontOn: false, disabled: true};
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

	// DROPZONE FUNCTIONS
	onDrop = files => {
    this.setState({
      files
    });
  };

	onDropClick = (e) => {
		e.preventDefault();

		this.setState ({
			dropOn: !this.state.dropOn, disabled: !this.state.disabled,
		})
	};

	// FONT FUNCTIONS
	onFontClick = (e) => {
		e.preventDefault();

		this.setState ({
			fontOn: !this.state.fontOn,
		})
	};

	render() {
		let font;
    let dropzone;

    const style = {
      background: 'deepskyblue',
      width: '100%',
      height: '45.4vh',
			margin: '0',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			padding: '15%',
			color: 'black',
			border: '4px dashed blue',
			fontSize: '0.9rem',
			zIndex: '5',
			textAlign: 'center',
    };

		if (this.state.dropOn === false) {
		dropzone = <textarea className='createText' id='createText'
							value={this.state.items} onChange={this.onChange}
							placeholder='You can type here'/>
		} else {
			dropzone = <section>
					 <div className="dropzone">
						 <Dropzone style={style}  onDrop={this.onDrop} disabled={this.state.disabled}>
							 <p>Drop picture or click here to pick it from your local storage</p>
						 </Dropzone>
					 </div>
				 </section>
		}

    if (this.state.fontOn === true) {
		font = <Fonts />
		}

		console.log(this.state.files);
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
							<button  className='btn btn-block btn-primary btn-add' onClick={this.onDropClick} >Add Image</button>

              <button className='btn btn-block btn-primary btn-add' onClick={this.onFontClick}>Change Font
              </button>
							<button className='btn btn-block btn-primary btn-add' disabled>Smt2
							</button>
						</div>
							<form>
								{dropzone}
								{font}
							</form>
					</div>
					<div className='borderView'>
					<div id='view'>
							<h3>{this.state.title}</h3>
							<p>{this.state.paragraph}</p>
							{this.state.file}
					 </div>
					</div>
				</div>
			</div>
		</div>;
	}
}

export default CreatePDF;
