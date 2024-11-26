const http = require('http');
const countStudents = require('./3-read_file_async');

const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, val) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        let data = val.toString().split('\n').filter((row) => row.trim() !== '');
        data = data.slice(1);

        const fields = {};
        console.log(`Number of students: ${data.length}`);
        data.forEach((row) => {
          const field = row.split(',').slice(-1);

          if (!fields[field]) {
            fields[field] = [];
          }

          fields[field].push(row.split(',').slice(0, 1));
        });
        for (const field of Object.keys(fields)) {
          const numStud = fields[field].length;
          const studList = fields[field].join(', ');

          console.log(`Number of students in ${field}: ${numStud}. List: ${studList}`);
        }
        resolve(val);
      }
    });
  });
}

module.exports = countStudents;

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
