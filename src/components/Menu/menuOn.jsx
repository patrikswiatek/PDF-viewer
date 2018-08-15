import React from 'react';
import {CSSTransitionGroup} from 'react-transition-group';
import Navigation from './navigation';


class MenuOn extends React.Component {
	render () {
		return (
			<div className='menu'>
				<button className='btnMenu' onClick={this.props.onClick}>Menu</button>
				<CSSTransitionGroup
					transitionName="example"
					transitionAppear={true}
					transitionAppearTimeout={500}
					transitionEnter={false}
					transitionLeave={false}>
					<Navigation className='panel'/>
				</CSSTransitionGroup>
			</div>
		)
	}
}

export default MenuOn;



