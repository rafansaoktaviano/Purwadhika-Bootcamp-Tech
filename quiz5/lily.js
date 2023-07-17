function lilysHomework(arr) {
  // Write your code here
let test = 0
  do {
    swapped = false;
    
    

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
        
      }
    }
  } while (swapped);
  return test
}
console.log(lilysHomework([3, 4, 2, 5,1]));
