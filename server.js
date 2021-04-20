const http = require('http');

const server = http.createServer((req, res) => {
  const { url, headers, method } = req;
  console.log(url, headers, method);
  res.end();
});

const PORT = 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
