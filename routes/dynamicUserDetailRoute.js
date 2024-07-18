const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

const { postUser, postEducation, postSkills, postProjects,serveWebpage} = require('../controllers/dynamicUserDetailController');

router.post('/user-details/user', authMiddleware, postUser);
router.post('/user-details/education', authMiddleware, postEducation);
router.post('/user-details/skills', authMiddleware, postSkills);
router.post('/user-details/projects', authMiddleware, postProjects);
router.get('/user-details', serveWebpage);
 
module.exports = router;