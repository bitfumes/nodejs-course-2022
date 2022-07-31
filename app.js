const Circle = require("./circle");
const circle = new Circle();
console.log(circle.area(5));
console.log(circle.circumference(5));

// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "application/json" });
//   res.end(
//     JSON.stringify({
//       data: "Hello World!",
//     })
//   );
// });

// server.listen(3000);
