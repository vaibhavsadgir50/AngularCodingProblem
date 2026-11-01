const http = require('http');

// The constant deadline. Change it to any future date.
const DEADLINE = new Date('2026-11-01T16:10:00-05:00').getTime();

http
  .createServer((req, res) => {
    if (req.url === '/api/deadline') {
      const secondsLeft = Math.max(0, Math.round((DEADLINE - Date.now()) / 1000));
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ secondsLeft }));
    } else {
      res.statusCode = 404;
      res.end();
    }
  })
  .listen(3000, () => console.log('Mock API running on http://localhost:3000'));