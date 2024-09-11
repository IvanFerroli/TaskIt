const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const authMiddleware = require('../../../middleware/authMiddleware'); 

router.get('/user', authMiddleware, taskController.getTasksByUserId);
router.get('/', taskController.getAllTasks);
router.post('/', authMiddleware, taskController.createTask); 

module.exports = router;
