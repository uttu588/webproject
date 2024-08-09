import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import CategorySlider from './CategorySlider';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('To Do');

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const filteredTasks = tasks.filter(task => task.category === selectedCategory);

  return (
    <div>
      <CategorySlider
        categories={['To Do', 'In Progress', 'Done', 'Timeout']}
        onSelect={setSelectedCategory}
      />
      <TaskForm onSave={addTask} />
      <TaskList tasks={filteredTasks} />
    </div>
  );
};

export default App;
