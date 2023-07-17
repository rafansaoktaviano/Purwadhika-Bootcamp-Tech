class Student {
  constructor(name, email, score, age) {
    this.name = name;
    this.email = email;
    this.score = score;
    this.age = age;
  }
}

function calculate(students) {
  let resultAge = { highest: 0, smallest: students[0].age, average: 0 };
  let resultScore = { highest: 0, smallest: students[0].score, average: 0 };

  for (let i = 0; i <= students.length - 1; i++) {
    // SCORE
    if (students[i].score > resultScore.highest) {
      resultScore.highest = students[i].score;
    } else if (students[i].score < resultScore.smallest) {
      resultScore.smallest = students[i].score;
    }

    // AGE
    if (students[i].age > resultAge.highest) {
      resultAge.highest = students[i].age;
    } else if (students[i].score < resultAge.smallest) {
      resultAge.smallest = students[i].age;
    }

    // AVERAGE
    resultAge.average += students[i].age;
    resultScore.average += students[i].score;
  }

  return { resultAge, resultScore };
}

function calculateAndGetStudents(students) {
  let resultAge = {
    highest: new Student("", "", 0, 0),
    smallest: students[0],
    average: 0,
  };
  let resultScore = {
    highest: new Student("", "", 0, 0),
    smallest: students[0],
    average: 0,
  };

  for (let i = 0; i <= students.length - 1; i++) {
    // SCORE
    if (students[i].score > resultScore.highest.score) {
      resultScore.highest = students[i];
    } else if (students[i].score < resultScore.smallest.score) {
      resultScore.smallest = students[i];
    }

    // AGE
    if (students[i].age > resultAge.highest.age) {
      resultAge.highest = students[i];
    } else if (students[i].score < resultAge.smallest.age) {
      resultAge.smallest = students[i];
    }

    // AVERAGE
    resultAge.average += students[i].age;
    resultScore.average += students[i].score;
  }

  return {
    age: resultAge,
    score: resultScore,
  };
}

// MAIN.js
const ridwan = new Student("Ridwan A", "riwdwan@gmail.com", 70, 11);
const aldi = new Student("Aldi", "aldi@gmail.com", 72, 12);
const agus = new Student("Agus", "agus@gmail.com", 77, 11);

const students = [ridwan, aldi, agus];

const result = calculate(students);
const resultStudents = calculateAndGetStudents(students);


console.log(  resultStudents );