const mysql = require('mysql2');
const pool = require('../mysql/connection');
const { handleSQLError } = require('../mysql/error')


// Create a new folder called "controllers" and a new file called "employees.js". Export the controller and import it into the "routes/employees.js" file. This is where we will put all of the logic for interacting with the data


// Create a function in the controller called "getEmployees". It should be called by the default "/" route. For now, leave the logic the same: res.send("getting employees...")
const getEmployees = (req, res) => {

    pool.query('SELECT * FROM employees LIMIT 50', (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    })
} 

// Create a function in the controller called "getEmployeesById". It should be called by the "/:id" route. For now, leave the logic the same: res.send("getting employees...")

const getEmployeesById = (req, res) => {
    let sql = 'SELECT * FROM employees WHERE emp_no = ?'
    sql = mysql.format(sql, [req.params.id])

    pool.query(sql, (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    })
} 

// getEmployeesByFirstName


// Create a function called "getEmployeesByFirstName. It should select all fields from the employees table where the first_name matches the /:first_name query parameter"

const getEmployeesByFirstName = (req, res) => {
    let sql = 'SELECT * FROM employees WHERE first_name = ?'
    sql = mysql.format(sql, [req.params.first_name])
    
    pool.query(sql, (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    })
}

module.exports = {
    getEmployees,
    getEmployeesById,
    getEmployeesByFirstName
};