function getBottleCount(a, b, n, answer) {
    if (n < a) return answer
    
    let q = answer
    const maxCount = Math.floor(n / a);
    const givingCount = maxCount * a;
    const gettingCount = maxCount * b;
    const bottles = n - givingCount + gettingCount
    q += gettingCount;
    
    return getBottleCount(a, b, bottles, q);
}

function solution(a, b, n) {
    const answer = getBottleCount(a, b, n, 0)
    return answer
    
    
}