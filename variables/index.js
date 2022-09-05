var x = 'hello world';
let y = 'hi hi hi';
const z = 'This is a constant';

 x = 99;
 y = true;
//  z = 1; //error


 function call(){
    // var x = 1;
    
    console.log('I call var x! Wanna know the result. Result: '+x)
    console.log('I call let y! Wanna know the result. Result: '+y)
    console.log('I call const z! Wanna know the result. Result: '+z)
 }

// console.log(x);
// console.log(y);
call();
// console.log(z); //error
