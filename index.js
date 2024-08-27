const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/tasks', (req, res) => {
  const { title, completed } = req.body;

  if (!title) {
    return res.status(400).json({ message: 'Title is required' });
  }

  if (typeof title === 'string' && typeof completed === 'boolean') {
    res.status(201).json({ message: 'Tarefa criada com sucesso!', task: { title, completed } });
  } else {
    res.status(400).json({ message: 'Dados da tarefa inválidos.' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
