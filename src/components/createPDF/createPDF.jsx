import React from 'react';

import Fonts from './fonts'

import Dropzone from 'react-dropzone';

import cross from './../../media/cross.png';


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
    let drop;

		if (this.state.dropOn === false) {
		drop = <textarea id='createText'
							value={this.state.items} onChange={this.onChange}
							placeholder='You can type here'/>
		} else {
			drop = <section>
       <img className='cross' alt='' src={cross} onClick={this.onDropClick}/>
					 <div>
						 <Dropzone className="drop" onDrop={this.onDrop} disabled={this.state.disabled}>
							 <p>Drop picture or click here to pick it from your local storage</p>
						 </Dropzone>
					 </div>
				 </section>
		}

    if (this.state.fontOn === true) {
      font = <div><Fonts onClick={this.onFontClick} /></div>
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
							<button className='btn btn-block btn-primary btn-add' disabled>Done
							</button>
						</div>
							<form>
								{drop}
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
