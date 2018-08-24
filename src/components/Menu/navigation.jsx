import React from "react";
import Link from "react-router-dom/es/Link";

import KeyboardEventHandler from "react-keyboard-event-handler";


class Navigation extends React.Component {

	goHome = (e) => {
		e.preventDefault();
		document.getElementById('home').click();        //Change - router history
	};

	goCreate = (e) => {
		e.preventDefault();
		document.getElementById('create').click();        //Change - router history
	};

	render() {
		const style = {
			textDecoration: 'none', color: 'white',
		};

		return <nav>
			<ul className='container'>
				<li>
					<KeyboardEventHandler handleKeys={['1']} onKeyEvent={(a, e) => this.goHome(e)}/>
					<Link id='home' style={style} to="/">Home</Link>
				</li>
				<li>
					<KeyboardEventHandler handleKeys={['2']}
					                      onKeyEvent={(a, e) => this.goCreate(e)}/>
					<Link id='create' style={style} to="/create">Create your PDF</Link>
				</li>
				<li>
					<Link style={style} to="/testing">Testing</Link>
				</li>
			</ul>
		</nav>;
	}
}

export default Navigation;


