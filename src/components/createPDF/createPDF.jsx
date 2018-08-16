import React from 'react';
import ReactPDF, {
	Document,
	Page,
	View,
	Text,
	Link,
	Font,
	StyleSheet,
} from '@react-pdf/renderer';


class CreatePDF extends React.Component {

	componentDidMount() {


	}


	render() {

		const styles = StyleSheet.create({
			title: {
				margin: 20,
				fontSize: 25,
				textAlign: 'center',
				backgroundColor: '#e4e4e4',
				textTransform: 'uppercase',
			},
			body: {
				flexGrow: 1,
				margin: 15,
			},
			row: {
				flexGrow: 1,
				flexDirection: 'row',
			},
			block: {
				flexGrow: 1,
			},
			text: {
				width: '60%',
				margin: 10,
				textAlign: 'justify',
			},
			fill1: {
				flexGrow: 2,
				backgroundColor: '#e17ad3',
				margin: 5,
			},
			fill2: {
				flexGrow: 2,
				backgroundColor: '#ff4343',
			},
			fill3: {
				flexGrow: 2,
				backgroundColor: '#5885e7',
			},
			fill4: {
				flexGrow: 2,
				backgroundColor: '#c8e246',
			},
		});


		return (<div className='createPDF'>
			<div className='container createBox'>
				<div className='creator'>
					<div className='createButtons'>

					</div>
					<input type='text' className='text'></input>
				</div>
				<Document>
					<Page size="A4">
						<Link
							style={styles.title}
							src="https://es.wikipedia.org/wiki/Lorem_ipsum"
						>
							Lorem Ipsum
						</Link>
						<View style={styles.body}>
							<View style={styles.row}>
								<Text style={styles.text}>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
									eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut                                    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum.
								</Text>
								<View style={styles.fill1} />
							</View>
							<View style={styles.row}>
								<View style={styles.fill2} />
								<Text style={styles.text}>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
									eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut                                    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum.
								</Text>
							</View>
							<View style={styles.row}>
								<Text style={styles.text}>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
									eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut                                    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum.
								</Text>
								<View style={styles.fill3} />
							</View>
							<View style={styles.row}>
								<View style={styles.fill4} />
								<Text style={styles.text}>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
									eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut                                    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum.
								</Text>
							</View>
						</View>
					</Page>
				</Document>
			</div>
		</div>);
	}
}

export default CreatePDF;

