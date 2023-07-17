function input(nums) {
  let counter1 = 0;
  let counter2 = 0;
  let test1 = [];
  let test2 = [];

  for (let i = 1; i < nums.length; i++) {
    if (nums[0] === nums[i]) {
      test1.push(nums[i]);
    } else {
      test2.push(nums[i]);
    }
  }
  for (let j = 0; j < test1.length; j++) {
    if (test1[j] === test1[j]) {
      counter1++;
    }
  }
  for (let k = 0; k < test2.length; k++) {
    if (test2[k] === test2[k]) {
      counter2++;
    }
  }

  if (counter2 > counter1) {
    return test2[0];
  } else {
    return test1[0];
  }
}

console.log(input([2,2,1,1,1,2,2]));
