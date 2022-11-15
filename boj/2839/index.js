const input = '11';
// expect 3

function solution(input) {
  let weight = Number(input);
  let count = 0;

  while (weight % 5 !== 0) {
    if (weight < 3) {
      console.log(-1);
      return;
    }

    weight -= 3;
    count += 1;
  }

  if (weight === 0) {
    console.log(count);
    return;
  }

  count += weight / 5;
  console.log(count);
}

solution(input);

// 1의 자리 수
// 0
// 1 8 5
// 2 9 6 3 0
// 3 0
// 4 1 8 5
// 5
// 6 3 0
// 7 4 1 8 5
// 8 5
// 9 6 3 0

// ex
// 14 11 8 5

// 예외
// 4 1
// 7 4 1
