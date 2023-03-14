import mysql from "mysql";

export const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"12345678",
    database:"blog",
    port: 8800
});

db.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });