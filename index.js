const http = require("http");
const { v4: uuidv4 } = require("uuid");
const randomString = uuidv4(); // Generates a random UUID
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(`Hello World ${randomString} \n `);
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
