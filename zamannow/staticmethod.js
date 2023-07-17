class MathUtil {
  static sum(...numbers) {
    let total = 0;

    if (numbers.length === 0) {
      throw new Error("Total para harus lebih dari 0");
    }
    for (let number of numbers) {
      total += number;
    }
    return total;
  }
}

const result = MathUtil.sum(1, 2, 3, 4, 5);
const result1 = MathUtil.sum();

console.log(result1);
console.log(MathUtil.sum("rok"));
