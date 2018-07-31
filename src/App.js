import React from 'react';
import Main from './components/main';
import About from './components/about';
import Menu from './components/menu';
import {StyleSheet, css} from 'aphrodite';

const nav = [{
	id: 1, label: 'Home', path: {Main}
}, {id: 2, label: 'Discover', path: {About}}, {
	id: 3, label: 'Review', path: '/review'
},];

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			active: false,
		}
	}


	render() {
		const location = window.location.pathname;
		return (<div className='container'>
			<Menu
				onClick={() => this.setState({active: false})}
				active={this.state.active}
				nav={nav}
				navWrapperClassName={css(styles.navWrapper)}
				appClassName={css(styles.appClass)}
				navLinkStyle={{color: '#000'}}
				navClassName={css(styles.robotoMono)}>
				<div className={css(styles.app)}>
					<div className={css(styles.helloWorld)}>
						<i className={css(styles.hamburgerIcon) + " fa fa-bars"}
						   aria-hidden="true"
						   onClick={() => this.setState({active: !this.state.active})}></i>
						<div className={css(styles.path)}>
							path: {location}
						</div>
					</div>
				</div>
			</Menu>
		</div>);
	}
}


const styles = StyleSheet.create({
	appClass: {
		height: '100vh', background: '#000',
	}, app: {
		minHeight: '100vh', background: '#000', fontFamily: "'Roboto Mono', monospace",
	}, robotoMono: {
		fontFamily: "'Roboto Mono', monospace",
	}, linkClassName: {
		color: '#272d34'
	}, helloWorld: {
		fontSize: '14px',
		background: 'rgba(0, 0, 0, .3)',
		width: '100vw',
		color: '#fff',
		position: 'absolute',
		zIndex: '99999',
		display: 'flex',
		alignItems: 'center',
		top: '0',
		left: '0',
	}, hamburgerIcon: {
		cursor: 'pointer', height: '100%', padding: '20px 20px', background: 'orange',
	}, path: {
		marginLeft: '50px',
	}, navWrapper: {
		background: '#fff', color: 'black',
	},
});

export default App;
