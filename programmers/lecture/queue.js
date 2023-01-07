class Queue {
  constructor(array, rear) {
    this.queue = array;
    this.front = 0;
    this.rear = rear;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  priorities() {
    return this.queue.filter(() => true).map((v) => v.priority);
  }

  isMax(value) {
    return Math.max(...this.priorities(), value.priority) === value.priority;
  }
}

function solution(priorities, location) {
  const array = priorities.map((priority, i) => ({ priority, location: i }));
  const queue = new Queue([...array], array.length);
  let count = 0;

  while (true) {
    const value = queue.dequeue();

    if (!queue.isMax(value)) {
      queue.enqueue(value);
      continue;
    }

    count += 1;

    if (value.location === location) {
      break;
    }
  }

  return count;
}

const priorities = [2, 1, 3, 2];
const location = 2;

const answer = solution(priorities, location);
console.log(answer);
