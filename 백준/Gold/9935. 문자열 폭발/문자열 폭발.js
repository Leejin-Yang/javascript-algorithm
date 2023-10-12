const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [str, boom] = input
let a = []

const boomArr = boom.split('')

for (let i = 0; i < str.length; i += 1) {
  const char = str[i]
  
  a.push(char)
    
  if (char !== boom[boom.length - 1]) continue
  
  const aLeng = a.length
  const x = boomArr.reduce((acc, cur, i) => {
    return acc += a[aLeng - boomArr.length + i]
  }, '')

    
  if (x === boom) {
    boomArr.forEach((_) => {
      a.pop()
    })
  }
}

const answer = a.join('') !== '' ? a.join('') : 'FRULA'

console.log(answer)