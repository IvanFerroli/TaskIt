import React, { useEffect, useState } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import { useTaskContext } from '../components/TaskProvider';
import { AuthContext } from '../components/AuthProvider';
import taskService from '../services/taskService';

const HomePage = () => {
  const { tasks, setTasks } = useTaskContext();
  const { authState } = React.useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  const addTask = async (taskInfo) => {
    try {
      const response = await taskService.createTask(taskInfo);
      if (response.success) {
        alert('Task created successfully!');
        loadTasks(); 
      } else {
        alert(`Task creation failed: ${response.error || 'Please try again.'}`);
      }
    } catch (error) {
      console.error('Error during task creation:', error);
      alert('Task creation failed. Please try again.');
    }
  };

  const loadTasks = async () => {
    if (authState.isAuthenticated && authState.user) {
      const token = localStorage.getItem('token');  
      const result = await taskService.getTasksByUserId(token); 
      if (result.success) {
        setTasks(result.data);
      } else {
        console.error(result.error);
      }
    }
    setLoading(false);
  };
  

  useEffect(() => {
    loadTasks();
  }, [authState, setTasks]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <TaskForm onSubmit={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default HomePage;
