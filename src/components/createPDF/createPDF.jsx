import React from 'react';


class CreatePDF extends React.Component {
	constructor(props) {
		super(props);
		this.state = {items: []};
	}

	onChange = (e) => {
		this.setState({items: e.target.value});
	};

	render() {
		return <div className='createPDF'>
			<div className='container createBox'>
				<div className='creator'>
					<div className='createButtons'>
						<button className='btn btn-block btn-primary btn-add'>Add title</button>
						<button className='btn btn-block btn-primary btn-add'>Add paragraph</button>
						<button className='btn btn-block btn-primary btn-add'>Add image</button>
					</div>
					<form>
						<textarea value={this.state.items} onChange={this.onChange}
						          placeholder='You can write here'/>
					</form>
				</div>
				<div className='border'>
					<div className='view'>
						<h3>Your PDF</h3>
						<p>{this.state.items}</p>
					</div>
				</div>
			</div>
		</div>;
	}
}

export default CreatePDF;


