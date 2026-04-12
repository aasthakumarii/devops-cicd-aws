const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from CI/CD Project 🚀');
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP' });
});

app.get('/about', (req, res) => {
  res.send('This is a DevOps CI/CD demo project');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

// app.js
console.log("Testing dev branch");