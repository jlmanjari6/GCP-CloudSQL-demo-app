require('dotenv').config();
var express = require('express');
const app = express();
const connection = require('./db');


// simple GET api
app.get('/home', function (req, res) {
    res.send("Hello world!");
});

// GET api to print results of employee table
app.get('/home/employees', function (req, res) {
    connection.query(
        "USE employeesDB");
    connection.query(
        "SELECT * FROM `employee`",
        function (error, results, fields) {
            if (error) throw error;
            res.json(results);
        }
    );
});

app.listen(3000, function () {
    console.log("Listening on port 3000");
});



