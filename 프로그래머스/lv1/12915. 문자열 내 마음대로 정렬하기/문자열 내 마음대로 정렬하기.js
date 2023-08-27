const sortFromTargetChar = (n) => (prev, cur) => {
  if(prev[n] > cur[n]) return 1;
  if(prev[n] < cur[n]) return -1;
    
  return 0;
}

function solution(strings, n) {
    return [...strings].sort().sort(sortFromTargetChar(n))
}