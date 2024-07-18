// index.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('node:path');
const weatherRoutes = require('./routes/weatherRoutes');
const userRoutes = require('./routes/userRoutes');
const dynamicWebpageRoutes = require('./routes/dynamicUserDetailRoute');
const app = express();
const port = 3000;
 
app.use(bodyParser.json()); // Always Always keep it on top of middleware
app.use('/weather', weatherRoutes);
app.use('/user', userRoutes);
app.use('/static', express.static(path.join(__dirname, 'public')))
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname,'public','profile.html'))
})
app.use('/', dynamicWebpageRoutes);
 
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})