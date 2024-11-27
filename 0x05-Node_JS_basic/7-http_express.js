const express = require('express');
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

const app = express();

app.get('/')
