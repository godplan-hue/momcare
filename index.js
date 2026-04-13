const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Momcare 서버 실행됨!");
});

server.listen(process.env.PORT || 3000);
