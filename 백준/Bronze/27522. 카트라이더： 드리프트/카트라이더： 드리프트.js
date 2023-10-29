const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const records = input.map((a) => a.split(' '))
const score = [10, 8, 6, 5, 4, 3, 2, 1]
const scoreBoard = {
  R: {score: 0, bestRank: 0, name: 'Red'},
  B: {score: 0, bestRank: 0, name: 'Blue'},
}

records.sort(([a], [b]) => {
  const [minA, secA, mSecA] = a.split(':').map(Number)
  const [minB, secB, mSecB] = b.split(':').map(Number)
  
  if (minA !== minB) return minA - minB
  if (secA !== secB) return secA - secB
  return mSecA - mSecB
})

records.forEach((record, i) => {
  const [_, team] = record
  scoreBoard[team].score += score[i]
  if (scoreBoard[team].bestRank === 0) {
    scoreBoard[team].bestRank = i + 1
  }
})

const answer = Object.values(scoreBoard).reduce((acc, cur) => {
  if (cur.score > acc.score) return cur
  if (cur.score === acc.score) {
    return cur.bestRank < acc.bestRank ? cur : acc
  }
  return acc
}, {score: 0, bestRank: 0}).name

console.log(answer)
