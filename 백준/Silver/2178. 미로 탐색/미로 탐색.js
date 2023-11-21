const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [row, col] = input[0].split(' ').map(Number)
const board = input.slice(1, input.length).map((s) => s.split('').map(Number))

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
  let answer = 0
  
  queue.enqueue([0, 0, 1])
  visited[0][0] = true
  
  while(queue.size() > 0) {
    const [currentRow, currentCol, length] = queue.dequeue()
    
    if (currentRow === row - 1 && currentCol === col - 1) {
      answer = length
      break
    }
    
    for (let i = 0; i < 4; i += 1) {
      const nextRow = currentRow + dr[i]
      const nextCol = currentCol + dc[i]
      
      const isAvailableRow = nextRow >= 0 && nextRow < row
      const isAvailableCol = nextCol >= 0 && nextCol < col
      const isAvailable = isAvailableRow && isAvailableCol && !visited[nextRow][nextCol] && board[nextRow][nextCol] === 1
      
      if (isAvailable) {
        queue.enqueue([nextRow, nextCol, length + 1])
        visited[nextRow][nextCol] = true
      }
    }
  }
  
  return answer
}

console.log(solution())
