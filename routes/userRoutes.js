const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { updateUser, getAllUser, deleteUser, postUser} = require('../controllers/userController');
const router = express.Router();

router.get('/', authMiddleware, getAllUser);
router.post('/', authMiddleware, postUser);
router.put('/', authMiddleware, updateUser);
router.delete('/', authMiddleware, deleteUser);

module.exports = router;