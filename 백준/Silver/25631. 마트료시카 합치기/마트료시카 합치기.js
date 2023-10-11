const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution() {
  const mats = input[1].split(' ').map(Number).sort((a, b) => b - a)
  let matSet = [...new Set(mats)]
  let count = 0

  while(mats.length !== 0) {  
    for (const item of matSet) {
      const index = mats.indexOf(item);
      
      if (index !== -1) {
        mats.splice(index, 1);
      }
    }
    
    matSet = [...new Set(mats)]
    count += 1
  }
  
  count += mats.length
  
  return count
}

console.log(solution())