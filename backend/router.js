const express = require('express');
const path = require('path');
const app = express();
const port = 3025;

module.exports = {
  serveSite: function() {
    serveBackend()
    serveAssets()
    serveFrontend()
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  }

}

function serveFrontend() {
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/../frontend/index.html'));
  })
}

function serveAssets() {
  app.use(express.static('assets'))
}

function serveBackend() {
  app.get('/hello/:msg', (req, res) => {
    const { msg } = req.params;
    res.set('Content-Type', 'text/html');

    const htmlOutput = `<div>HELLO ${msg}</div>`;
    res.send(htmlOutput);

  });



  app.get('/button', (req, res) => {
    const compliments = [
      'You have a great smile!',
      'Your kindness is contagious.',
      'You are a true inspiration.',
      'Your positive energy is infectious.'
    ];

    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];

    res.set('Content-Type', 'text/html');
    res.send(`<button type="button">${randomCompliment}</button>`);
  });
}



