const http = require('http');

// Define the port
const PORT = process.env.PORT || 3000;

// Create server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<center><h1>Sim dako itlog</h1></center>');
});

// Start listening
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
