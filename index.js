// index.js
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('node:path');
const mysql = require('mysql2');
const weatherRoutes = require('./routes/weatherRoutes');
const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes');
const dynamicWebpageRoutes = require('./routes/dynamicWebpageRoutes');
const formRoutes = require('./routes/formRoutes');
const usersRoutes = require('./routes/usersRoutes');
const app = express();
const port = 3000;

app.use(cors());
 
app.use(bodyParser.urlencoded({extended: false})); // to parse the form data
app.use(bodyParser.json()); // Always Always keep it on top of middleware
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'admin123',
    database: 'myapp_db'
})
 
app.use((req, res, next) => {
    req.pool = pool;
    next();
})
 
 
 
app.use('/weather', weatherRoutes);
app.use('/user', usersRoutes);
// app.use('/', dynamicWebpageRoutes);
app.use('/submit-form', formRoutes);
app.use('/book-form', bookRoutes);
app.use('/', express.static(path.join(__dirname, 'public')));
app.get('/books', (req, res) => {
    res.sendFile(path.join(__dirname,'public','books.html'))
})
app.get('/books-admin', (req, res) => {
    res.sendFile(path.join(__dirname,'public','books-admin.html'))
})
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname,'public','login.html'))
})
 
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})