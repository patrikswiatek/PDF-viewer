import React from "react";
import Link from "react-router-dom/es/Link";


class Navigation extends React.Component {
	render() {

		const style = {
			textDecoration: 'none',
			color: 'lightgoldenrodyellow',
		};

		return (
			<nav>
			<ul className='container'>
				<li>
					<Link style={style} to="/">Home</Link>
				</li>
				<li>
					<Link style={style} to="/about">Create your PDF</Link>
				</li>
				<li>
					<Link style={style} to="/testing">Testing</Link>
				</li>
			</ul>
			</nav>);
	}
}

export default Navigation;


