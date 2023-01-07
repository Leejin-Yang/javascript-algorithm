const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map((number) => +number);
const trees = input[1]
  .split(' ')
  .map((number) => +number)
  .sort((a, b) => a - b);

const getCutLength = (trees, height) =>
  trees.reduce((acc, cur) => {
    if (cur <= height) return acc;

    const cut = cur - height;
    return acc + cut;
  }, 0);

function getDifference(cut, get, trees) {
  const difference = cut - get;

  if (difference < 0) return Math.floor(difference / (trees + 1));

  return Math.floor(difference / trees);
}

function solution(lengthToGet, trees) {
  let start = 0;
  let end = trees.length - 1;
  let middle = 0;
  let cutLength = 0;

  while (lengthToGet !== cutLength && start <= end) {
    middle = Math.floor((start + end) / 2);
    cutLength = getCutLength(trees, trees[middle]);
    if (lengthToGet > cutLength) end = middle - 1;
    if (lengthToGet < cutLength) start = middle + 1;
  }

  if (cutLength === lengthToGet) return trees[middle];

  const higherTrees = trees.length - middle - 1;
  const heightToUp = getDifference(cutLength, lengthToGet, higherTrees);

  return trees[middle] + heightToUp;
}

console.log(solution(M, trees));