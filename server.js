const http = require('http');

const toDos = [
  { id: 1, text: 'To Do one' },
  { id: 2, text: 'To Do Two' },
  { id: 3, text: 'To Do Three' },
];

const server = http.createServer((req, res) => {
  /** Custom headers start with X- */
  res.writeHead(404, {
    'Content-Type': 'application/json',
    'X-Powered-By': 'Node.js',
  });

  let body = [];
  req
    .on('data', (chunk) => {
      body.push(chunk);
    })
    .on('end', () => {
      body = Buffer.concat(body);
      console.log(body);
    });

  res.end(
    JSON.stringify({
      success: false,
      error: 'Not Found.',
      data: null,
    })
  );
});

const PORT = 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
