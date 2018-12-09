import React, { Component } from 'react';
import Task from '../task/Task';
import '../../Globals.css';
import './Robot.css';

class Robot extends Component {

  renderTasks = () => {
    
    if(this.props.robot.tasks !== null) {
      let taskList = this.props.robot.tasks.map((task, index) => {
        return <Task robotId={this.props.robot.id} taskCompleted={this.props.taskCompleted} key={index} task={task}/>
      });
      return taskList;

    } else {

      return null;
    }
  }

  getPlace = () => {
    let place = (this.props.robots.findIndex((robot) => robot.id === this.props.robot.id) + 1);

    if(place === 1) {
      return "1st";
    } else if(place === 2) {
      return "2nd";
    } else if(place === 3) {
      return "3rd";
    } else {
      return `${place}th`;
    }
  }


  render() {

    const type = (this.props.robot.type.toLowerCase()).replace(/^\w/, c => c.toUpperCase());

    return (
      <div className="Robot">
        <img src="/imgs/robot/deleteButton.png" alt="Delete Button" className="deleteBtn" onClick={() => this.props.deleteRobot(this.props.robot.id)}/>

        <div className="robotCard">
          <div className="leftSide">
            <img className="profileImg" alt="Robot Profile" src={`/imgs/robot/${this.props.robot.type}.png`} />

            {/* <p>{this.getPlace()}</p> */}

            <h1><span>{this.getPlace()}</span> {this.props.robot.name} - {type}</h1>
          </div>

        </div>

        <div className="dropdown">

          <div className="dropdownLeft">
            <h2>Tasks</h2>

            <div className="taskCountContainer">
              <p>Score: {this.props.robot.score}</p>
              <p>Completed: {this.props.robot.completed}</p>
              <p>Remaining: {this.props.robot.remaining}</p>
            </div>
          </div>

          <div className="dropdownRight">
            <ul>
              {this.renderTasks()}
            </ul>          
          </div>

        </div>

      </div>
    );
  }
}

export default Robot;
