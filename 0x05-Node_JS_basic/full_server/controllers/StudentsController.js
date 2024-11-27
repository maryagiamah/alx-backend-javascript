const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2]).then((data) => {
      const output = [];
      output.push('This is the list of our students');

      for (const key of Object.keys(data).sort()) {
        const numStud = data[key].length;
        const studList = data[key].join(', ');

        output.push(`Number of students in ${key}: ${numStud}. List: ${studList}`);
      }
      response.status(200).send(output.join('\n'));
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }

  static getAllStudentsByMajor(request, response) {
    if (['CS', 'SWE'].includes(request.params.major)) {
      const { major } = request.params.major;

      readDatabase(process.argv[2]).then((data) => {
        const output = `List: ${data[major].join(', ')}\n`;

        response.status(200).send(output);
      }).catch(() => {
        response.status(500).send('Cannot load the database');
      });
    } else {
      response.status(500).send('Major parameter must be CS or SWE');
    }
  }
}

module.exports = StudentsController;
