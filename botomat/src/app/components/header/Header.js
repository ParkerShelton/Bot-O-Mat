import React, { Component } from 'react';
import Button from '../button/Button';
import '../../Globals.css';
import './Header.css';

class Header extends Component {

  render() {
    return (
      <div className="Header">
        <div className="headerContainer">
          <h1>Bot-O-Mat</h1>

          <div className="addBtnContainer">
            <Button handleBtnClick={this.props.handleBtnClick} text="Add Robot"/>
            <p>Add Robot</p>
          </div>


          <label htmlFor="search"></label>
          <input placeholder="Search" id="search" pattern="[A-Za-z]+" onChange={(e) => this.props.handleSearchChange(e)}/>

        </div>
      </div>
    );
  }
}

export default Header;
