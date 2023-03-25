import mysql from "mysql";

const host = 'bupfk57bmupyaqmjhooh-mysql.services.clever-cloud.com';
const userName = 'ueah659dxjkvdfsn';
const password = 'ZNNGXIGiCocpCyTxLlnM';
const dataBase = 'bupfk57bmupyaqmjhooh';
const port = '3306';

export const db = mysql.createConnection({
  host: host,
  user: userName,
  password: password,
  database: dataBase,
  port: port,
  ssl: {
    rejectUnauthorized: false
  }
});

db.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});



/*export const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"password",
    database:"blog"
});

db.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });*/