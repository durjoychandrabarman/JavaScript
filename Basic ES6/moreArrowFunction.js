//📌 JavaScript (ES6) এ Arrow Function মূলত ৪ভাবে declare করা যায়। সহজ করে উদাহরণসহ নিচে দিলাম 👇
// 1️⃣ Parameter ছাড়া Arrow Function
const num = () => console.log('The Number add the file')
// num();


// 2️⃣ Single Parameter Arrow Function
// 📌 (একটা parameter হলে bracket () না দিলেও চলে)
const squre = x => x*x;
// console.log(squre(10));

// 3️⃣ Multiple Parameters Arrow Function
// 👉 একাধিক parameter হলে অবশ্যই () দিতে হবে।
const add = (a, b) => {
  return a + b;
};

// 4️⃣ Implicit Return Arrow Function
// (এক লাইনের body হলে {} ও return বাদ দেওয়া যায়)
const sum =(a , b) => a + b;
console.log(sum(3,4))
mo