// How to handle different URLs in NodeJS

const http = require("http");

const PORT = 3031;
const HOSTNAME = "localhost";

const server = http.createServer(async (req, res) => {
  // homepage
  // about page
  // contact page
  // product page
  // default page...> Error

  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Welcome to Node Server by Chinmay Kaitade!");
  } else if (req.url === "/about") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("This is About Page!");
  } else if (req.url === "/contact") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("This is Contact Page!");
  } else if (req.url === "/product") {
    const options = {
      hostname: "fakestoreapi.com",
      path: "/products/1",
      method: "GET",
    };

    const apiReq = http.request(options, (apiRes) => {
      apiRes.on("data", (data) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(data.toString());
      });
    });

    apiReq.on("error", () => {
      console.log(error);
    });

    apiReq.end();
  } else {
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain");
    res.end("Error! Page Not Found");
  }
});

server.listen(PORT, () => {
  console.log(`Server is running at ${HOSTNAME}:${PORT}`);
});
