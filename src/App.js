import React, {Component} from 'react';
import {
	HashRouter, Route, Switch,
} from 'react-router-dom';
import Main from './components/main.jsx';
import 'bootstrap'
import './App.css';

class NotFound extends Component {
	render() {
		return (
			<div>
				<h1>404</h1>
			</div>
		);
	}
}

class App extends Component {
	render() {
		return (
			<HashRouter>
				<div>
					<Switch>
						<Route exact path="/" component={Main} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</HashRouter>
		);
	}
}

export default App;
