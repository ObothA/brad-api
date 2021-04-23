const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  /** Custom headers start with X- */
  res.setHeader('X-Powered-By', 'Node.js');
  res.write('<h1>Hello</h1>');
  res.write('<h2>Hello</h2>');
  res.end();
});

const PORT = 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
