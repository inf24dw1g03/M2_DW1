'user strict';

var mysql = require('mysql2');

var connection = mysql.createConnection({
    host: 'Tournament_db',
    user: 'root',
    password: '12345678',
    database: "Tournament"
});

connection.connect (function (err) {
    if (err){
        console.log('Error on database connection');
        throw err;
    }
console.log('Database connection active. ');
});

module.exports = connection;