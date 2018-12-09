import React, { Component } from 'react';
import '../../Globals.css';
import './Task.css';

class Task extends Component {

  componentDidMount = () => {
    setTimeout(() => this.props.taskCompleted(this.props.robotId, this.props.task.id), this.props.task.eta);
  }

  renderCheckmark = () => {
    if(this.props.task.isCompleted === 0) {
      return "/imgs/robot/uncheck.png";
    } else if(this.props.task.isCompleted === 1){
      return "/imgs/robot/check.png";
    }
  }

  colorOfPoints = () => {
    if(this.props.task.points === 0) {
      return "points none";
    } else {
      return "points";
    }
  }

  render() {

    const description = (this.props.task.description.toLowerCase()).replace(/^\w/, c => c.toUpperCase());

    return (
      <li className="Task">
        <p className="desc">{description}</p>
        <p className={this.colorOfPoints()}>{this.props.task.points}pts</p>
        <img alt="Checkbox" src={this.renderCheckmark()}/>
      </li>
    );
  }
}

export default Task;
