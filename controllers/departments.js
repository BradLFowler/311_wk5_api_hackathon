const mysql = require('mysql2');
const pool = require('../mysql/connection');
const { handleSQLError } = require('../mysql/error')

const getDepartments = (req, res) => {
    pool.query('SELECT * FROM employees JOIN departments LIMIT 50', (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    })
} 
module.exports = {
    getDepartments

};