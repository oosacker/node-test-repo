// var http = require('http');
// var url = require('url');

// const hostname = '127.0.0.1';
// const port = 8080;

// const server = http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   var q = url.parse(req.url, true).query;
//   var txt = q.year + " " + q.month;
//   res.end(txt);
// })

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`)
// });

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send(`the time is: ${new Date()}`))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))


