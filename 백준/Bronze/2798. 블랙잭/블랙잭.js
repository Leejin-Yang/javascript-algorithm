const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [env, arr] = input
const [N, M] = env.split(' ').map(Number)
const numbers = arr.split(' ').map(Number)

function solution() {
  let answer = 0
  
  for (let i = 0; i < numbers.length; i += 1) {
    const first = numbers[i]

    for (let j = i + 1; j < numbers.length; j += 1) {
      const second = numbers[j]

      for (let k = j + 1; k < numbers.length; k += 1) {
        const third = numbers[k]

        const sums = first + second + third

        if (sums > M) continue
        if (sums === M) {
          return sums
        }
        if (answer < sums) {
          answer = sums
        }
      }
    }
  }
  
  return answer
}

console.log(solution())