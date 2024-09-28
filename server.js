const dotenv = require("dotenv")
dotenv.config()
const http = require('http');
const port = process.env.PORT || 3001;

http.createServer(function(request, response) {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.end(`
    <html>
      <head>
        <style>
          body {
            background-color: #f2f2f2;
            font-family: Arial, sans-serif;
            text-align: center;
          }
          h1 {
            color: #007bff;
            margin-top: 50px;
          }
        </style>
      </head>
      <body>
        <h1>Hello Azure!!</h1>
      </body>
    </html>
  `);
}).listen(port);

console.log(`Server running at http://localhost:${port}`);