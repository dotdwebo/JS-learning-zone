// function hoisting

hi();

function hi(){
    console.log('Hello World!');
}

// variable hoisting

console.log(g); //undefined
//let g //  declaration | result: ReferenceError
var g ; //declatration | result: undefined
g = 'Good Morning'; //initialization (assigning value)

a = 1;
b = 2;
console.log(a,b); // not hoisted


console.log(c);

const c = 7; //ReferenceError 
