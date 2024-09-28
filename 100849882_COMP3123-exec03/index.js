// fixing reference error: 'require' not defined in ES module scope
// added type: module in package.json
import http from "http";

// importing employee module
import { employees } from "./Employee.js";
console.log("Lab 03 -  NodeJs");

// defining server port
const port = process.env.PORT || 8081

// create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            // displaying message with h1 tag
            res.end("<h1>Welcome to Lab Exercise 03</h1>")
            // added return statements to fix: 'ERR_STREAM_WRITE_AFTER_END' error
            return;
        }

        if (req.url === '/employee') {
            // displaying all details for employees in JSON format
            res.end(JSON.stringify(employees))
            // added return statements to fix: 'ERR_STREAM_WRITE_AFTER_END' error
            return;
        }

        if (req.url === '/employee/names') {
            // displaying employee fname+lname in JSON array
            let employeeNames = [];

            for (let i = 0; i < employees.length; i++) {
                let employeeFullName = `${employees[i].firstName + " " + employees[i].lastName}`;
                employeeNames.push(employeeFullName)
            }
            
            res.end(JSON.stringify(employeeNames.sort()))
            // added return statements to fix: 'ERR_STREAM_WRITE_AFTER_END' error
            return;
        }

        if (req.url === '/employee/totalsalary') {
            // displaying sum of all employee salaries in JSON format
            let salarySum = 0;

            for (let i = 0; i < employees.length; i++) {
                salarySum += employees[i].Salary;
            }

            res.end(JSON.stringify({total_salary: salarySum}))
            // added return statements to fix: 'ERR_STREAM_WRITE_AFTER_END' error
            return;
        
    }
    res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    console.log('Server running at http://127.0.0.1:8081/');
})