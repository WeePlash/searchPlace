const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();

app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Content-Type", "application/x-www-form-urlencoded");
  next();
});

app.post('/createUser', function (req, res) {
  console.log("GOOD");
});

// open database in memory
// let db = new sqlite3.Database('C:/Users/valen/Documents/GitHub/Projets/searchPlace/db/user.db', (err) => {
//   if (err) {
//     console.error(err.message);
//   }
//   console.log('Connected to the users database.');
// });
//
// // close the database connection
// db.close((err) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log('Close the database connection.');
// });

app.listen(3000, function() {
  console.log('Listening on port 3000!')
});

