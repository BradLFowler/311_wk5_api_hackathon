const express = require('express');

const employeesRouter = require('./routes/employees');
const departmentsRouter = require('./routes/departments');
const salariesRouter = require('./routes/salaries');
const titlesRouter = require('./routes/titles');

const app = express();
const port = process.env.PORT || 4001;


app.use('/employees', employeesRouter);
app.use('/departments', departmentsRouter);
app.use('/salaries', salariesRouter);
app.use('/titles', titlesRouter);

app.get('/', (req, res) => {
    res.send('Welcome to our API!')
  })

app.listen(port, () => {
    console.log(`Web server is listening on port ${port}!`);
  });