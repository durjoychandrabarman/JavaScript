// JavaScript এ “reversing” বলতে সাধারণত কোন কিছু উল্টানো বোঝায়।
const numbers =[22, 33, 44, 55, 66, 77, 88, 99,100]
// numbers.reverse()
// const reversed = numbers.reverse()
// console.log( reversed)
// console.log(numbers)

const rev_number =[]
for (const num of numbers){
    rev_number.unshift(num);
}
// console.log(rev_number);

const reversed_number =[];
for ( i = 0; i<numbers.length; i++){
    const numb =numbers[i];
    reversed_number.unshift(numb);
}
// console.log(reversed_number) 

const item =[2,3,4,5,6,7,8,9,10]
rev_item = [];
for (let i = item.length -1;i>=0; i--){
    const n = item[i];
    console.log(n)
    rev_item.push(n);
}
console.log(rev_item)


