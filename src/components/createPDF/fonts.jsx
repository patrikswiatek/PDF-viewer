import React from 'react';

import './../../styles/_base.scss';

import cross from './../../media/cross.png';


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
    return (
      <div className='fonts'>
        <img className='cross2' alt='' src={cross} onClick={this.props.onClick}/>
        <div className='buttonsFonts'>
          <button className='btn btn-block btn-primary btn-add buttonFont' onClick={this.onClickVerdana}>Verdana</button>
          <button className='btn btn-block btn-primary btn-add buttonFont' onClick={this.onClickFantasy}>Fantasy</button>
          <button className='btn btn-block btn-primary btn-add buttonFont' onClick={this.onClickTimes}>Times New Roman</button>
          <button className='btn btn-block btn-primary btn-add buttonFont' onClick={this.onClickOpenSans}>Open Sans</button>
          <button className='btn btn-block btn-primary btn-add buttonFont' onClick={this.onClickDefault}>Default</button>
        </div>
      </div>
    );
  }
}

export default Fonts;
