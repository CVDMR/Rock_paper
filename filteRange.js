
function filterRange (arr, a, b) {
     
    return arr.filter((i) => i >= a && i < b);       
}

let ar = [2, 3, 9, 28, 4];

// let c = ar.filter(i => (i > 2 && i < 9 ));

// let s = ar.filter(filterRange(2, 5));

// console.log(c)
console.log(filterRange(ar, 2, 5))

// function filterRange (value, a, b) {
//     if (value >= a || value < b) {
//         return value
//     };                       
// }
