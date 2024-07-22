const express = require('express');
const {
    getAllBookData, deleteBookData, updateBookData, saveBookData
} = require('../controllers/booksController');
const router = express.Router();

router.get('/', getAllBookData);
router.post('/', saveBookData);
router.delete('/:id', deleteBookData);
router.put('/:id', updateBookData);

module.exports = router;