/**javascript continue 
 * 
২৪৯ / ৫,০০০
জাভাস্ক্রিপ্টে continue স্টেটমেন্ট লুপের মধ্যে ব্যবহার করা হয় যাতে বর্তমান পুনরাবৃত্তির অবশিষ্ট কোডটি বাদ দেওয়া যায় এবং তাৎক্ষণিকভাবে 
লুপের পরবর্তী পুনরাবৃত্তিতে যাওয়া যায়। ব্রেক স্টেটমেন্টের বিপরীতে এটি লুপটিকে সম্পূর্ণরূপে বন্ধ করে দেয় না।
*/

// java script loop a continue mane skip this item 

// for ( let i = 1 ; i < 10 ; i++){
//     if ( i % 2 === 1 ){  /** consditions er mane jodi i er man 2 dara vag korle 1 hoy thahole si number gulo skip korbe  */
//         continue;
//     }
//     console.log(i)
// }

let n = 0;
while ( n < 10 ){
    n++
    if( n % 5 !== 0){
        continue
    }
    console.log( n)
}