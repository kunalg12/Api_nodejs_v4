const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    console.log("Hello world from Node.js");
    res.end();
  }
});

server.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
