const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

// app.use(express.json());

app.get('/', function(req, res) {
    res.send('hello world');
});

app.get('/sayHello', function(req, res) {
    res.send('say hello');
});

// Create an API to read data via query parameters and save that information to a file on the server
app.get('/save', (req, res) => {
    // Extract data from query parameters
    const data = req.query;

    const filePath = path.join(__dirname, 'data.txt');

    // Convert data to a string format
    const dataString = JSON.stringify(data) + '\n';

    // Append data to the file
    fs.appendFile(filePath, dataString, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            return res.status(500).send('Internal Server Error');
        }
        res.send('Data saved successfully');
    });
});

app.get('*', function(req, res) {
    res.send('API not active');
});

// Start the server
app.listen(3000, () => {
    console.log('API is listening at port 3000');
});
