class Employee {
  constructor(name, type, hours, salary) {
    this.name = name;
    this.type = type;
    this.hours = hours;
    this.salary = salary;
  }
}

class FullTimeEmployee extends Employee {}
class PartTimeEmployee extends Employee {}

function calcSalaryEmployees(employees) {
  let resultSalaryFullTime = { total: 0 };
  let resultSalaryPartTime = { total: 0 };
  let regularHours = 6;

  for (let i = 0; i <= employees.length - 1; i++) {
    if (employees[i].type === "Full-Time") {
      let salaryAfter6 = 75_000;
      if (employees[i].hours > regularHours) {
        const regularSalary = regularHours * employees[i].salary;
        const overTime = (employees[i].hours - regularHours) * salaryAfter6;
        resultSalaryFullTime.total = overTime + regularSalary;
      } else {
        resultSalaryFullTime.total += employees[i].hours * employees[i].salary;
      }
    }
    if (employees[i].type === "Part-Time") {
      let salaryAfter6 = 30_000;
      if (employees[i].hours > regularHours) {
        const regularSalary = regularHours * employees[i].salary;
        const overTime = (employees[i].hours - regularHours) * salaryAfter6;
        resultSalaryPartTime.total = regularSalary + overTime;
      } else {
        resultSalaryPartTime.total = employees[i].hours * employees[i].salary;
      }
    }
  }

  return { resultSalaryFullTime, resultSalaryPartTime };
}

// main.js

const rafansa = new Employee("Rafansa Oktaviano", "Full-Time", 10, 100_000);
const epan = new Employee("Fladio Armandika", "Part-Time", 7, 50_000);
const employees = [rafansa, epan];
const result = calcSalaryEmployees(employees);

console.log({ employees, result });
