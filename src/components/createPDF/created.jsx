import React from 'react';

import {Page, Text, Image, StyleSheet} from '@react-pdf/renderer';

import sss from './../../media/pdf2.png';

class Created extends React.Component {
	render() {

    const styles = StyleSheet.create({
      body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
      },
      title: {
        fontSize: 24,
        textAlign: 'center',
      },
      author: {
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 40,
      },
      subtitle: {
        fontSize: 18,
        margin: 12,
      },
      text: {
        margin: 12,
        fontSize: 18,
        textAlign: 'justify',
        fontFamily: 'Times-Roman'
      },
      image: {
        marginVertical: 15,
        marginHorizontal: 100,
      },
      header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: 'center',
        color: 'grey',
      },
      pageNumber: {
        position: 'absolute',
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'grey',
      },
    });

	return(
    <Page style={styles.body} wrap>
      <Text style={styles.title}>{this.props.title}
        About
      </Text>
      <Text style={styles.text}>
        {this.props.paragraph}
        WebPage created to view and create pdf files. I composed structure of the files, according to Dan Abromov's article, to Presentational and Container Components. In PDF-viewer I used library PDF.js to display files, which you can operate without using a computer mouse because of keyboard handlers which are showed on the main page of website. I am going to add dropzone, so as to users will be able to view theirs own files. On the other subpage there is the PDF-Creator, where I used React-pdf library. You can add your own content like title, paragraphs, and soon also images. At first type text in the tabbed window, and then click on the button appropriate to the intended action. The pdf will be created after click on 'Done' button.
        I created this website because I didn't find any similar webpages, and it was a good practice which developed my programming skills.
      </Text>
      <Image
        style={styles.image}
        src={sss}
      />
      <Text style={styles.subtitle} break>

      </Text>

      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>
	);
	}
}

export default Created;
