var x = 'hello world';
let y = 'hi hi hi';
const z = 'This is a constant';

 x = 99;
 y = true;
//  z = 1; //error


 function callx(x){
    var x = 1;
    console.log('I call var x! Wanna know the result. Result: '+x)
 }

console.log(x);
console.log(y);
callx();
// console.log(z); //error
