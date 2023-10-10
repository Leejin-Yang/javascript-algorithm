const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const [K, D, A] = input.split('/').map(Number)
const answer = K + A < D ? 'hasu' : D === 0 ? 'hasu' : 'gosu'
console.log(answer)