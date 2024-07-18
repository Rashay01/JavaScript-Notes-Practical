//routes/formRoutes.js
const express = require('express');
const { saveFormData } = require('../controllers/formController');
const router = express.Router();
 
router.post('/', saveFormData);
 
module.exports = router;