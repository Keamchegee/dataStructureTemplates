function twoPointersSorted(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) {
      return [left, right]; // or [arr[left], arr[right]]
    } 
    else if (sum < target) {
      left++;  // move right to increase sum
    } 
    else {
      right--; // move left to decrease sum
    }
  }

  return -1; // no pair found
}
