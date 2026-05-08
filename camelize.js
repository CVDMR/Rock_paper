function camelize (text) {
    let x = text.split("-");
    // let x2 = x[0] + x[1].charAt(0).toUpperCase() + x.slice(1)
    let x2 = x.map((word, i) => i == 0 ? word : word[0].toUpperCase()  + word.slice(1))
    return x2.join("");    
}

let m = "atrna";
// m = m.charAt(0)
let m2 = m.slice(1)


// console.log(m2)


console.log(camelize("ola-mundo"))