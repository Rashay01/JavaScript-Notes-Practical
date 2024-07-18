const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { getAllUser, postUser, updateUser, deleteUser } = require('../controllers/userController');
const router = express.Router();
 
 
router.get('/', authMiddleware, getAllUser);
router.post('/', authMiddleware, postUser);
router.put('/:id', authMiddleware, updateUser);
router.delete('/:id', authMiddleware, deleteUser)
 
module.exports = router;