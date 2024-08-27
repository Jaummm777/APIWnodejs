const Task = require('../Modelos/task');

let tasks = [];
let idCounter = 1;

const getAllTasks = (req, res) => {
  res.json(tasks);
};

const createTask = (req, res) => {
  const { title, completed } = req.body;
  if (!title) return res.status(400).send('Title is required');

  const task = new Task(idCounter++, title, completed || false);
  tasks.push(task);
  res.status(201).json(task);
};

const getTaskById = (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).send('Task not found');
  res.json(task);
};

const updateTask = (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).send('Task not found');

  const { title, completed } = req.body;
  if (title) task.title = title;
  if (completed !== undefined) task.completed = completed;

  res.json(task);
};

const deleteTask = (req, res) => {
  tasks = tasks.filter(t => t.id !== parseInt(req.params.id));
  res.status(204).send();
};

module.exports = {
  getAllTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask
};
