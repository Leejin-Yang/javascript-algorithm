const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [env, ...price] = input
const [N, M] = env.split(' ').map(Number)
const prices = price.map((p) => p.split(' ').map(Number))

const sixMin = prices.reduce((acc, cur) => {
  const sixPrice = cur[0]
  
  if (acc === -1) return sixPrice
  
  return Math.min(acc, sixPrice)
}, -1)

const oneMin = prices.reduce((acc, cur) => {
  const onePrice = cur[1]
  
  if (acc === -1) return onePrice
  
  return Math.min(acc, onePrice)
}, -1)

function solution() {
  if (sixMin > oneMin * 6) return oneMin * N

  const sixBuyCount = Math.floor(N / 6)
  const oneBuyCount = N % 6
  
  const totalSixBuyPrice = sixMin * sixBuyCount
  const totalOneBuyPrice = oneMin * oneBuyCount
  
  return totalSixBuyPrice + (sixMin < totalOneBuyPrice ? sixMin : totalOneBuyPrice)
}

console.log(solution())
