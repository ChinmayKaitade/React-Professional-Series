const http = require("http");
const { hostname } = require("os");

const PORT = 3001;
const HOSTNAME = "localhost";

const server = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Node Server created by Chinmay Kaitade!");
});

server.listen(PORT, () => {
  console.log(`Server is running at ${HOSTNAME}:${PORT}`);
});
