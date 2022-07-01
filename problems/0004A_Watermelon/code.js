const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    console.log(line > 2 && (line % 2) == 0 ? "YES" : "NO");
    rl.close();
});