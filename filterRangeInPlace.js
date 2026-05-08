// function filterRangeinRange (arr, a, b) {

//      return arr.filter((i) => (a <= i && i <= b));       
// }

let ar = [2, 3, 9, 28, 4];

// let c = ar.filter(i => (i > 2 && i < 9 ));

// let s = ar.filter(filterRange(2, 5));

// console.log(c)
console.log(filterRangeInPlace(ar, 2, 5))

// function filterRange (value, a, b) {
//     if (value >= a || value < b) {
//         return value
//     };                       
// }

function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    // remove if outside of the interval
    if (val < a || val > b) {
      arr.splice(i, 1);
      i++;
    }
  }

}