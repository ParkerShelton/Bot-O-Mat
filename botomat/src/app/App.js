import React, { Component } from 'react';
import Home from './components/home/Home';
import './Globals.css';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      robotList: null,
      robotTypes: null,
      selectedRobot: null,
      showEmptyRobots: true,

      formData: {
        name: "John Doe",
        type: "UNIPEDAL"
      }
    }
  }

  componentWillMount = () => {
    this.fetchFullRobots();
    this.fetchRobotTypes();
  };

  // componentDidMount = () => {
  //   if(this.state.robotList !== null){
  //     if(this.state.robotList.length > 0) {
  //       console.log("greater than 0");
  //       this.setState({showEmptyRobots: false});
  //     } else {
  //       this.setState({showEmptyRobots: true});
  //     }        
  //   }  
  // }

  generateId = () => {
    return Math.floor(Math.random() * 10000) + 1;
  }


  taskCompleted = (selectedRobotId, selectedTaskId) => {
    for(var i = 0; i < this.state.robotList.length; i++) {

      if(this.state.robotList[i].id === selectedRobotId) {
        for(var j = 0; j < 5; j++) {

          if(this.state.robotList[i].tasks[j].id === selectedTaskId) {
            let updatedRobotList = this.state.robotList;

            updatedRobotList[i].tasks[j].isCompleted = 1
            updatedRobotList[i].score += updatedRobotList[i].tasks[j].points;

            if(updatedRobotList[i].completed < 5) {
              updatedRobotList[i].completed ++;
            }
            if(updatedRobotList[i].remaining > 0) {
              updatedRobotList[i].remaining --;
            }

            this.setState({
              robotList: updatedRobotList
            });
          }
        }
      }
    }

  }


  addRobotToState = (newRobot) => {
    // let updatedRobots = [...this.state.robotList, newRobot];
    let updatedRobots = this.state.robotList;
    updatedRobots.push(newRobot);
    this.setState({robotList: updatedRobots});
  }

  updateRobotsInState = (updatedRobot) => {
    const index = this.state.robotList.findIndex(robot => robot.id === updatedRobot.id);    

    const robotList = [...this.state.robotList];
    robotList[index] = updatedRobot;

    this.setState({robotList});    
  }

  handleChange = (e, name) => {
    let formData = this.state.formData;

    formData[name] = e.target.value;
    this.setState({formData});
    console.log(this.state.formData);
  }


/*---------------------------*/
//         API CALLS
/*---------------------------*/


/////////////////////
  fetchFullRobots = () => {
   const url = "http://localhost:5000/robots/full";

    fetch(url)
      .then((res) => res.json())
      .then((resJSON) => {
        this.setState({robotList: resJSON});

        if(resJSON.length > 0) {
          this.setState({showEmptyRobots: false});
        } else {
          this.setState({showEmptyRobots: true});
        } 
      });    
  }

/////////////////////
  fetchRobotTypes = () => {
    const url = "http://localhost:5000/types";

    fetch(url)
      .then((res) => res.json())
      .then((resJSON) => {
        this.setState({robotTypes: resJSON});
      });    
  }

  // fetchSingleRobot = (robotId) => {
  //   const url = `http://localhost:5000/robot/${robotId}`;

  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((resJSON) => {
  //       console.log(resJSON);
  //     })
  // }


/////////////////////
  addRobot = () => {

    this.setState({})

    const bodyData = {
      id: this.generateId(),
      name: this.state.formData.name,
      type: this.state.formData.type,
      place: 0,
      score: 0
    };

    fetch("http://localhost:5000/robots", {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bodyData)

    }).then((res) => {
      return res.json(); 

    }).then ((resJSON) => {
      // this.addRobotToState(resJSON);
      this.setState({showEmptyRobots: false});
      this.assignRobotTasks(bodyData.id);
      // this.fetchSingleRobot(bodyData.id);
    });
  }

//////////////////
  assignRobotTasks = (robotId) => {
    const tasks = [];
    const url = "http://localhost:5000/tasks/random";
    
    fetch(url)
      .then((res) => {
        return res.json();
      }).then((resJSON) => {
        
        resJSON.forEach(task => {
          tasks.push(task);
        });
      }).then(() => {

        for(let i = 0; i < 5; i++) {

          const bodyData = {
            robotId: robotId,
            taskId: tasks[i].id,
          };


          fetch("http://localhost:5000/robots/full", {
                method: 'POST',
                headers: {
                  "Accept": "application/json",
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(bodyData)

              }).then((res) => {
                res.json()}
              ).then(() => {
                this.fetchFullRobots();
              })
        }
      })
  }


/////////////////////
  editRobot = (id) => {
    if(id !== null) {
      const url = `http://localhost:5000/robots/${id}`;

      fetch(url, {
        method: 'PUT',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state.formData)
      }).then(res => {
        return res.json();
      }).then((resJSON) => {
        this.updateRobotsInState(resJSON);
      });

    }
  }



/////////////////////
  deleteRobot = (id) => {
    if(id !== null) {
      const url = `http://localhost:5000/robots/${id}`;

      fetch(url, {
        method: 'DELETE',
      }).then(res => {
        console.log("Deleted Robot");
        return res.json();

      }).then(() => {
        const newRobotList = this.state.robotList.filter(robot => robot.id !== id);

        this.setState({robotList: newRobotList});

        if(this.state.robotList.length > 0) {
          this.setState({showEmptyRobots: false});
        } else {
          this.setState({showEmptyRobots: true});
        }
      });
    }
  }
/*---------------------------*/
//            
/*---------------------------*/



  render() {

    return (
      <div className="App">
        <div className="contentContainer">
          <Home 
            formData={this.state.formData} 
            robotList={this.state.robotList} 
            robotTypes={this.state.robotTypes}
            renderRobots={this.renderRobots} 
            renderModal={this.renderModal} 
            handleChange={this.handleChange}
            addRobot={this.addRobot}
            deleteRobot={this.deleteRobot}
            taskCompleted={this.taskCompleted}
            showEmptyRobots={this.state.showEmptyRobots}
          />
        </div>
      </div>
    );
  }
}

export default App;