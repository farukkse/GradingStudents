let grades = [33, 73, 67, 40];

function gradingStudents(grades) {
  // Write your code here

  let roundedGrades = [];

  for (let i = 0; i < grades.length; i++) {
    const grade = grades[i];

    if (grade < 38) {
      roundedGrades.push(grade);
    } else {
      const nextMultipleOf5 = Math.ceil(grade / 5) * 5;

      if (nextMultipleOf5 - grade < 3) {
        roundedGrades.push(nextMultipleOf5);
      } else {
        roundedGrades.push(grade);
      }
    }
  }
  return roundedGrades;
}

const roundedGrades = gradingStudents(grades);
console.log(roundedGrades);
