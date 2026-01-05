function sumOfNumber (number){
   let sum = 0;
   for (num of number){
        sum = num +sum;
   }
   return sum;
}
let numbs = [2, 3, 4, 5, 6,];

let theAnswer =sumOfNumber(numbs);
console.log(theAnswer)