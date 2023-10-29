const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const bingo = input.slice(0, 5).map((a) => a.split(' '))
const flows = input.slice(5, 10).flatMap((a) => a.split(' '))

const checkBoard = {
  x: [0, 0, 0, 0, 0],
  y: [0, 0, 0, 0, 0],
  same: 0,
  sumFour: 0,
}

let count = 1

for (let i = 0; i < flows.length; i += 1) {
  const flow = flows[i]
  
  for(let y = 0; y < bingo.length; y += 1) {
    let isFound = false
    
    for (let x = 0; x < bingo[y].length; x += 1) {
      if (flow === bingo[y][x]) {
        if (x === 2 && y === 2) {
          checkBoard.same += 1
          checkBoard.sumFour += 1
        } else if (x === y) {
          checkBoard.same += 1
        } else if (Number(x) + Number(y) === 4) {
          checkBoard.sumFour += 1
        }
        
        checkBoard.x[x] += 1
        checkBoard.y[y] += 1
        isFound = true
        break
      }
    }
    
    if (isFound) break
  }
  
  const xBingo = checkBoard.x.filter((c) => c === 5).length
  const yBingo = checkBoard.y.filter((c) => c === 5).length
  const leftCross = checkBoard.same === 5 ? 1 : 0
  const rightCross = checkBoard.sumFour === 5 ? 1 : 0
  
 if (xBingo + yBingo + leftCross + rightCross >= 3) break
  
  count += 1
}

console.log(count)
