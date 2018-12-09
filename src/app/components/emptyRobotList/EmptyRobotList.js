import React, { Component } from 'react';
import '../../Globals.css';
import './EmptyRobotList.css';

class EmptyRobotList extends Component {

  render() {
    return (
      <div className="EmptyRobotList">
        <img alt="Empty Robots" src="/imgs/home/emptyRobots.svg" />
        <h2>Woah.. It looks like you have no robots! You should add some with the button at the top of the page. They are free, so why not? Pick your robot carefully depending on the tasks you need done!</h2>
      </div>
    );
  }
}

export default EmptyRobotList;
