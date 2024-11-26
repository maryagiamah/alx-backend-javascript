fs = require('fs');

function countStudents(path) {
  data = fs.readFileSync(path, 'utf-8');
  
  console.log(data);
  data = data.trim().split(',');

  console.log(data[1][1]);
}

module.exports = countStudents;
