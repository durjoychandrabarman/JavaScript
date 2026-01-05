/**
 * জাভাস্ক্রিপ্টে, trim() পদ্ধতি হল একটি অন্তর্নির্মিত স্ট্রিং ফাংশন যা স্ট্রিংয়ের উভয় প্রান্ত থেকে হোয়াইটস্পেস অপসারণ করতে ব্যবহৃত হয়।
 *  এর মধ্যে রয়েছে স্পেস, ট্যাব এবং লাইন ফিড (\n) এবং ক্যারেজ রিটার্ন (\r) এর মতো লাইন টার্মিনেটর অক্ষর।
 */
let subject = '  biology  '
let book = 'biology'

// akhane Biology er banan er mordha parthoko ace 

if(subject.trim() === book.trim()){
    console.log('amer exam a question komon porse ami a+ pabo');
}
else{
    console.log( 'amer exam a question komon pore nai ami a+ pabo na ')
}
