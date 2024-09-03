import React, { useEffect, useState } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import { useTaskContext } from '../components/TaskProvider';

const HomePage = () => {
  const { tasks, fetchTasks, addTask } = useTaskContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTasks = async () => {
      await fetchTasks();
      setLoading(false);
    };
    loadTasks();
  }, [fetchTasks]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Home Page</h1>
      <TaskForm onSubmit={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default HomePage;