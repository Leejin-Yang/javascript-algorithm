const input = ['5', '3 4', '1 1', '1 -1', '2 2', '3 3'];
// expect 1 -1\n1 1\n2 2\n3 3\n3 4

function solution(input) {
  const coordinates = input.slice(1).map((element) => element.split(' '));
  const numberArray = coordinates.map((coordinate) => {
    const [x, y] = coordinate;
    return [+x, +y];
  });

  const sortedY = numberArray.sort((a, b) => a[1] - b[1]);
  const sortedX = sortedY.sort((a, b) => a[0] - b[0]);
  const answer = sortedX.map((a) => a.join(' ')).join('\n');

  console.log(answer);
}

solution(input);

// y 기준 정렬
// [[1, -1], [3, 3], [3, 4], [2, 5], [1, 100]]

// x로 정렬 근데 같으면 y로 정렬
// 거꾸로 정렬 하면 된다.
