import React from 'react';
import {CSSTransitionGroup} from 'react-transition-group';


class Testing extends React.Component {
	constructor(props) {
		super(props);
		this.state = {items: []};
	}

	handleAdd = () => {
		const newItems = this.state.items.concat([
			prompt('Enter some text')
		]);
		this.setState({items: newItems});
	};

	handleRemove = (i) => {
		let newItems = this.state.items.slice();
		newItems.splice(i, 1);
		this.setState({items: newItems});
	};

	render() {
		const items = this.state.items.map(item => (
			<div key={item}>
				<div>{item}</div>
				<button onClick={this.handleRemove}>Remove</button>


			</div>
		));


		return (

				<div>
					<button onClick={this.handleAdd}>Add task</button>


						{items}
				</div>

		);
	}
}

export default Testing;

