import React from 'react'


	class Header extends React.Component {

		render(){
			return(
				<div className='headerAll'>
					<header className='row container'>
						<div className='col-6 logo'>
							<a>Sit On Chair</a>
						</div>
						<div className='col-6 menu'>
							<ul>
								<li><a href="">HOME</a></li>
								<li><a href="">PAGES</a></li>
								<li><a href="">DROPDOWN</a></li>
								<li><a href="">LINK TEXT</a></li>
							</ul>
						</div>
					</header>
				</div>
			);
		}
	}

	export default Header;