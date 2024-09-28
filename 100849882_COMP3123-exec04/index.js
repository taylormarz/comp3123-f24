// Taylor Martin, Student ID: 100849882
// COMP3123 - Lab 04

const express = require('express');
const app = express();
const SERVER_PORT = 3000;

// get request to /hello endpoint that returns, "Hello Express JS"
app.get('/hello', (req, res) => {
    res.status(200)
    res.send("<h1>Hello Express JS</h1>");
});

// get request to /user endpoint with query parameters for first/last name
// http://localhost:3000/user?fname=taylor&lname=martin
app.get('/user', (req, res) => {
    res.status(200)
    console.log(req.query)
    const fname = req.query.fname;
    const lname = req.query.lname;

    res.send(`First Name: ${fname}, Last Name: ${lname}`);
});

// post request to /user endpoint with path parameters for first/last name
// http://localhost:3000/user/taylor/martin
app.post('/user/:fname/:lname', (req, res) => {
    res.status(201)
    console.log(req.params)
    const fname = req.params.fname;
    const lname = req.params.lname;

    res.send(`First Name: ${fname}, Last Name: ${lname}`);
});

// listening on port 3000
// http://localhost:3000
app.listen(3000, () => {
    console.log(`Server is running on http://localhost:${SERVER_PORT}`)
});
