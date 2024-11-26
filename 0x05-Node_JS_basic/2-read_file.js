const fs = require('fs');

function countStudents(path) {
  try {
    let data = fs.readFileSync(path, 'utf-8');

    data = data.split('\n').filter((row) => row.trim() !== '');
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
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
