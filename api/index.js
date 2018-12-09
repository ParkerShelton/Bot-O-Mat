const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();

const con = require('./connection');
const port = 5000;
app.use(bodyParser.json());


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//GETS ALL ROBOTS
app.get('/robots', (req, res) => {
  const sql = "SELECT * FROM robots";

  con.query(sql, (err, result) => {
    if (err) {
      throw err
    } else {      
      res.send(result);
    }
  })
});

//GETS ALL ROBOT TYPES
app.get('/types', (req, res) => {
  const sql = "SELECT * FROM types";

  con.query(sql, (err, result) => {
    if (err) {
      throw err;
    } else {      
      res.send(result);
    }
  })
});

//GETS ALL TASKS
app.get('/tasks', (req, res) => {
  const sql = "SELECT * FROM tasks";

  con.query(sql, (err, result) => {
    if (err) {
      throw err
    } else {      
      res.send(result);
    }
  });
});

//GETS ALL TYPEDTASKS
app.get('/tasks/typed', (req, res) => {
  const sql = "SELECT * FROM typedTasks";

  con.query(sql, (err, result) => {
    if (err) {
      throw err;
    } else {      
      res.send(result);
    }
  })
});

//GET 5 RANDOM TASKS
app.get('/tasks/random', (req, res) => {
  const sql = "SELECT * FROM tasks ORDER BY RAND() LIMIT 5";

  con.query(sql, (err, result) => {
    if (err) {
      throw err;
    } else {
      res.send(result);
    }
  });
});

//ADDS ROBOT
app.post('/robots', (req, res) => {
  const {id, name, type, place, score} = req.body;
  const sql = `INSERT INTO robots (id, name, type, place, score) VALUES (${id}, '${name}', '${type}', '${place}', '${score}')`;

  con.query(sql, (err, result) => {
    if(err) {
      throw err;
    } else {
      res.send(result);
    }
  });
})

//ADD FULL ROBOT
app.post('/robots/full', (req, res) => {
  const {robotId, taskId} = req.body;
  
  const sql = `INSERT INTO fullRobots (robotId, taskId) VALUES (${robotId}, ${taskId})`;

  con.query(sql, (err, result) => {
    if(err) {
      throw err;
    } else {
      res.send(result);
    }
  });
});


function getSingleRobot(robotId) {
  const sql = `SELECT * FROM robots WHERE id=${robotId}`;

  return new Promise((resolve, reject) => {
    con.query(sql, (err, res) => {
      if(err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });   
}

function getAllRobots() {
  const sql = "SELECT * FROM robots";

  return new Promise((resolve, reject) => {
    con.query(sql, (err, res) => {
      if(err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });   
}


function getTasks(robotId) {
  const sql = `SELECT tasks.description, tasks.eta, tasks.id, fullRobots.isCompleted, COALESCE(typedTasks.points, 0) AS points FROM tasks 
  INNER JOIN fullRobots ON (tasks.id=fullRobots.taskId)
  INNER JOIN robots ON (robots.id=fullRobots.robotId)
  INNER JOIN types ON (robots.type=types.value)
  LEFT JOIN typedTasks ON (typedTasks.typeId=types.id AND typedTasks.taskId=tasks.id)
  WHERE fullRobots.robotId=${robotId}`;

  return new Promise((resolve, reject) => {
    con.query(sql, (err, res) => {
      if(err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  }); 
}


// //GETS SINGLE ROBOT
// app.get('/robot/:id', (req, res) => {
//   const sentId = req.params.id;

//   getSingleRobot(sentId).then((robot) => {
//     getTasks(robot[0].id).then((tasks) => {
//       robot[0].tasks = tasks;
//     }).then(() => {
//       res.send(robot);
//     })
//   })
// });

//GET FULL ROBOTS
app.get('/robots/full', (req, res) => {

  getAllRobots().then((robots) => {
    const promises = robots.map(robot => getTasks(robot.id));

    Promise.all(promises).then(tasks => {
      const robotList = robots.map((robot, index) => {
        robot.tasks = tasks[index];
        return robot;
      });
      res.send(robotList);
    });
  });
});


//EDITS ROBOT
app.put('/robots/:id', (req, res) => {
  const id = req.params.id;
  const {name, type} = req.body;
  const sql = `UPDATE robots SET name='${name}', type='${type}' WHERE id=${id}`;

  con.query(sql, (err, result) => {
    if(err) {
      throw err;
    } else {
      console.log("UPDATED ROBOT");
      res.send(result);
    }
  })  
})


//DELETE ROBOT
app.delete('/robots/:id', (req, res) => {
  const id = req.params.id;

  const sql = `DELETE robots, fullRobots FROM robots
  INNER JOIN fullRobots ON (robots.id=fullRobots.robotId)
  WHERE robots.id=${id}`;

  con.query(sql, (err, result) => {
    if(err) {
      throw err
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.send(result);
    }
  }); 
});
  


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});