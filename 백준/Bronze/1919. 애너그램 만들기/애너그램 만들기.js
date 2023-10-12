const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [str1, str2] = input

const getStrObj = (str) => str.split('').reduce((acc, cur) => {
  acc[cur] = acc[cur] ? acc[cur] + 1 : 1
  return acc
}, {})

const strObj1 = getStrObj(str1)
const strObj2 = getStrObj(str2)

Object.keys(strObj1).forEach((char) => {
  if (char in strObj2) {
    const min = Math.min(strObj1[char], strObj2[char])
    strObj1[char] -= min
    strObj2[char] -= min
  }
})

const removeCount1 = Object.values(strObj1).reduce((acc, cur) => acc + cur, 0)
const removeCount2 = Object.values(strObj2).reduce((acc, cur) => acc + cur, 0)

console.log(removeCount1 + removeCount2)