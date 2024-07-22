const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { getLogin} = require('../controllers/usersController');
const router = express.Router();
 
 

router.post('/', getLogin);

module.exports = router;