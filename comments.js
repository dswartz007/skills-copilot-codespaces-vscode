// Create web server with node.js
// 1. Create a web server
// 2. Define a route
// 3. Send a response to the client
// 4. Start the server

// 1. Create a web server
const http = require('http');
const server = http.createServer((req, res) => {
  // 2. Define a route
  if (req.url === '/comments') {
    // 3. Send a response to the client
    res.end('Here are the comments');
  } else if (req.url === '/products') {
    res.end('Here are the products');
  } else {
    res.end('Welcome to our website');
  }
});

// 4. Start the server
server.listen(3000);
console.log('Server is running on http://localhost:3000');
