const fs = require('fs');

function readDatabase(path) {
  return new Promise((res, rej) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        rej(err);
      } else {
        let value = data.toString().split('\n');
        value = value.filter((val) => val.trim() !== '');
        value = value.slice(1);

        const fields = {};
        value.forEach((val) => {
          const field = val.split(',').slice(-1);
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(val.split(',').slice(0, 1));
        });
        res(fields);
      }
    });
  });
}

module.exports = readDatabase;
