const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [M, N] = input[0].split(' ').map(Number)
const board = input.slice(1, input.length).map((row) => row.split(' ').map(Number))

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
  if (board.every((row) => row.every((col) => col === 1 || col === -1))) {
      return 0
  }
  
  const queue = new Queue()
  const visited = board.map((row) => row.map((col) => col === -1 ? true : false))
  let answer = 0
  
  board.forEach((row, i) => {
    row.forEach((col, j) => {
      if (board[i][j] === 1) {
        queue.enqueue([i, j])
        visited[i][j] = true
      }
    })
  })
  
  while (queue.size() > 0) {
    const size = queue.size()
    
    for (let i = 0; i < size; i += 1) {
      const value = queue.dequeue()
      
      for(let j = 0; j < 4; j += 1) {
        const newRow = value[0] + dr[j]
        const newCol = value[1] + dc[j]
        
        const isAvailableRow = newRow >= 0 && newRow < N
        const isAvailableCol = newCol >= 0 && newCol < M
        const isAvailable = isAvailableRow && isAvailableCol && !visited[newRow][newCol]
        
        if (isAvailable) {
          queue.enqueue([newRow, newCol])
          visited[newRow][newCol] = true
        }
      }
    }
    
    answer += 1
    
    if (visited.every((row) => row.every((col) => col === true))) {
      break
    }
  }
  
  if (visited.every((row) => row.every((col) => col === true))) {
    return answer
  }
  
  return -1
}

console.log(solution())
