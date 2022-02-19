const mysql = require('mysql');

require('dotenv').config();

console.log({
    host: 'localhost' | process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})
const database = mysql.createConnection({
    host: 'localhost' | process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

module.exports = database;
