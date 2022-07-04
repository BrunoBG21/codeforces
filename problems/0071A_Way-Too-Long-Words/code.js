const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.once('line', (n) => {
    let count = 0;
    rl.on('line', (word) => {
        count++;
        if (word.length > 10) {
            console.log(word[0] + (word.length - 2) + word[word.length - 1]);
        } else {
            console.log(word);
        }

        if (count == n) {
            rl.close();
        }
    });
});