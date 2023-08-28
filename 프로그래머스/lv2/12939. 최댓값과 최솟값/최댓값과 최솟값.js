function solution(s) {
    const numArr = s.split(' ').map((num) => parseInt(num, 10));
    
    const minNum = Math.min(...numArr);
    const maxNum = Math.max(...numArr);
    
    return `${minNum} ${maxNum}`
}