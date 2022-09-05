function test(){

    let x = 'Using let';
    console.log(x);
}

test();

function test2(){
    var x = 'Using var';
    console.log(x);
}

test2();

console.log(x); //ReferenceError: x is not defined.