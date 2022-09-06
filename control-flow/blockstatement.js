
// blockstatement
{
    let hi = "Hi";
    var yo = "yoo!";
    const pi = 3.14;



console.log(hi); // Hi!
console.log(yo); // yoo!
console.log(pi); // 3.14

}

let x = 0;
while (x < 5) {

    console.log(x++);  // 0, 1, 2, 3, 4
}

if(1 === 1){
    console.log('Hi!') // Hi!
}

var z = "outside blockstatement";

{
    var z = "inside blockstatement";
}

console.log(z); // inside blockstatement | Potential Problem: scoping effect.