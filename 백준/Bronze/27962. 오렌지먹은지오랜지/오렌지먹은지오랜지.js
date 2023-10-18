const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [len, str] = input
const length = Number(len)
const strArr = str.split('')

const getDiffCount = (str1, str2) => str1.reduce((acc, cur, i) => {
  if (cur === str2[i]) return acc
  return ++acc
}, 0)

function solution() {
  let index = 1
  let firstStr = [strArr[0]]
  let secondStr = [strArr[length - 1]]
  let answer = 'NO'

  if (getDiffCount(firstStr, secondStr) === 1) {
    return 'YES'
  }

  while(index < length) {
    firstStr = [...firstStr, strArr[index]]
    secondStr = [strArr[length - (index + 1)], ...secondStr]
    
    if (getDiffCount(firstStr, secondStr) === 1) {
      answer = 'YES'
      break
    }

    index++
  }
  
  return answer
}

console.log(solution())