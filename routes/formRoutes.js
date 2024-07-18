//routes/formRoutes.js
const express = require('express');
const { saveFormData, updateFormData, deleteFormData } = require('../controllers/formController');
const router = express.Router();
 
router.post('/', saveFormData);
router.put('/:id', updateFormData);
router.delete('/:id', deleteFormData);
 
module.exports = router;