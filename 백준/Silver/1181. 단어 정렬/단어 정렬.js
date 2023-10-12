const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [count, ...arr] = input

const arrSet = [...new Set(arr)]
const answer = [...arrSet].sort().sort((a, b) => a.length - b.length).join('\n')

console.log(answer)