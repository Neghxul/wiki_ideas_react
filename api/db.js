import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

/*export const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"password",
    database:"blog"
});*/

/*db.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});*/

export const db = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DBHOST,
  user: process.env.DBUSERNAME,
  password: process.env.DBPASSWORD,
  database: process.env.DBDATABASE,
  port: process.env.DBPORT,
  ssl: {
    rejectUnauthorized: false
  },
  keepAlive: true
});

db.getConnection((err, connection) => {
  if(err) return console.error('error: ' + err.message);

  console.log('Connected to the MySQL server.');
  connection.release();
});
