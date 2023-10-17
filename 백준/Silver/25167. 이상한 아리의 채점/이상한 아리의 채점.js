const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [env, name, ...timeflow] = input
const [questionCnt, peopleCnt, solveCnt] = env.split(' ').map(Number)
const names = name.split(' ')
const workflow = timeflow.map((flow) => flow.split(' '))

const isSolved = (str) => str === 'solve' ? true : false

const getResult = (question) => question.reduce((acc, cur) => {
  const [_, time, name, solv] = cur
  
  if (!acc[name]) {
    if (isSolved(solv)) {
      return {...acc, [name]: {time: time.split(':'), isSolved: isSolved(solv), score: peopleCnt + 1}}
    }
    return {...acc, [name]: {time: time.split(':'), isSolved: isSolved(solv), score: 0}}
  }
  
  if (acc[name].score > 0) return acc
  if (!isSolved(solv)) return acc
  if (typeof acc[name].time === 'number') return acc
  
  const hourDiff = time.split(':')[0] - acc[name].time[0]
  const minDiff = time.split(':')[1] - acc[name].time[1]
  const timeDiff = hourDiff * 60 + minDiff
  
  return {...acc, [name]: {time: timeDiff, isSolved: isSolved(solv), score: 0}}
}, {})

const N = names.reduce((acc, cur) => ({...acc, [cur]: 0}), {})

for(let i = 1; i <= questionCnt; i += 1) {
  const question = workflow.filter((w) => w[0] === i + '')
  const result = getResult(question)
  const ranks = []
  
  names.forEach((name) => {
    if (!result[name]) {
      N[name] = N[name] + peopleCnt + 1
      return
    }
    
    if (result[name].score > 0) {
      N[name] = N[name] + result[name].score
      delete result[name]
      return
    }
    
    if (!result[name].isSolved) {
      N[name] = N[name] + peopleCnt
      delete result[name]
      return
    }
    
    ranks.push({name, time: result[name].time})
  })
  
  Object.values(ranks).sort((a, b) => a.time - b.time).forEach(({name}, i) => {
    N[name] = N[name] + i + 1
  })
}

const answer = Object.entries(N).sort((a, b) => a[0] > b[0] ? 1 : a[0] === b[0] ? 0 : -1).sort((a, b) => a[1] - b[1]).map((x) => x[0]).join('\n')

console.log(answer)