import React, { useContext } from 'react';
import styled from 'styled-components';
import TaskItem from './TaskItem';
import { TaskContext } from './TaskProvider'; 

const TaskListContainer = styled.div`
  padding: 20px;
`;

const TaskList = () => {
  const { tasks } = useContext(TaskContext); 

  return (
    <TaskListContainer>
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <TaskItem task={task} />
            </li>
          ))}
        </ul>
      )}
    </TaskListContainer>
  );
};

export default TaskList;