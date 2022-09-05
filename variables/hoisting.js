// function hoisting

hi();

function hi(){
    console.log('Hello World!');
}

// variable hoisting

console.log(g); //undefined
//let g // referrence error declaration
var g ; //undefined
g = 'Good Morning'; //initialization