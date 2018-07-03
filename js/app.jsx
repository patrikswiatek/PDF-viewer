import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from "react-router-dom";
import Route from "react-router-dom/es/Route";
import Switch from "react-router-dom/es/Switch";
import Main from './main.jsx'
import './../main.scss';


document.addEventListener('DOMContentLoaded', function () {

	class NotFound extends React.Component {

		render() {

			return (

				<div>
					<h1>404</h1>
				</div>

			);
		}
	}

	class App extends React.Component {

		render() {

			return (<HashRouter>
				<Switch>
					<Route exact path='/' component={Main}/>
					<Route component={NotFound}/>
				</Switch>
			</HashRouter>)
		}
	}

	ReactDOM.render(<App/>, document.getElementById('app'));
});



