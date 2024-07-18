/*
Assignment 1 -
Create a node http server to serve the static web page which has the 'about us' content
*/

const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
 
const hostname = '127.0.0.4';
const port = 3001;
 
const server = http.createServer((req, res) => {
    if(req.method === 'GET' && req.url === '/') {
        const fileName = path.join(__dirname, 'public', 'index.html');
        fs.readFile(fileName, 'utf8', (err, data) => {
            if(err) {
                console.log("Error reading profile file: ", err);
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Server error');
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
            }
        })
    } else if(req.method === 'GET' && req.url === '/about') {
        const fileName = path.join(__dirname, 'public', 'profile.html');
        fs.readFile(fileName, 'utf8', (err, data) => {
            if(err) {
                console.log("Error reading profile file: ", err);
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Server error');
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
            }
        })
    }
})
 
server.listen(port, hostname, () => {
    console.log(`Profile Server running at http://${hostname}:${port}/`);
})