const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.once('line', (n) => {
    let count = 0;
    let result = 0;
    rl.on('line', (line) => {
        count++;
        const lineSplitted = line.split(' ');
        const solutions = lineSplitted.reduce((c, n) => c += parseInt(n), 0);

        if (solutions > 1) {
            result++;
        }

        if (count == n) {
            console.log(result);
            rl.close();
        }
    });
});