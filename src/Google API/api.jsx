import React from 'react';

class API extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: false,
		};
	}

	componentDidMount() {
		this.setState({ isLoading: true });

		fetch('https://www.googleapis.com/drive/v3/files/1X6o8nn9cSz1h0RmTpFV05Yr3TSlVTb19?acknowledgeAbuse=false&supportsTeamDrives=false&fields=webContentLink&key=AIzaSyAYVeB5_JHf8iS-TNZEk7IXgbuV5zoy8jk', {
			method: "GET", headers: {
				"Content-Type": "application/pdf; charset=utf-8",
			},
		})
			.then((data) => {
				if (data.ok) {
					console.log('It works');
				} else {
					throw new Error('Something went wrong with your fetch');
				}})
			.then((data) => {
				const datas = data;
		});
	}

	render() {

		return <API />;
	}
}



