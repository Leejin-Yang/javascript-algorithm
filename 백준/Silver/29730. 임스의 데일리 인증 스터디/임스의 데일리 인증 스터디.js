const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [count, ...studyArr] = input

const isBoj = (study) => {
  const arr = study.split('/')
  return arr[0] === 'boj.kr' && !isNaN(Number(arr[1]))
}

const bojStudy = studyArr.filter((study) => isBoj(study))
const extraStudy = studyArr.filter((study) => !isBoj(study))

extraStudy.sort((a, b) => {
  if (a.length === b.length) {
    if (a > b) return 1
    if (a < b) return -1
  }
  
  return a.length - b.length
})

bojStudy.sort((a, b) => {
  const aNumber = Number(a.split('/')[1])
  const bNumber = Number(b.split('/')[1])
  return aNumber - bNumber
})

const sortedStudyArr = extraStudy.concat(bojStudy)
console.log(sortedStudyArr.join('\n'))
