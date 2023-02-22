function solution(food) {
    const leftFoods = food.slice(1).map((food, i) => `${i + 1}`.repeat(Math.floor(food / 2)));
    const rightFoods = [...leftFoods].reverse();
    
    return leftFoods.join('') + '0' + rightFoods.join('');
}