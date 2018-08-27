import React from "react";
import Link from "react-router-dom/es/Link";

import KeyboardEventHandler from "react-keyboard-event-handler";


class Navigation extends React.Component {

	goHome = (e) => {
		e.preventDefault();
		document.getElementById('home').click();
	};

	goCreate = (e) => {
		e.preventDefault();
		document.getElementById('create').click();
	};

	render() {
		const style = {
			textDecoration: 'none', color: 'deepskyblue',
		};

		return <nav>
			<ul className='container'>
				<li>
					<KeyboardEventHandler handleKeys={['1']} onKeyEvent={(a, e) => this.goHome(e)}/>
					<Link id='home' style={style} to="/">PDF Viewer</Link>
				</li>
				<li>
					<KeyboardEventHandler handleKeys={['2']}
					                      onKeyEvent={(a, e) => this.goCreate(e)}/>
					<Link id='create' style={style} to="/create">Create it yourself</Link>
				</li>
				<li>
					<Link style={style} to="/testing">Testing</Link>
				</li>
			</ul>
		</nav>;
	}
}

export default Navigation;


