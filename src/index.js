const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.end("Hello World");
  }
});

server.listen(3000, () => {
  console.log("Server on http://localhost:3000");
});
