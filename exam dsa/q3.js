let arr = [30,50,40,10,20,5];

const quickSort = (arr) => {
    let n = arr.length;
    if (n <= 1) return arr;
    let pivot = arr[n - 1];
    let left = [];
    let right = [];
    for (let i = 0; i < n - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
      
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(arr));
  