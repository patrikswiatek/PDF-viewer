import React from 'react';

import './../../styles/_base.scss';

class Fonts extends React.Component {

  onClickVerdana = () => {
      document.getElementById('view').style.fontFamily = 'Verdana';
      document.getElementById('view').style.fontSize = '1rem';
      document.getElementById('createText').style.fontFamily = 'Verdana';
      document.getElementById('createText').style.fontSize = '1rem';
  };

  onClickFantasy = () => {
      document.getElementById('view').style.fontFamily = 'Fantasy';
      document.getElementById('view').style.fontSize = '1rem';
      document.getElementById('createText').style.fontFamily = 'Fantasy';
      document.getElementById('createText').style.fontSize = '1rem';
  };

  onClickTimes = () => {
      document.getElementById('view').style.fontFamily = 'Times New Roman';
      document.getElementById('view').style.fontSize = '1rem';
      document.getElementById('createText').style.fontFamily = 'Times New Roman';
      document.getElementById('createText').style.fontSize = '1rem';
  };

  onClickOpenSans = () => {
    document.getElementById('view').style.fontFamily = 'Open Sans';
    document.getElementById('view').style.fontSize = '1rem';
    document.getElementById('createText').style.fontFamily = 'Open Sans';
    document.getElementById('createText').style.fontSize = '1rem';
  };

  onClickDefault = () => {
    document.getElementById('view').style.fontFamily = '';
    document.getElementById('view').style.fontSize = '1rem';
    document.getElementById('createText').style.fontFamily = '';
    document.getElementById('createText').style.fontSize = '1rem';
  };

  render() {
    const fonts = {
			background: 'deepskyblue',
			width: '100%',
			height: '45.2vh',
			padding: '15%',
			color: 'black',
			border: '4px dashed blue',
			fontSize: '0.9rem',
			zIndex: '9',
			textAlign: 'center',
			position: 'relative',
			top: '-45.4vh',
		};

    const buttons = {
			background: 'deepskyblue',
			width: '100%',
			height: '100%',
			top: '-45.4vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      flexDirection: 'column',
    };

    const button = {
      color: 'white',
      height: '15%',
      width: '70%',
      fontSize: '0.7rem',
      borderRadius: '5px',
      background: '#0c2599',
      border: '3px dotted rgb(141, 128, 141)',
    };

    return (
      <div style={fonts}>
        <div style={buttons}>
          <button style={button} className='btn btn-block btn-primary btn-add' onClick={this.onClickVerdana}>Verdana</button>
          <button style={button}  className='btn btn-block btn-primary btn-add' onClick={this.onClickFantasy}>Fantasy</button>
          <button style={button}  className='btn btn-block btn-primary btn-add' onClick={this.onClickTimes}>Times New Roman</button>
          <button style={button}  className='btn btn-block btn-primary btn-add' onClick={this.onClickOpenSans}>Open Sans</button>
          <button style={button}  className='btn btn-block btn-primary btn-add' onClick={this.onClickDefault}>Default</button>
        </div>
      </div>
    );
  }
}

export default Fonts;
