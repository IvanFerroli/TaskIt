import React from 'react';
import styled from 'styled-components';

const TaskItemContainer = styled.li`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9;
`;

const TaskTitle = styled.h3`
  margin: 0;
`;

const TaskDescription = styled.p`
  margin: 0;
  color: #666;
`;

const TaskItem = ({ task }) => {
  return (
    <TaskItemContainer>
      <div>
        <TaskTitle>{task.title}</TaskTitle>
        <TaskDescription>{task.description}</TaskDescription>
      </div>
      <button>Edit</button>
      <button>Delete</button>
    </TaskItemContainer>
  );
};

export default TaskItem;
