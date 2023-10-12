const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const target = Number(input)

function solution() {
    if (target === 1) return 1
    let index = 1
    
    while(target !== 1) {
      const maxRoom = 3 * index * (index + 1) + 1  
      if (maxRoom >= target) break;
      index++
    }
    
    return index + 1
}

console.log(solution())