const config = require('../config/config');
const mysql = require('mysql2');

module.exports = () => {

  return new Promise((resolve, reject) => {
    const mysqlConnection = mysql.createConnection({
      host: config.host,
      user: config.database.userName,
      password: config.database.password
    });

    mysqlConnection.connect((error) => {
      if (error) {
        console.log(error);
        return reject(false);
      }

      const sqlQuery = `CREATE DATABASE IF NOT EXISTS ${config.database.name};`;
      mysqlConnection.query(
        sqlQuery,
        (err, result) => {
          if (err) {
            console.log(err);
            return reject(false);
          }

          resolve(true);
        });
    });
  });
}