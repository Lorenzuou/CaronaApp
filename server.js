const app = require('./config/express.js')();
const port = app.get('port')




var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});



app.listen(port, () => {
    console.log('Express server listening on port ' + port);
});