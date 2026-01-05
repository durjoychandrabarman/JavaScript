/**
 * জাভাস্ক্রিপ্টে, "সূচক" শব্দটি মূলত একটি সিকোয়েন্সের মধ্যে একটি উপাদানের সংখ্যাসূচক অবস্থানকে বোঝায়, 
 * যেমন একটি অ্যারে বা একটি স্ট্রিং। জাভাস্ক্রিপ্ট শূন্য-ভিত্তিক ইনডেক্সিং ব্যবহার করে, 
 * amera shadharonoto  1 2 3 4 5 6 7 8 9 hishab kori 
 * but programing language প্রথম উপাদানটি ০  thale shuru kore and , দ্বিতীয়টি সূচক ১ এ, ইত্যাদি।
 * 0 1 2 3 4 5 6 7 8 9  abvabe 
 */
/** index er mardhome  array er 1st upadhan ki ba jekono upadan jana joy   */

/* example  1 */
//               0   1   2   3   4   5
let numbers = [ 11, 22, 33, 44, 55, 66,];
console.log( numbers [0]);
console.log( numbers [4]);
console.log( numbers [5]);

/* example  2 */
const myArray = ["apple", "banana", "cherry"];
console.log(myArray[0]); // "apple"
console.log(myArray[1]); // "banana"

/*example  3 */
// amara akta veriable diclar kore index ber korte pari 
//           0   1   2   3   4
let num = [ 12, 23, 34, 45, 56]
// const three = num [3];   akhane amra 3 numbr index er man jante chaiteci 
// console.log( three)

/** index diye amra kono akta veriable er man set/ update / change / add korte pari */

let myIndex = [24, 47, 58, 68, 89,]
myIndex[3] = 100;   /**er mardhome ami 3 number index er man change korlam */
console.log( myIndex)

myIndex [5] = 4000;
console.log( myIndex); /**akhane ami akta number addd korlam  / 5 index er man set korlam */