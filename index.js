const http = require("http");
const port = 8080;
//new server
const server = http.createServer();

//on request
server.on("request", (req, res) => {
  console.log("request received", req);
  console.log("route", req.url);

  if (req.url === "/watermelon") {
    res.end("🍉");
  } else {
    res.end("hello");
  }
});

//start server
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
