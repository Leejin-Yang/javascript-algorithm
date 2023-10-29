const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [env, ...flows] = input.map((i) => i.split(' '))
const [N, M] = env.map(Number)

const buckets = Array.from({length: N}, (_, i) => i + 1)

flows.forEach((flow) => {
  const [a, b] = flow
  if (a !== b) {
    const aNum = buckets[a - 1]
    const bNum = buckets[b - 1]
    buckets[b - 1] = aNum
    buckets[a - 1] = bNum
  }
})

console.log(buckets.join(' '))
