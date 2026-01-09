/**
 * 1️⃣ Arrow Function কী?
    Arrow function হলো function লেখার একটি short & modern syntax (ES6 থেকে এসেছে)।
 */

// 📌 Normal function 
/**
 * function sum (n1 ,n2 ){
    const result = n1 + n2;
    return result;
}

const sumed = sum(10,40);
console.log(sumed)
 */

// 📌 How to declar Arrow function 

/** 4️⃣ Short Function Body (Single line)

📌 যদি function body এক লাইনের হয়, তাহলে {} দরকার নেই return নিজে থেকেই হয় (implicit return) */
// Single line হলে 👉 return লাগবে না
const sum2 = (num1, num2) => num1 + num2 ;

/**
 * 📌 যদি function body Multiple লাইনের হয়, return নিজে থেকেই হয় na  */
//  Multiple line হলে 👉 return লাগবে  👉 Curly braces {} ব্যবহার করতে হবে 👉 return keyword লিখতেই হবে

const multiply = (A , B) => {
    return A*B;
}
console.log(multiply(10,10));

console.log(sum2(20,30));


/**
 * 6️⃣ Quick Summary 🧠

    => মানেই arrow function

    Multiple parameter 👉 (a, b, c)

    {} থাকলে 👉 return লিখতে হবে

    Single line হলে 👉 return লাগবে না
 */

