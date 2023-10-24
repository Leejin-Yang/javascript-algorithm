const finalExitTime = 23 * 60 + 59
const getTotalFee = (fees, usedTime) => {
    const [baseTime, baseFee, unitTime, unitFee] = fees
    if (usedTime <= baseTime) return baseFee
    
    return baseFee + Math.ceil((usedTime - baseTime) / unitTime) * unitFee
}

function solution(fees, records) {
    const init = records.reduce((acc, cur) => {
        const [time, carId, entry] = cur.split(' ')
        const [hour, min] = time.split(':').map(Number)
        const isIn = entry === 'IN'
        const recordedTime = isIn ? (hour * 60 + min) * -1 : hour * 60 + min
        const calcTime = acc[carId] ? acc[carId].time + recordedTime : recordedTime
        return {...acc, [carId]: {time: calcTime, isIn}}
    }, {})
    
    Object.keys(init).forEach((carId) => {
        if (init[carId].isIn) {
            init[carId].time = init[carId].time + finalExitTime
            init[carId].isIn = false
        }
    })
    
    const sortedTimeArr = Object.entries(init).sort((a, b) => Number(a[0]) - Number(b[0])).map(([_, val]) => val.time)
    
    return sortedTimeArr.map((time) => getTotalFee(fees, time))
}