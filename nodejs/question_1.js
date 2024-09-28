const http = require("http");
const url = require("url");

const PORT = 3000;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  if (pathname === "/") {
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    res.end("Hello, World!");
  } else {
    res.writeHead(404, {
      "Content-Type": "text/plain",
    });
    res.end("Sorry! route not found.");
  }
});

server.listen(PORT, () => {
  console.log(`Server is listening on the port ${PORT}`);
});
