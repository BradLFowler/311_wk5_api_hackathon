const mysql = require('mysql2');
const pool = require('../mysql/connection');
const { handleSQLError } = require('../mysql/error')

const getTitles = (req, res) => {
    pool.query('SELECT * FROM employees JOIN titles ON employees.emp_no = titles.emp_no LIMIT 50', (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    })
} 
module.exports = {
    getTitles

};