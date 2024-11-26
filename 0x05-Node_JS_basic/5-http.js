const http = require('http');
const countStudents = require('./3-read_file_async');



const app = http.createServer((req, res) => {
  request.setHeader('Content-Type', 'text/plain'); 
  if (req.url === '/') {
    res.write('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students');
    const data = countStudents(process.argv[2]);
    res.end(data);
  }
}).listen(1245);

module.exports = app;
