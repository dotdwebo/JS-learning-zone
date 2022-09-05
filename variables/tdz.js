/**
 * A let or const variable is said to be in a "temporal dead zone" (TDZ) from the start of the block until 
 * code execution reaches the line where the variable is declared and initialized.
 */

{
    console.log(a); //undefined
    console.log(b); // Reference Error
    var a = "Using Var";
    let b = "Using Let";
}