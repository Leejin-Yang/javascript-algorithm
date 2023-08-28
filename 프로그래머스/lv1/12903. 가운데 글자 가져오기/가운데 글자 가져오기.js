function solution(s) {
    const length = s.length;
    const half = parseInt(length / 2, 10);
    
    
    if (length % 2 === 0) {
        return s[half - 1] + s[half]
    }
    
    return s[half]
}