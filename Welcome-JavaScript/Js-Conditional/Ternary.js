// ternary Ki  What is ternary
// My ans : ternary hole If-else  er shorthand 

/**
 * জাভাস্ক্রিপ্টের টার্নারি অপারেটর, যা কন্ডিশনাল অপারেটর নামেও পরিচিত, কন্ডিশনাল এক্সপ্রেশন লেখার 
 * একটি সংক্ষিপ্ত উপায় প্রদান করে। এটিই একমাত্র জাভাস্ক্রিপ্ট অপারেটর যা তিনটি অপারেন্ড ব্যবহার করে। 
 * 
 * বাক্য গঠন:
 * condition ? expressionIfTrue : expressionIfFalse;
 * 
 * ব্যাখ্যা:
    শর্ত: এটি এমন একটি রাশি যা সত্য বা মিথ্যাহিসাবে মূল্যায়ন করে ।
    ?: এটি সেই অপারেটর যা শর্তটিকে এক্সপ্রেশন থেকে আলাদা করে।
    এক্সপ্রেশনইফট্রু: এই এক্সপ্রেশনটি কার্যকর করা হয় এবং শর্তটি সত্য হলে এর মান ফেরত পাঠানো হয়।
    :: এটিই সেই অপারেটর যা দুটি এক্সপ্রেশনকে পৃথক করে।
    expressionIfFalse: এই এক্সপ্রেশনটি কার্যকর করা হয় এবং শর্তটিfalse এ মূল্যায়ন করলে এর মান ফেরত পাঠানো হয় । 
 */

const age = 18;
// ------------------------ number 1 :   shadaron if else -----------

// if ( age > 18){
//     console.log('Bro, you are adult')
// }
// else{
//     console.log( 'Bro, You are Minor')
// }

//--------------- ata hole ternary ba if else er shorthand--------------

// age >= 18 ? console.log('Bro, you are adult' ) : console.log( 'Bro, you are Minor')


// -----------------Problem Number -------3

let price = 500;
let isLeader = true;

// if (isLeader === true){
//     price = 0
// }
// else {
//     price = price + 500
// }
// console.log( price)

// ater Ternary holo---------------------------- 
price = isLeader === true ? 0 : price + 100 ;