function solution(n, arr1, arr2) {
    let answer = [];
    
    for (let i = 0; i < n; i += 1) {
        const sum = arr1[i] | arr2[i];
        const bit = sum.toString(2);
        const spaces = ' '.repeat(n - bit.length)
        const bitString = bit.replace(/1/gi, '#').replace(/0/gi, ' ');
        const string = spaces + bitString
        answer.push(string)
    }
    
    return answer;
}