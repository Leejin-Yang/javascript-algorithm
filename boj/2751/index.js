const input = '5\n5\n4\n3\n2\n1'.split('\n');
// expect 1\n2\n3\n4\n5

function solution(input) {
  const numbers = input.slice(1);
  const sortedNumbers = numbers.sort((a, b) => a - b);
  const answer = sortedNumbers.join('\n');

  console.log(answer);
}

solution(input);
