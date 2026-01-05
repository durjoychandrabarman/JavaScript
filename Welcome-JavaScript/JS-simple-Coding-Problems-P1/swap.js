/*📌 Purpose : ami a  o b er name change korte chai
*/
let a = 6 ;
let b = 8;

console.log( a, b)

// a = b;
// b = a; /** rong tecnik */

const temp = a;
a = b;
b = temp;
// console.log(a, b)

let x = 20;
let y = 8;

[x ,y]= [y,x];
console.log(x,y)