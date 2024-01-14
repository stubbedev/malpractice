const express = require('express');
const app = express();
const port = 6666;

app.get('/compliment/:name', (req, res) => {
  const { name } = req.params;
  const compliments = [
    'You have a great smile!',
    'Your kindness is contagious.',
    'You are a true inspiration.',
    'Your positive energy is infectious.'
  ];

  const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];

  res.json({ compliment: `${name}, ${randomCompliment}` });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

