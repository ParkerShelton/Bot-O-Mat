import React, { Component } from 'react';
import '../../Globals.css';
import './Form.css';

class Form extends Component {

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

  render() {

    return (
      <div className="Form">
        
        <form>
          {/* <button onClick={(e) => this.props.closeModal(e, "add")} className="closeBtn">X</button> */}
          <img alt="Close" onClick={(e) => this.props.closeModal(e, "add")} className="closeBtn" src="/imgs/robot/deleteButton.png" />

          <fieldset>
            <legend>Create A Robot</legend>

            <p>
              <label htmlFor="name">Robot's Name:</label>
              <input value={this.props.formData.name} onChange={(e) => this.props.handleChange(e, 'name')} type="text" id="name" name="robotName"/>
            </p>

            <p>
              <label htmlFor="type">Robot's Type:</label>
              <select value={this.props.formData.type} onChange={(e) => this.props.handleChange(e, 'type')} id="type">
                {this.renderTypes()}
              </select>
            </p>
          </fieldset>

          <div className="btnContainer">
            <button type="button" onClick={() => this.props.addRobot()} className="createBtn">Create Robot</button>
          </div>

        </form>

      </div>
    );
  }
}

export default Form;
