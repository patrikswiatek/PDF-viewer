import React from 'react'


	class PreAddress extends React.Component {
		render(){
			return(
				<div className='addressAll'>
					<address className='row container'>
						<div className='col-2'>
							<img src="./../images/phone.png" /><a> 601 708 000</a>
						</div>
						<div className='col-2'>
							<img src="./../images/mail.png" /><a> sitonchair@gmail.com</a>
						</div>
						<div className='col-4' />
						<div className='col-4 icons'>
							<img src="./../images/fb.png" />
							<img src="./../images/pin.png" />
							<img src="./../images/twit.png" />
							<img src="./../images/linked.png" />
							<img src="./../images/google.png" />
						</div>
					</address>
				</div>
			);
		}
	}

	class Address extends React.Component {
		render() {
			return (
				<PreAddress />
			)
		}
	}


	export default Address;