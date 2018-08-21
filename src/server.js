const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();

var port = process.env.PORT || 3000;
var pathDB = 'C:/Users/valen/Documents/GitHub/Projets/searchPlace/db/user.db';
var user = false;

function openDB() {
  let db = new sqlite3.Database(pathDB, (err) => {
    if (err) {
      console.error(err.message);
    }
    // console.log('Connected to the users database.');
  });
  return (db);
}
function closeDB(db) {
  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    // console.log('Close the database connection.');
  });
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/', function (req, res) {
  console.log("Receive data from Connection");
  let name = req.body.name;
  let password = req.body.password;
  let db = openDB();
  db.all (`SELECT * FROM 'users'`, function(err, rows) {
    if (err) {
      return console.log(err.message);
    }
    rows.forEach((row) => {
      if (row.username !== ''  && row.password !== '') {
        if (row.username === name && row.password === password) {
          user = true;
          console.log("Connected as " + row.username);
          res.statusCode = 200;
          res.end();
        }
      }
    });
  });
  closeDB(db);
});

app.post('/createUser', function (req, res) {
  console.log("Receive data from CreateUser");
  let name = req.body.name;
  let password = req.body.password;
  let db = openDB();
  db.run (`INSERT INTO 'users'(username, password) VALUES ('${name}', '${password}')`, function(err) {
    if (err) {
      return console.log(err.message);
    }
    console.log("A row has been inserted => ");
    console.log("Username => " + name);
    console.log("Password => " + password);
  });
  closeDB(db);
});

app.listen(3000, function () {
  console.log('Listening on port ' + port);
});
