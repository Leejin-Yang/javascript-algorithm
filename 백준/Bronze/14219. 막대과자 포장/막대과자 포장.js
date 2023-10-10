const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const [row, col] = input.split(' ').map(Number);

function solution(row, col) {
  if (col % 3 === 0) return 'YES'
  
  if (col % 3 === 1 || col % 3 === 2) {
    return row % 3 === 0 ? 'YES' : 'NO'
  }
  
  return 'NO'
}

console.log(solution(row, col));