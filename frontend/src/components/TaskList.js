import React from 'react';
import styled from 'styled-components';
import TaskItem from './TaskItem'; 

const TaskListContainer = styled.div`
  padding: 20px;
`;

const TaskList = ({ tasks }) => {
  return (
    <TaskListContainer>
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>
      )}
    </TaskListContainer>
  );
};

export default TaskList;
