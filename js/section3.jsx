import React from 'react'


	class Section3 extends React.Component {
		constructor(props) {
			super(props);

			this.state = {
				hoverS3: false,
				hoverS3a: false,
				hoverS3b: false,
			}
		}

		mouseOnS3 = () => {
			this.setState({
				hoverS3: true,
			})
		};
		mouseOffS3 = () => {
			this.setState({
				hoverS3: false,
			})
		};
		mouseOnS3a = () => {
			this.setState({
				hoverS3a: true,
			})
		};
		mouseOffS3a = () => {
			this.setState({
				hoverS3a: false,
			})
		};
		mouseOnS3b = () => {
			this.setState({
				hoverS3b: true,
			})
		};
		mouseOffS3b = () => {
			this.setState({
				hoverS3b: false,
			})
		};



		render() {

			const styleS3 = {
				backgroundColor: this.state.hoverS3 ? 'white' : 'orange',
				color: this.state.hoverS3 ? 'grey' : 'white',
			};
			const styleS3a = {
				backgroundColor: this.state.hoverS3a ? 'white' : 'orange',
				color: this.state.hoverS3a ? 'grey' : 'white',
			};
			const styleS3b = {
				backgroundColor: this.state.hoverS3b ? 'white' : 'orange',
				color: this.state.hoverS3b ? 'grey' : 'white',
			};


			return(
				<div className='section3All'>
					<section className='row container'>
						<div className='col-12 sec3'>
							<h3>Lorem ipsum dolor sit amet neque.</h3>
							<a>Lorem ipsum dolor sit amet neque. Cras semper tellus. Cum sociis natoque penatibus et netus et magnis dis parturient montes, nascetur ridiculus mus. Donec vel quam. Aliquam tellus sollicitudin dignissim, sapien eleifend neque ac nulla ipsum dolor quam, lobortis velit cursus dignissim dapibus nisl urna vitae metus. Nullam et ultrices posuere tristique bibendum ac, felis. Maecenas bibendum purus dolor sit amet neque. In hac habitasse platea dictumst. Maecenas quis euismod nec, velit. Donec fermentum odio.</a>

							<div className='box1s3' onMouseOver={this.mouseOnS3} onMouseLeave={this.mouseOffS3} style={styleS3}>Lorem ipsum dolor sit amet neque. Cras semper tellus. Cum sociis natoque penatibus et netus et magnis dis parturient montes, nascetur ridiculus mus. Donec vel quam. Aliquam tellus sollicitudin dignissim. Lorem ipsum dolor sit amet neque. Cras semper tellus. Cum sociis natoque penatibus et netus et magnis dis parturient montes, nascetur ridiculus mus. Donec vel quam. Aliquam tellus sollicitudin dignissim, sapien eleifend neque ac nulla ipsum dolor quam, lobortis velit cursus dignissim dapibus nisl urna vitae metus.</div>
							<div className='box2s3' onMouseOver={this.mouseOnS3a} onMouseLeave={this.mouseOffS3a} style={styleS3a}>Lorem ipsum dolor sit amet neque. Cras semper tellus. Cum sociis natoque penatibus et netus et magnis dis parturient montes, nascetur ridiculus mus. Donec vel quam. Aliquam tellus sollicitudin dignissim.</div>
							<div className='box3s3' onMouseOver={this.mouseOnS3b} onMouseLeave={this.mouseOffS3b} style={styleS3b}>Lorem ipsum dolor sit amet neque. Cras semper tellus. Cum sociis natoque penatibus et netus et magnis dis parturient montes, nascetur ridiculus mus. Donec vel quam. Aliquam tellus sollicitudin dignissim. In hac habitasse platea dictumst. Maecenas quis euismod nec, velit. Donec fermentum odio.</div>
						</div>
					</section>
				</div>

			);
		}
	}

	export default Section3;