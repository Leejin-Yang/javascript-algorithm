// arr1[i][0] * arr2[0][j] + arr1[i][1] * arr2[1][j]

function multiply(arr1, arr2, i, j) {
  return arr2.reduce((acc, cur, index) => acc + cur[j] * arr1[i][index], 0);
}

function solution(arr1, arr2) {
  const answer = Array.from({ length: arr1.length }, (_, i) =>
    Array.from({ length: arr2[0].length }, (_, j) => multiply(arr1, arr2, i, j))
  );

  return answer;
}