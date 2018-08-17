import React from 'react';
import {Shortcuts, ShortcutManager} from 'react-shortcuts'


const keymap = {
	BOX: {
		MOVE_LEFT: ['left', 'a'],
		MOVE_RIGHT: ['right', 'd'],
		MOVE_UP: ['up', 'w'],
		MOVE_DOWN: ['down', 's'],
	}
};

const shortcutManager = new ShortcutManager(keymap);


const Box = ({x, y, color, index, onMoveRequest}) => {
	const style = {
		width: "100px",
		height: "100px",
		backgroundColor: color,
		textAlign: "center",
		lineHeight: "100px",
		position: 'absolute',
		top: `${y + index * 120}px`,
		left: `${x + index * 120}px`,
	};

	const jump = 10;
	const handleMove = (action) => {
		switch(action) {
			case 'MOVE_LEFT':
				onMoveRequest({x: x - jump}, index);
				break;
			case 'MOVE_RIGHT':
				onMoveRequest({x: x + jump}, index);
				break;
			case 'MOVE_UP':
				onMoveRequest({y: y - jump}, index);
				break;
			case 'MOVE_DOWN':
				onMoveRequest({y: y + jump}, index);
				break;
		}
	};

	return (
		<Shortcuts
			name="BOX"
			handler={handleMove}
		>
			<div style={style}>
				{index + 1}
			</div>
		</Shortcuts>
	)
};


class Testing extends React.Component {
	static childContextTypes = {
		shortcuts: {},
	};

	state = {
		boxes: this.getBoxes()
	};

	getBoxes() {
		const boxes = [
			{ x: 70, y: 90 },
			{ x: 70, y: 90 },
			{ x: 70, y: 90 },
			{ x: 70, y: 90 },
			{ x: 70, y: 90 },
		];
		return boxes.map(box => {
			box.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
			return box;
		})
	}

	getChildContext() {
		return {shortcuts: shortcutManager};
	}

	handleMove = (newPosition, index) => {
		const boxes = this.state.boxes.slice();
		boxes[index] = Object.assign(boxes[index], newPosition);
		this.setState({boxes})
	};

	render() {
		return (
			<div>
				{this.state.boxes.map(({x, y, color}, index) =>
					<Box
						key={index}
						color={color}
						index={index}
						x={x}
						y={y}
						onMoveRequest={this.handleMove}
					/>
				)}
			</div>
		)
	}
}

export default Testing;