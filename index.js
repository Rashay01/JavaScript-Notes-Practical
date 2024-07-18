// index.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('node:path');
const weatherRoutes = require('./routes/weatherRoutes');
const userRoutes = require('./routes/userRoutes');
const dynamicWebpageRoutes = require('./routes/dynamicWebpageRoutes');
const formRoutes = require('./routes/formRoutes');
const app = express();
const port = 3000;
 
app.use(bodyParser.urlencoded({extended: false})); // to parse the form data
app.use(bodyParser.json()); // Always Always keep it on top of middleware
app.use('/weather', weatherRoutes);
app.use('/user', userRoutes);
// app.use('/', dynamicWebpageRoutes);
app.use('/submit-form', formRoutes)
app.use('/', express.static(path.join(__dirname, 'public')));
 
 
 
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})