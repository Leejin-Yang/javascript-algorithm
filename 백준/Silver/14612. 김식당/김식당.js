const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [env, ...flows] = input
const [flowCount, tableCount] = env.split(' ').map(Number)

let answer = []

flows.forEach((flow) => {
  const [action] = flow.split(' ')
  
  if (action === 'order') {
    const [_, tableNum, time] = flow.split(' ')
    answer.push({tableNum, time})
  } else if (action === 'complete') {
    const [_, tableNum] = flow.split(' ')
    answer = answer.filter((a) => a.tableNum !== tableNum)
  } else if (action === 'sort') {
    answer.sort((a, b) => a.tableNum - b.tableNum).sort((a, b) => a.time - b.time)
  }
  
  const posts = answer.map((a) => a.tableNum).join(' ')
  const message = posts.length !== 0 ? posts : 'sleep'
  console.log(message)
})
