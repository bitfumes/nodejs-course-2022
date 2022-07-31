const http = require("http");
const PORT = 3000;
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        data: "Hello World!",
      })
    );
  }

  if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        data: "I am about page",
      })
    );
  }else{
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        data: "page not found",
      })
    );
  }
});

console.log(`server is running at http://localhost:${PORT}`);
server.listen(PORT);
