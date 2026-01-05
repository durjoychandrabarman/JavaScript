/*JavaScript-এ sort() হলো একটি array-কে সাজানোর জন্য ব্যবহৃত মেথড।
সহজভাবে বললে—sort() array-র ভ্যালুগুলোকে ascending (ছোট→বড়)
 বা descending (বড়→ছোট) ক্রমে সাজায়।
*/
const name = ['Durjoy', 'chandra','Barman']
const nam = name.sort()
// console.log(nam)

const numbers = [4 ,5 ,1,3,56,78,90,32,46,75,31,6,]
const aseNum = [...numbers].sort(function(a, b){return a - b})
const desNum = [...numbers].sort(function(a, b){return b - a})
console.log(aseNum)
console.log(desNum)