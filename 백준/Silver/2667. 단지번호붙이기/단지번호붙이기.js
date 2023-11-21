const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0])
const board = input.slice(1, input.length).map((s) => s.split('').map(Number))

const houseBoard = []

board.forEach((row, i) => {
  row.forEach((col, j) => {
    if (col === 1) {
      houseBoard.push([i, j])      
    }
  })
})

class Queue {
  constructor() {
    this.queue = []
    this.start = 0
    this.rear = 0
  }
  
  enqueue(value) {
    this.queue[this.rear++] = value
  }
  
  dequeue() {
    const value = this.queue[this.start]
    delete this.queue[this.start]
    this.start += 1
    return value
  }
  
  size() {
    return this.rear - this.start    
  }
}

const dr = [-1, 1, 0, 0]
const dc = [0, 0, -1, 1]

function solution() {
  const queue = new Queue()
  const visited = board.map((row) => row.map(() => false))
  const houseCountArr = []
  
  houseBoard.forEach((coor) => {
    if (visited[coor[0]][coor[1]]) return
    
    queue.enqueue(coor)
    visited[coor[0]][coor[1]] = true
    
    let houseCount = 0
    
    while (queue.size() > 0) {
      houseCount += 1
      const [row, col] = queue.dequeue()
      
      for (let i = 0; i < 4; i += 1) {
        const nextRow = row + dr[i]
        const nextCol = col + dc[i]
        
        const isAvailableRow = nextRow >= 0 && nextRow < N
        const isAvailableCol = nextCol >= 0 && nextCol < N
        const isHome = isAvailableRow && isAvailableCol ? board[nextRow][nextCol] === 1 : false

        if (isHome && !visited[nextRow][nextCol]) {
          queue.enqueue([nextRow, nextCol])
          visited[nextRow][nextCol] = true
        }
        
      }
    }
    
    houseCountArr.push(houseCount)
  })
  
  return houseCountArr
}

const arr = solution()
console.log(`${arr.length}\n${arr.sort((a, b) => a - b).join('\n')}`)
