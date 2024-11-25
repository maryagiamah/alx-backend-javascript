process.stdout.write('Welcome to Holberton School, what is your name?\n');

if (!process.stdin.isTTY) {
  process.on('exit', () => {
    process.stdout.write('This important software is now closing\n');
  });
}

process.stdin.on('data', (ans) => {
  process.stdout.write(`Your name is: ${ans.toString()}`);
  process.exit();
});
