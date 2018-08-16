const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const axios = require('axios');

const app = express();

app.use(cors());

// axios({
//   method: 'post',
//   url: '/createUser',
//   data: {
//     name: 'Fred',
//     password: 'Flintstone'
//   }
// });

app.post('/createUser', function (req, res) {
  console.log("GOOD");
  console.log(res);
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

