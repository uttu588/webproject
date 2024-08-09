import { Router } from 'express';

const tasks = [{ id: 1, title: 'Sample Task', description: 'Sample', category: 'To Do' }];
const router = Router();

router.get('/tasks', (req, res) => {
  res.json(tasks);
});

router.post('/tasks', (req, res) => {
  const newTask = req.body;
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Other CRUD routes...

export default router;
