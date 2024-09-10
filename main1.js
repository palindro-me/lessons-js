function classifyScores(scores) {
    const classifiedScores = []
    for (let i = 0; i < scores.length; i++) {
        let grade;
        const score = scores[i]
        if (score >= 90) {
            grade = 'A';
        } else if (score >= 80) {
            grade = 'B'
        } else if (score >= 70) {
            grade = 'C'
        } else if (score >= 50) {
            grade = 'D'
        } else {
            grade = 'F'
        }
        classifiedScores.push(grade)
    }
    return classifiedScores

}

const myScores = [82, 75, 91, 85, 93, 88, 99]

const classifiedScores = classifyScores(myScores)
console.log(`Classified scores: ${classifiedScores}`)