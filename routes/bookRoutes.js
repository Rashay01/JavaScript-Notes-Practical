const express = require('express');
const {
    getAllBookData
} = require('../controllers/booksController');
const router = express.Router();

router.get('/', getAllBookData);

module.exports = router;