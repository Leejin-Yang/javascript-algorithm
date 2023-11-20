// 큐가 있고
// 첫 노드가 시작점
// 동서남북 다음 후보로 검사
// 이미 방문한 노드면 최단거리가 아니니까
// [...[1, 2, 10],[1, 3, 10], .......]
const dx = [1, -1, 0, 0]
const dy = [0, 0, 1, -1]

class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value
  }

  peek() {
    return this.queue[this.front]
  }

  size() {
    return this.rear - this.front;
  }
}

function solution(maps) {
    const n = maps[0].length - 1
    const m = maps.length - 1
    
    const visitedMaps = maps.map((el) => el.map(() => false))
    const queue = new Queue()
    let answer = -1
    
    queue.enqueue([0, 0, 1])
    visitedMaps[0][0] = true
    
    while (queue.size() > 0) {
        const [currentY, currentX, count] = queue.dequeue()
        
        if (currentY === m && currentX === n) {
            answer = count
            break
        }
        
        for (let i = 0; i < 4; i += 1) {
            const nextY = currentY + dy[i]
            const nextX = currentX + dx[i]
            
            const isAvailableX = nextX >= 0 && nextX <= n
            const isAvailableY = nextY >= 0 && nextY <= m
            const isVisited = isAvailableX && isAvailableY ? visitedMaps[nextY][nextX] : false
            const isWall = isAvailableX && isAvailableY ? maps[nextY][nextX] === 0 : true
            
            if (!isVisited && isAvailableX && isAvailableY && !isWall) {
                queue.enqueue([nextY, nextX, count + 1])
                visitedMaps[nextY][nextX] = true
            }
        }
    }
    
    return answer
}