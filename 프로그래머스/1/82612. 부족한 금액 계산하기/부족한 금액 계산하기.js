function solution(price, money, count) {
    const multiples = Array.from({ length: count }, (_, i) => i + 1)
    const totalPrice = multiples.reduce((acc, cur) => acc + cur * price, 0)
    const diff = totalPrice - money
    
    return diff > 0 ? diff : 0
}