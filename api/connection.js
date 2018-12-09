const mysql = require('mysql');

// //ONLINE DATABASE
// var con = mysql.createConnection({
//   host: '198.74.55.173',
//   user: 'robot_u',
//   password: 'robotpw12',
//   database: 'botomat'
// });

//LOCAL DATABASE
var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Alkaline12',
  database: 'botomat'
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con;