//routes/formRoutes.js
const express = require('express');
const {
  saveFormData,
  updateFormData,
  deleteFormData,
  getSpecificFormData,
  getAllFormData,
} = require('../controllers/formController');
const router = express.Router();

router.post('/', saveFormData);
router.put('/:id', updateFormData);
router.delete('/:id', deleteFormData);
router.get('/:id', getSpecificFormData);
router.get('/', getAllFormData);

module.exports = router;
