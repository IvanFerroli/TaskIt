import React, { createContext, useState } from 'react';

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    // Lógica para adicionar tarefa
  };

  const removeTask = (taskId) => {
    // Lógica para remover tarefa
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskProvider, TaskContext };
