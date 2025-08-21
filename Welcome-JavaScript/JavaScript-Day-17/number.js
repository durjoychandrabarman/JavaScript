var applePrice = 200;
var bananaPrice = 300;

// console.log(applePrice);
// console.log(typeof bananaPrice);

console.log(applePrice + bananaPrice);
// console.log(orangPrice);

// note : jodi kono Number ke ' ' er mordha rakhi seta string hoye jay 

var orangPrice = '400';

console.log(mangoPrice);
console.log(typeof orangPrice);
// console.log(mangoPrice);

// note : jodi kono Number ke ' ' er mordha rakhi seta string hoye jay . nicher moto likle  er string thakbe na
var orangPrice = parseInt ('400');
var mangoPrice = parseFloat (4.5);
console.log(typeof orangPrice)

// note: parseFloat and parseInt er dhara  kono Number ke  intijer Number and float number a convert kora jay 
// exmple:
var age = parseInt ('20.6') ;
var taka = parseFloat ('500');
console.log(age);
console.log(taka);

// some problems?
var fistNumber = 0.6;
var secondNumber = 0.3;
var total = fistNumber+ secondNumber;
console.log(total)
console.log(total.toFixed(2))