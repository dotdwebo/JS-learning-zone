let isAdmin = true 
console.log(typeof isAdmin); // boolean 

let isNum = 123;
console.log(typeof isNum); // number 

let isString = '99';
console.log(typeof isString); // string 

let isNull = null;
console.log(typeof isNull); //object not null for legacy reason 

let undefined;
console.log(typeof undefined); //undefined

function test(x){
    if(isNaN(x)){
        return NaN;
    }

    return x;
}

console.log(test('1')); // 1
console.log(test('Not a number')); // NaN

const sym1 = Symbol();
const sym2 = Symbol('foo');
const sym3 = Symbol('foo');
console.log(sym1)
console.log(sym2);
console.log(sym3);

if(sym2 === sym3) {
    console.log('Same');
}else{
    console.log('Not same');
}

