const http = require('http');

const toDos = [
  { id: 1, text: 'To Do one' },
  { id: 2, text: 'To Do Two' },
  { id: 3, text: 'To Do Three' },
];

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  /** Custom headers start with X- */
  res.setHeader('X-Powered-By', 'Node.js');
  res.end(
    JSON.stringify({
      success: true,
      data: toDos,
    })
  );
});

const PORT = 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
