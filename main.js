function calculateAverage(scores) {
    let sum = 0;
    for (i = 0; i < scores.length; i++){
    sum += scores[i];}
    return Math.round(sum / scores.length);
}

const myScore = [9,8,7,6,5,4,3,2,1]

const average = calculateAverage(myScore);
console.log(`средний балл: ${average}`);

