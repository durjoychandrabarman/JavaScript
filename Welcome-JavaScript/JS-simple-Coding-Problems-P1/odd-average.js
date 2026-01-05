/**
 * mull kaj je akti arry thake odd number der average ber kora 
 */

/**
 * 1. Number gulor loop korea and odd number ber kora 
 * 2. odd number ber kora hole akti arry declare kore push kora 
 * 3. tar por arry er loop kore sum ber korer 
 * 4. and arry er lenght ber kora 
 * 5. final kaj sum / length er kora
 */
function oddAverage (numbers){
    const odds =[];
    for(const number of numbers){
       if (number % 2 === 1){
            // console.log( number);
            odds.push(number)

       }
    }
    // odd number of the Array
    // console.log(odds);
    let sum = 0;
    for ( const numb of odds){
        sum = sum + numb;
    }
    const length = odds.length
    console.log(sum ,length)
    const averageNumber = sum / length;
    return averageNumber;
}

const num = [2, 3, 5, 6,7 ,8 , 9, 36, 47 ,48, 22, 55,]
const ave = oddAverage(num);
console.log('avareg is the odd number is :',ave);
