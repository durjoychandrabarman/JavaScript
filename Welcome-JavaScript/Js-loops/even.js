// let num =1;
// while (num <=20){
//     console.log(num);
//     if (num % 2 ===0){
//         console.log('even number' , num);
//     }
//     num++;
// }

let num = 1;
let sum = 0;


while ( num <=20){
    if(num % 2 === 0){
        sum = sum +num
        console.log('even number:', num)
    }
    num++;
}
console.log(sum)



