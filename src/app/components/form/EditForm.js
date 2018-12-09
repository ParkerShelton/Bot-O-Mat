import React, { Component } from 'react';
import '../../Globals.css';
import './Form.css';

class EditForm extends Component {

  componentWillMount = () => {  

    const url = `http://localhost:5000/robots/${this.props.robot.id}`;

    fetch(url)
      .then((res) => res.json())
      .then((resJSON) => {
        this.setState({robot: resJSON});
      }); 
  }

  renderTypes = () => {
    if(this.props.robotTypes !== null) {
      const typeList = this.props.robotTypes.map((type, index) => {
        return <option key={index} value={type.value}>{type.name}</option>
      });
      return typeList;

    } else {
      return null;
    }
  }

  getEditingRobot = (id) => {
    const url = `http://localhost:5000/robots/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((resJSON) => {
        this.setState({robot: resJSON});
      });    
  }

  render() {

    return (
      <div className="EditForm">
        <form>
          <button onClick={(e) => this.props.closeModal(e, "edit")} className="closeBtn">X</button>

          <fieldset>
            <legend>Edit the Robot</legend>

            <p>
              <label htmlFor="name">Robot's Name:</label>
              <input placeholder={this.props.robot.name} onChange={(e) => this.props.handleChange(e, 'name')} type="text" id="name" name="robotName"/>
            </p>

            <p>
              <label htmlFor="type">Robot's Type:</label>
              <select value={this.props.robot.type} onChange={(e) => this.props.handleChange(e, 'type')} id="type">
                {this.renderTypes()}
              </select>
            </p>
          </fieldset>

          <div className="btnContainer">
            <button onClick={() => this.props.editRobot(this.props.robot.id)} className="createBtn">Change Robot</button>
          </div>

        </form>

      </div>
    );
  }
}

export default EditForm;
