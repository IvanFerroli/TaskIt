import React, { createContext, useContext, useState } from 'react';

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

  const fetchTasks = async () => {
    const fetchedTasks = await new Promise((resolve) =>
      setTimeout(() => resolve([{ id: 1, name: 'Sample Task' }]), 1000)
    );
    setTasks(fetchedTasks);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask, updateTask, fetchTasks }}>
      {children}
    </TaskContext.Provider>
  );
};