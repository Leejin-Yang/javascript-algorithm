// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// const arr = lengths.flatMap((l) => Array.from({ length: Math.pow(2, l - 1) }, (_, i) => calcCurrentNumber(l, i)))

// ======================================

// 배열로 만들어서 각 input에 대한 갯수 구하기

// const input = '1'

// const getDigit = (l, i) => parseInt(i / Math.pow(2, l - 1), 10) % 2 === 0 ? 5 : 1
// const calcCurrentNumber = (l, i) => Array.from({ length: l }, (_, i) => i).reduce((acc, cur) => acc += getDigit(cur, i), 0)

// const lengths = Array.from({ length: +input }, (_, i) => i + 1)

// const lastNum = lengths[lengths.length - 1]
// const arr = Array.from({ length: Math.pow(2, lastNum - 1) }, (_, i) => calcCurrentNumber(lastNum, i))
// const answer = arr.filter((num) => num % 3 === 0).length % 1_000_000_007

// console.log(answer)

// ======================================

const input = '1515';

let answer = 0;

for (let i = 2; i <= input; i += 1) {
  if (i % 2 === 0) {
    answer = answer * 2 + 1;
  } else {
    answer = answer * 2 - 1;
  }

  answer = answer % 1_000_000_007;
}

console.log(answer);

// ======================================

// 규칙 찾기

// 1    2.           3
// 0 1, 0  1  2  3
// 1 5, 11 15 51 55, 111 115 151 155 511 515 551 555

// 10^0 1 5
// 10^1 1 1 5 5
// 10^2 1 1 1 1 5 5 5 5

//3 100 * index / 2^2 % 2 === 0 ? 1 : 5
//2 10  * index / 2^1 % 2 === 0 ? 1 : 5
//1 1   * index / 2^0 % 2 === 0 ? 1 : 5

// 1 2     3
// 5 15 55 115 155 515 555
// 0 0  1  0   1   2   3
// 5 6. 10. 7. 11. 11. 15

// 1 2 3 4 5 6  7  8  9  10  11  12
// 0 1 1 3 5 11 21 43 85 171 341 683
//
// 675132657
