const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let answer = 0

for (let i = 2; i <= input; i += 1) {
  if (i % 2 === 0) {
    answer = answer * 2 + 1
  } else {
    answer = answer * 2 - 1
  }
  
  answer = answer % 1_000_000_007
}

console.log(answer)