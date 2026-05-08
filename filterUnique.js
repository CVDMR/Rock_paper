
function unique(arr) {
  for (i = 0; i <= arr.length-2; i++) {
    for (j = 1; j <= arr.length-1; j++) {
      if (arr[i] == arr[j]) {
        arr.splice(j)

      }
    }
  }
  return arr;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O