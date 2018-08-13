import React, {Component} from 'react';
import HashRouter from 'react-router-dom/es/HashRouter';
import Route from 'react-router-dom/es/Route';
import Switch from 'react-router-dom/es/Switch';
import Main from './components/main';
import Sidebar from './components/Menu/menu'
import CreatePDF from './components/createPDF/createPDF';
import NotFound from './components/notfound';
import './App.css';


class App extends Component {
	render() {
		return (<HashRouter>
				<div className="container">
					<Sidebar />
					<Switch>
						<Route exact path="/" component={Main}/>
						<Route path="/about" component={CreatePDF}/>
						<Route path="*" component={NotFound}/>
					</Switch>
				</div>
			</HashRouter>);
	}
}


export default App;
