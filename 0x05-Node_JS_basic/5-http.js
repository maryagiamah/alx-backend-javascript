const http = require('http');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, val) => {
      if (err) {
        reject(err);
      } else {
        let data = val.toString().split('\n').filter((row) => row.trim() !== '');
        data = data.slice(1);

        const fields = {};
        const output = [];

        output.push(`Number of students: ${data.length}`);
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

          output.push(`Number of students in ${field}: ${numStud}. List: ${studList}`);
        }
        resolve(output.join('\n'));
      }
    });
  });
}

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2]).then((data) => {
      res.end(data);
    }).catch(() => {
      res.statusCode = 404;
      res.end('Cannot load the database');
    });
  }
}).listen(1245);

module.exports = app;
