import React, { Component } from 'react';
import '../../Globals.css';
import './Button.css';

class Button extends Component {
  render() {
    return (
      <div onClick={() => this.props.handleBtnClick("add")} className="Button">
        <img alt="Add Robot" src="/imgs/button/addButtn.png" />
      </div>
    );
  }
}

export default Button;
