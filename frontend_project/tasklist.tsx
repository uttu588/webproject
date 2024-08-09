import React from 'react';
import TaskItem from './TaskItem';

const TaskList: React.FC<{ tasks: Task[] }> = ({ tasks }) => {
  return (
    <ul>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
