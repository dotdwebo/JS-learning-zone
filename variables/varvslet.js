let x = 'let outside';


function test(){

    let x = 'let Inside';
    console.log(x);
}

test();

function test2(){
    var x = 'var Inside';
    console.log(x);
}

test2();

// console.log(x); //ReferenceError: x is not defined. | old: test.

