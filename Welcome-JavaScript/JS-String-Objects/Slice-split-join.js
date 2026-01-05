// Slice জাভাস্ক্রিপ্টে slice() পদ্ধতিটি একটি অ্যারে বা স্ট্রিং এর একটি অংশ বের করে নতুন অ্যারে বা স্ট্রিং হিসেবে
//  ফেরত পাঠাতে ব্যবহৃত হয়। এটি মূল অ্যারে বা স্ট্রিং পরিবর্তন করে না।

/*split : জাভাস্ক্রিপ্টের split() পদ্ধতিটি একটি অন্তর্নির্মিত স্ট্রিং পদ্ধতি যা একটি স্ট্রিংকে সাবস্ট্রিংগুলির একটি ক্রমযুক্ত তালিকায় 
        ভাগ করতে ব্যবহৃত হয়, এই সাবস্ট্রিংগুলিকে একটি অ্যারেতে স্থাপন করে এবং অ্যারেটি ফিরিয়ে দেয়। মূল স্ট্রিংটি অপরিবর্তিত থাকে।
*/
const myName = 'Durjoy';
// console.log( myName.slice(3,6))

// split ( ' ') dile alada alada kore vag kore dey

// let address = 'Shimulguri Shaldanga Debiganj Panchagarh'
// console.log( address.split(' ' ))


/** jakhane a ace sai khan thake alada vabe vag kore kice */
let address = 'Shimulguri Shaldanga Debiganj Panchagarh'
console.log( address.split('a' ))

const friendGroup = 'Durjoy,anibash,atik,turjo,linkon'
const friend = ( friendGroup.split(','))
console.log(friend)

const realfriend = [ 'Durjoy', 'anibash', 'atik', 'turjo', 'linkon' ]

// console.log( realfriend.join());
console.log( realfriend.join('|'));

console.log( realfriend.join('-'));

console.log( realfriend.join('_'));




