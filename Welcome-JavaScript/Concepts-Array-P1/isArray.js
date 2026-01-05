// Array.isArray() হল জাভাস্ক্রিপ্টের একটি স্ট্যাটিক পদ্ধতি যা একটি প্রদত্ত মান 
// একটি অ্যারে কিনা তা নির্ধারণ করতে ব্যবহৃত হয়। যদি মানটি একটি অ্যারে হয় তবে
// এটি true প্রদান করে, অন্যথায়false প্রদান করে। এই পদ্ধতিটি instanceof Array
// এরচেয়ে বেশি পছন্দনীয় কারণ এটি অ্যারের জন্য আরও নির্ভরযোগ্য পরীক্ষা প্রদান করে, 
// বিশেষ করে যখন বিভিন্ন জাভাস্ক্রিপ্ট কনটেক্সট (যেমন, iframes) থেকে মান নিয়ে কাজ করা হয়। 

const myName = ['durjoy ', 'chandra', 'roy']; /** at akti array man */
const mystring = 12;        /** ati akti string man */
const myooo = [];       /** at akti array man */

console.log(Array.isArray(myName));
console.log(Array.isArray(mystring));
console.log(Array.isArray(myooo));