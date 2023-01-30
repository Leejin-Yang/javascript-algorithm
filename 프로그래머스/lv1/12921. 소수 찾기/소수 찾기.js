function getPrimes(num) {
    const primes = [false, false, ...Array(num - 1).fill(true)];
    
    for (let i = 2; i * i <= num; i += 1) {
        if (primes[i]) {
            for (let j = i * 2; j <= num; j += i) {
                primes[j] = false;
            }
        }
    }
    
    return primes.filter(Boolean);
}

function solution(n) {
    const primes = getPrimes(n)
    return primes.length
}