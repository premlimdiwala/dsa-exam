function Palindrome(arr) {
    let start = 0;
    let end = arr.length - 1;
  
    while (start < end) {
      if (arr[start] !== arr[end]) {
        return false; 
      }
      start++;
      end--;
    }
  
    return true; 
  }
  
 
  const numArray = [1, 2, 3, 2, 1];
  if (Palindrome(numArray)) {
    console.log("The array is a palindrome.");
  } else {
    console.log("The array is not a palindrome.");
  }
  