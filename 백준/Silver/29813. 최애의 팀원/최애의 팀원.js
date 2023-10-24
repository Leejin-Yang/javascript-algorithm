const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [env, ...arr] = input
const count = Number(env)
const flows = arr.map((el) => el.split(' ')).map((a) => ({ name: a[0], id: Number(a[1]) }))

let copied = [...flows]

while(copied.length > 1) {
  const currentStudent = copied.shift()
  const currentId = currentStudent.id
  const matchingIndex = currentId % copied.length === 0 ? copied.length - 1 : currentId % copied.length - 1
  const spliced = copied.splice(matchingIndex + 1)
  const matchingStudent = copied.pop()
  copied = [...spliced, ...copied]
}

console.log(copied[0].name)

// const input = [
//   '5',
//   'A 3',
//   'B 2',
//   'C 8',
//   'D 5',
//   'E 4',
// ]
// const input = [
//   '7',
// 'D 3',
// 'BZ 99',
// 'PVC 46',
// 'R 2',
// 'HG 13',
// 'T 5',
// 'YU 7',
// ]
