const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '111202',
    database: 'shopping'
})


module.exports = db;
