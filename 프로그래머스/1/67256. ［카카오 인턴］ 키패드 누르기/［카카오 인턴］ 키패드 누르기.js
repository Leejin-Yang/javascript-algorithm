const leftDistance = {
    1: {2: 1, 5: 2, 8: 3, 0: 4},
    4: {2: 2, 5: 1, 8: 2, 0: 3},
    7: {2: 3, 5: 2, 8: 1, 0: 2},
    '*': {2: 4, 5: 3, 8: 2, 0: 1}
}

const rightDistance = {
    3: {2: 1, 5: 2, 8: 3, 0: 4},
    6: {2: 2, 5: 1, 8: 2, 0: 3},
    9: {2: 3, 5: 2, 8: 1, 0: 2},
    '#': {2: 4, 5: 3, 8: 2, 0: 1}
}

const centerDistance = {
    2: {2: 0, 5: 1, 8: 2, 0: 3},
    5: {2: 1, 5: 0, 8: 1, 0: 2},
    8: {2: 2, 5: 1, 8: 0, 0: 1},
    0: {2: 3, 5: 2, 8: 1, 0: 0},
}

function solution(numbers, hand) {
    const stack = []
    let leftLocation = '*'
    let rightLocation = '#'
    
    numbers.forEach((num) => {
        if (num in leftDistance) {
            stack.push('L')
            leftLocation = num
        } else if (num in rightDistance) {
            stack.push('R')
            rightLocation = num
        } else {
            const lDistance = leftLocation in leftDistance ? leftDistance[leftLocation][num] : centerDistance[leftLocation][num]
            const rDistance = rightLocation in rightDistance ? rightDistance[rightLocation][num] : centerDistance[rightLocation][num]
            
            if (lDistance === rDistance) {
                if (hand === 'right') {
                    stack.push('R')
                    rightLocation = num
                } else {
                    stack.push('L')
                    leftLocation = num
                }
            } else if (lDistance > rDistance) {
                stack.push('R')
                rightLocation = num
            } else {
                stack.push('L')
                leftLocation = num
            }
        }
    })
    
    return stack.join('')
}