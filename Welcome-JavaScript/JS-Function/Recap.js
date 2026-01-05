// 📌 Simple Example
function add (price1 , price2){
    const total = price1 + price2;
    return total;
}
let bill = add(20, 80);
console.log(bill);

// 📌 shortcut Example 
function add2 (price1, price2){
    return price1 + price2;
}

let bill2 = add2(10,20)
console.log(bill2)

// 📌 Example
function doMath (num1 , num2){
    const sum = num1 + num2;
    const difference = num1 - num2;
    const multiply = sum * difference;
    const result = multiply /2;
    return result;
}
const result = doMath(20, 10);
console.log(result)
