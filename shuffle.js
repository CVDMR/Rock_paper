

let ar = [1, 2, 3];


// ar.sort( (a, b) => b - a );



function shuffle(array) {
    
    array.sort( () => Math.random() - 0.5);

    return array
}

console.log(shuffle(ar))