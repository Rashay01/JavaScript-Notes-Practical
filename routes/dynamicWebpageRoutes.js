const express = require('express');
const router = express.Router();
const { serveWebpage} = require('../controllers/dynamicWebpageController');
 
router.get('/dashboard', serveWebpage);
 
module.exports = router;