import React from 'react';


class AddParagraphList extends React.Component {
	render() {
		return (
			<div className="container">
				<ul className="list-group text-center">
					{
						this.props.paragraph.map((key) => {
							return <li className="list-group-item list-group-item-info">{this.props.paragraph[key]}</li>})
					}
				</ul>
			</div>
		);
	}
}

class AddThisParagraph extends React.Component {
	createParagraph = (e) => {
		e.preventDefault();
		let paragraph = this.refs.paragraphNumber.value;
		if(typeof paragraph === 'string' && paragraph.length > 0) {
			this.props.addParagraph(paragraph);
			this.refs.paragraphForm.reset();
		}
	};

	render() {
		return(
			<form className="form-inline" ref="paragraphForm" onSubmit={this.createParagraph}>
				<div className="form-group">
					<label htmlFor="paragraph">
						Fruit Name
						<input type="text" id="paragraph" placeholder="e.x.lemmon" ref="paragraphNumber" className="form-control" />
					</label>
				</div>
				<button type="submit" className="btn btn-primary">Add paragraph</button>
			</form>
		)
	}
}

class AddParagraph extends React.Component {
	constructor(props){
		super(props);

		this.state = ({
			paragraph: '',
		            })

}


	getInitialState = () => {
		return (
			{
				paragraph: {
					'fruit-1' : 'orange',
					'fruit-2' : 'apple'
				}
			}
		)
	};

	addParagraph = () => {
		this.setState({paragraph: this.state.paragraph});
	};

	render() {
		return (
			<div className="component-wrapper">
				<AddParagraphList pargraphs={this.state.paragraph} />
				<AddThisParagraph addParagraph={this.addParagraph} />
			</div>
		);
	}
}

