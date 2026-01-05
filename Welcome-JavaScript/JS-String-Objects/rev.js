const sentens = 'I am learning Web Dev.'
// ami akhane ai I am learning Web Dev sentens ta ke revers korte chai 
// exampol : .veD beW gninrael ma I ---> ai rokom korte chai
/* example  1 */
let reverse = ''
for (const letter of sentens){
    // console.log(letter);
    reverse = letter + reverse;

}
console.log(reverse)

/* example  2 */
let rev = '';
for ( let i = 0; i < sentens.length; i++){
    // console.log(i)
    // console.log( sentens[i])
    const word = sentens[i];
    rev = word +rev
}
console.log(rev)

/* example  3 */
// shortcut solution

let reversed = sentens.split('').reverse().join('');
console.log( reversed)