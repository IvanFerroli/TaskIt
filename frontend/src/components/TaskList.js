import React, { useContext } from 'react';
import styled from 'styled-components';
import TaskItem from './TaskItem';
import { TaskContext } from '../context/TaskContext'; // Supondo que TaskContext esteja em ../context/TaskContext

const TaskListContainer = styled.div`
  padding: 20px;
`;

const TaskList = () => {
  const { tasks } = useContext(TaskContext); // Obtendo tarefas do contexto

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
