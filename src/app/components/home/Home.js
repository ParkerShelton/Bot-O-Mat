import React, { Component } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import EmptyRobotList from '../emptyRobotList/EmptyRobotList';
// import Button from '../button/Button';
import RobotIcons from '../robotIcons/RobotIcons';
import Robot from '../robot/Robot';
import Form from '../form/Form';
import EditForm from '../form/EditForm';
import '../../Globals.css';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAddModal: false,
      showEditModal: false,
      showIcons: "Hide Icons",
      emptyRobotList: true,
      searchString: "",
    }
  }

  renderModal = () => {
    if(this.state.showAddModal === true) {
      return <Form 
        formData={this.props.formData} 
        addRobot={this.props.addRobot} 
        handleChange={this.props.handleChange} 
        robotTypes={this.props.robotTypes} 
        closeModal={this.closeModal} 
      />

    } else if(this.state.showEditModal === true) {

       return <EditForm 
        robot={this.state.selectedRobot}  
        editRobot={this.props.editRobot} 
        handleChange={this.propshandleChange} 
        robotTypes={this.props.robotTypes} 
        closeModal={this.closeModal} 
       />     
    }
  }

  renderRobotIcons = () => {
    if(this.state.showIcons === "Hide Icons") {
      return "RobotIcons";
    } else {
      return "RobotIcons hide";
    }
  }

  handleIconClick = () => {
    if(this.state.showIcons === "Hide Icons") {
      this.setState({showIcons: "Show Icons"});
    } else {
      this.setState({showIcons: "Hide Icons"});
    }
  }

  handleBtnClick = (formType, robot) => {
    if(formType === "add" && this.state.showAddModal === false) {
      this.setState({showAddModal: true});
    }

    if(formType === "edit" && this.state.showEditModal === false) {
      this.setState({
        showEditModal: true,
        selectedRobot: robot
      });
    }
  }

  hideRobotsOnEmpty = () => {

    if(this.props.robotList !== null) {
      if(this.props.robotList.length > 0) {
        return "robotListContainer";
      } else {
        return "robotListContainer hide";
      }
    }
  }

  closeModal = (e, formType) => {
    e.preventDefault();

    if(formType === "add" && this.state.showAddModal === true) {
      this.setState({showAddModal: false});
    } else if (formType === "edit" && this.state.showEditModal === true) {
      this.setState({showEditModal: false});
    }
  }

  renderRobots = () => {
    if(this.props.robotList !== null) {
      let robots = this.props.robotList.sort((a, b) => a.score < b.score);
      let search = this.state.searchString.trim().toLowerCase();  

      // this.setState({emptyRobotList: false});

      if(search.length > 0) {
        robots = robots.filter((robot) => {
          return robot.name.toLowerCase().match(search);
        });
        return robots.map((robot) => {
          return <Robot 
            robots={robots} 
            taskCompleted={this.props.taskCompleted} 
            handleBtnClick={this.handleBtnClick} 
            deleteRobot={this.props.deleteRobot} 
            robot={robot} 
            key={robot.id} 
            changeEmptyRobots={this.changeEmptyRobots}
          />
        });

      } else {
        return robots.map((robot) => {
          return <Robot 
            robots={robots} 
            taskCompleted={this.props.taskCompleted} 
            handleBtnClick={this.handleBtnClick} 
            deleteRobot={this.props.deleteRobot} 
            robot={robot} 
            key={robot.id} 
          />
        });
      }

    } else {
      return null;
    }
  }

  renderEmptyRobotList = () => {
    if(this.props.showEmptyRobots === true) {
      return <EmptyRobotList />;
    } else {
      return null;
    }
  }

  handleSearchChange = (e) => {
    this.setState({searchString: e.target.value});
  }

  render() {
    return (
      <div className="Home">
        <Header handleSearchChange={this.handleSearchChange} handleBtnClick={this.handleBtnClick}/>
        {this.renderModal()}

        <div className="contentContainer">

          {this.renderEmptyRobotList()}

          <div className={this.hideRobotsOnEmpty()}>
            {this.renderRobots()}
          </div>  

          <RobotIcons showIcons={this.state.showIcons} renderRobotIcons={this.renderRobotIcons} />
        </div>

        <Footer />
      </div>
    );
  }
}

export default Home;
