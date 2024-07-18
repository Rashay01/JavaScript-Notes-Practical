// routes/weatherRoutes.js
const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { getWeather, postWeather, deleteWeather } = require('../controllers/weatherController');
const router = express.Router();
 
router.get('/', authMiddleware, getWeather);
router.post('/', authMiddleware, postWeather);
router.delete('/', authMiddleware, deleteWeather);
 
module.exports = router;