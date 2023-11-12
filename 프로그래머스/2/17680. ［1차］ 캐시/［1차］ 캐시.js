// 처음 세개는 cache miss
// 큐로 동작

const HIT_TIME = 1
const MISS_TIME = 5

function solution(cacheSize, cities) {
    if (cacheSize === 0) {
        return cities.length * MISS_TIME    
    }
    
    const cache = new Map()
    let time = 0
    
    const upperCaseCities = cities.map((city) => city.toUpperCase())
    
    upperCaseCities.forEach((city, i) => {
        if (cache.has(city)) {
            time += HIT_TIME
            cache.delete(city)
        } else {
            time += MISS_TIME
            if (cache.size >= cacheSize) {
                cache.delete(cache.keys().next().value)
            }
        }
        
        cache.set(city, 1)
    })
    
    return time
}