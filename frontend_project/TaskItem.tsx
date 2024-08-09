import React from 'react';

const TaskItem: React.FC<{ task: Task }> = ({ task }) => {
  return (
    <li>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <span>{task.category}</span>
    </li>
  );
};

export default TaskItem;
