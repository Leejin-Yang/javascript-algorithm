const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [fp, ...flow] = input
const firstPlayer = Number(fp)
const flows = flow.map((f) => f.split(' ').map(Number))

const player = {
  first: firstPlayer,
  second: firstPlayer === 2 ? 1 : 2
}

const init = {1: 0, 2: 0, 3: 0}

const firstPlayerResult = {
  row: {...init},
  col: {...init},
  same: 0,
  equal: 0,
  four: 0
}

const secondPlayerResult = {
  row: {...init},
  col: {...init},
  same: 0,
  equal: 0,
  four: 0
}

const addCoordinate = (x, y, result) => {
  const isSame = x === 2 && y === 2
  const isEqual = x === y
  const isFour = x + y === 4
  
  result.row[x] += 1
  result.col[y] += 1
  
  if (isSame) {
    result.same += 1
    return
  }
  
  if (isEqual) result.equal += 1
  if (isFour) result.four += 1
}

const isLeftDiagonal = (result) => result.same === 1 && result.equal === 2
const isRightDiagonal = (result) => result.same === 1 && result.four === 2
const isRowBingo = (result) => Object.values(result.row).some((val) => val === 3)
const isColBingo = (result) => Object.values(result.col).some((val) => val === 3)

const isWin = (result) => isLeftDiagonal(result) || isRightDiagonal(result) || isRowBingo(result) || isColBingo(result)

let answer = 0

for(let i = 0; i < flows.length; i += 1) {
  const [x, y] = flows[i]
  
  if (i % 2 === 0) {
    addCoordinate(x, y, firstPlayerResult)
  } else {
    addCoordinate(x, y, secondPlayerResult)
  }
  
  if (isWin(firstPlayerResult)) {
    answer = player.first
    break
  }
  
  if (isWin(secondPlayerResult)) {
    answer = player.second
    break
  }
}

console.log(answer)