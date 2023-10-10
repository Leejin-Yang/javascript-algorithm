const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [length, ...numbers] = input.map((i) => i.split(' ').map(Number))
const answer = numbers.map(([a, b]) => a + b).join('\n')
console.log(answer)