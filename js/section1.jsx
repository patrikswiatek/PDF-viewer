import React from 'react'


	class Section1 extends React.Component {
		constructor(props) {
			super(props);

			this.state = {
				hover1: false,
				hover2: false,
				hover3: false,
			}
		}

		mouseOn = () => {
			this.setState({
				hover1: true,
			})
		};
		mouseOff = () => {
			this.setState({
				hover1: false,
			})
		};
		mouseOn2 = () => {
			this.setState({
				hover2: true,
			})
		};
		mouseOff2 = () => {
			this.setState({
				hover2: false,
			})
		};
		mouseOn3 = () => {
			this.setState({
				hover3: true,
			})
		};
		mouseOff3 = () => {
			this.setState({
				hover3: false,
			})
		};



		render() {

			const style = {
				backgroundColor: this.state.hover1 ? 'orange' : 'rgba(43, 43, 43, 0.88)',
				color: this.state.hover1 ? 'black' : 'orange',
			};
			const style2 = {
				backgroundColor: this.state.hover2 ? 'orange' : 'rgba(43, 43, 43, 0.88)',
				color: this.state.hover2 ? 'black' : 'orange',
			};

			const style3 = {
				backgroundColor: this.state.hover3 ? 'orange' : 'rgba(43, 43, 43, 0.88)',
				color: this.state.hover3 ? 'black' : 'orange',
			};





			return(
				<div className='section1All'>
					<div className='layer'>
						<section className='row container'>
							<div className='col-12 text'>
								<h1>LET'S TALK ABOUT YOUR COMFORT</h1>
								<a>THE BEST CHAIRS</a>
								<div className='boxes'>
									<div className='box1' onMouseOver={this.mouseOn} onMouseLeave={this.mouseOff} style={style}>
										<div className='line' />
										<a>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ugiat nulla pariatur.</a>
										<a href="" className='more' style={style}>Read more></a>
									</div>
									<div className='box2' onMouseOver={this.mouseOn2} onMouseLeave={this.mouseOff2} style={style2}>
										<div className='line' />
										<a>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </a>
										<a href="" className='more' style={style2}>Read more ></a>
									</div>
									<div className='box3' onMouseOver={this.mouseOn3} onMouseLeave={this.mouseOff3} style={style3}>
										<div className='line' />
										<a>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </a>
										<a href="" className='more' style={style3}>Read more ></a>
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>
			);
		}
	}

	export default Section1;