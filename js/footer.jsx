import React from 'react'


	class Footer extends React.Component {

		render(){
			return(
				<div className='footerAll'>
					<footer className='row container boxesF'>
						<div className='col-3 box1f'>
							<h5>CONTACT</h5>
							<div className="line" />
							<a>Sit On Chair<br />Champions 1<br />10598 London<br /><br /><img src="./../images/phone.png" /> 601 708 000<br /><img src="./../images/mail.png" /> sitonchair@gmail.com</a>
						</div>
						<div className='col-3 box2f'>
							<h5>QUICK LINKS</h5>
							<div className="line" />
							<div className='links'><a href=''>Sit On Chair</a><br /><br /><a href=''>10598 London</a><br /><br /><a href=''>sitonchair@gmail.com</a></div>
						</div>
						<div className='col-3 box3f'>
							<h5>FROM THE BLOG</h5>
							<div className="line" />
							<a>Donec scelerisque id, mattis nec, nisl. Sed sed nunc. Suspendisse sed est pretium porttitor. Nulla gravida pulvinar.</a>
						</div>
						<div className='col-3 box4f'>
							<h5>NEWSLETTER</h5>
							<div className="line" />
							<textarea placeholder="Name" className='name' />
							<textarea placeholder="E-mail" className='email' />
							<button>SUBMIT</button>
						</div>
					</footer>
				</div>
			);
		}
	}

	export default Footer;