const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = 10
const board = input.map((a) => a.split(''))
const arr = []

for (let y = 0; y < N; y += 1) {
  for (let x = 0; x < N; x += 1){
    if (board[y][x] === '.') {
      arr.push([y, x])
    }
  }
}

// ===============

function canWin(y, x) {
  let count = 0
  // x
  for (let a = x - 1; a >= 0; a -= 1) {
    if (board[y][a] === 'O' || board[y][a] === '.') break
    count += 1
  }
  
  for (let b = x + 1; b < N; b += 1) {
    if (board[y][b] === 'O' || board[y][b] === '.') break
    count += 1
  }
  
  if (count >= 4) {
    return 1
  }
  
  count = 0
  
  // y
  for (let c = y - 1; c >= 0; c -= 1) {
    if (board[c][x] === 'O' || board[c][x] === '.') break
    count += 1
  }
  
  for (let d = y + 1; d < N; d += 1) {
    if (board[d][x] === 'O' || board[d][x] === '.') break
    count += 1
  }
  
  if (count >= 4) {
    return 1
  }
  
  count = 0
  
  // left
  let currentX = x - 1
  let currentY = y - 1
  
  while (currentX >= 0 && currentY >= 0) {
    if (board[currentY][currentX] === 'O' || board[currentY][currentX] === '.') break
    count += 1
    currentX -= 1
    currentY -= 1
  }
  
  currentX = x + 1
  currentY = y + 1
  
  while (currentX < N && currentY < N) {
    if (board[currentY][currentX] === 'O' || board[currentY][currentX] === '.') break
    count += 1
    currentX += 1
    currentY += 1
  }
  
  if (count >= 4) {
    return 1
  }
  
  count = 0
  currentX = x + 1
  currentY = y - 1
  
  // right
  
  while (currentX < N && currentY >= 0) {
    if (board[currentY][currentX] === 'O' || board[currentY][currentX] === '.') break
    count += 1
    currentX += 1
    currentY -= 1
  }
  
  currentX = x - 1
  currentY = y + 1
  
  while (currentX >= 0 && currentY < N) {
    if (board[currentY][currentX] === 'O' || board[currentY][currentX] === '.') break
    count += 1
    currentX -= 1
    currentY += 1
  }
  
  if (count >= 4) {
    return 1
  }
  
  return 0
}

let answer = 0

for (let i = 0; i < arr.length; i += 1) {
  const [y, x] = arr[i]
  const num = canWin(y, x)
  if (num === 1) {
    answer = 1
    break
  }
}

console.log(answer)
