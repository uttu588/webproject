import React, { useState } from 'react';

const TaskForm: React.FC<{ onSave: (task: Task) => void }> = ({ onSave }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('To Do');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ id: Date.now(), title, description, category });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Task Title"
        required
      />
      <textarea
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Task Description"
        required
      />
      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
        <option value="Timeout">Timeout</option>
      </select>
      <button type="submit">Save Task</button>
    </form>
  );
};

export default TaskForm;
