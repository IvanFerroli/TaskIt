const Task = require('../models/Task');


exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const userId = req.userId;  

    const task = await Task.create({ title, description, userId });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.getTasksByUserId = async (req, res) => {
  try {
    const userId = req.userId;  

    const tasks = await Task.findAll({ where: { userId } });
    if (!tasks || tasks.length === 0) {
      return res.status(404).json({ message: 'No tasks found for this user' });
    }
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

