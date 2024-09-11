import React, { createContext, useContext, useState } from 'react';
import taskService from '../services/taskService'; 

export const TaskContext = createContext();

export const useTaskContext = () => {
  return useContext(TaskContext);
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task =>
      task.id === updatedTask.id ? updatedTask : task
    ));
  };

  
  const fetchTasksByUser = async (userId) => {
    const result = await taskService.getTasksByUserId(userId);
    if (result.success) {
      setTasks(result.data);
    } else {
      console.error(result.error);
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, setTasks, addTask, removeTask, updateTask, fetchTasksByUser }}>
      {children}
    </TaskContext.Provider>
  );
};
