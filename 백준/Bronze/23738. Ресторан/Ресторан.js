const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const changeChar = (char) => ({
  B: 'v',
  E: 'ye',
  H: 'n',
  P: 'r',
  C: 's',
  Y: 'u',
  X: 'h'
}[char] ?? char)

const changedStr = input.split('').map((char) => changeChar(char)).join('').toLowerCase()

console.log(changedStr)
                              